import express from "express";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const port = 3030;

const app = express();

app.use(express.static("./public"));

app.use((req, res) => {
	res.sendFile(path.join(__dirname, "../public/", "index.html"));
});

app.listen(port, () => {
	console.log(`Server started on port ${port}`);
});
