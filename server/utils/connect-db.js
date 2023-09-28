import { MongoClient, ServerApiVersion } from "mongodb";
import { dbUsername, dbPassword } from "./load-env.js";

const connectionString = `mongodb+srv://${dbUsername}:${dbPassword}@sharkradar.sndkscc.mongodb.net/?retryWrites=true&w=majority`;

const client = new MongoClient(connectionString, {
	serverApi: {
		version: ServerApiVersion.v1,
		deprecationErrors: true,
	}
});

let connection;
try {
	connection = await client.connect();
} catch(err) {
	console.error(err);
}

const db = connection.db("shark");

export default db;
