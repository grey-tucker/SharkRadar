import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import { port } from "./utils/load-env.js";
import db from "./utils/connect-db.js";

try {
	db.command({ ping: 1 });
} catch (err) {
	console.error(err);
}

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

app.use(express.static("./public"));

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
