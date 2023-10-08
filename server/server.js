import path from "path";
import { fileURLToPath } from "url";
import express from "express";
import FactsRouter from "./routes/facts-route.js";
import SharksRouter from "./routes/sharks-route.js";
import { port } from "./utils/load-env.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
app.use(express.json());
app.use(express.static("./public"));

// Routes
app.use("/data", SharksRouter);
app.use("/data", FactsRouter);
// Status 200
app.get([
	"/",
	"/about",
	"/adopt",
	"/facts",
	"/login"
], (req, res) => {
	res.status(200);
	res.sendFile(path.join(__dirname, "../public", "index.html"));
});

// Status 400
app.get("*", (req, res) => {
	res.status(404);
	res.sendFile(path.join(__dirname, "../public", "index.html"));
});

app.listen(port, () => {
	console.log(`Server started on port ${port}`);
});