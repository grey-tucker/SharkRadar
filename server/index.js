import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import dotenv from "dotenv";
import { MongoClient } from "mongodb";

dotenv.config();

const port = process.env.PORT || 3030;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const connectionString = process.env.CONNECTION_STRING || "";

const client = new MongoClient(connectionString);

const app = express();

app.use((req, res, next) => {
	console.log(`${req.method} ${req.url}`);
	next();
});

app.use(express.static("./public"));

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

app.get([
	"*"
], (req, res) => {
	res.status(404);
	res.sendFile(path.join(__dirname, "../public", "index.html"));
});

app.listen(port, () => {
	console.log(`Server started on port ${port}`);
});
