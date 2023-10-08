import express from "express";
import db from "../utils/connect-db.js";

const dataRouter = express.Router();

dataRouter.get("/shark", async (req, res) => {
	const sharkCollection = await db.collection("shark");
	const sharkArray = await sharkCollection.find({ }).toArray();
	const sharkTypeCollection = await db.collection("sharkType");
	const sharkTypeArray = await sharkTypeCollection.find({ }).toArray();

	const sharks = sharkArray.map((shark) => {
		let species = null;

		if (shark.species !== null) {
			species = sharkTypeArray.find((sharkType) => sharkType.speciesID === shark.species) ?? null;
		}

		return {
			sharkID: shark.sharkID,
			age: shark.age,
			originLat: shark.originLat,
			originLon: shark.originLon,
            sharkSpecies: species
		};
	});

	res.json(sharks);
});

export default dataRouter;