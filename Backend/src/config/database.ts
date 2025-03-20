import { MongoClient, Db } from "mongodb";
import dotenv from "dotenv";

dotenv.config();

const uri = process.env.MONGO_URI || "";
const client = new MongoClient(uri);

let db: Db;

async function connectDB() {
  try {
    await client.connect();
    console.log("Connected to MongoDB");
    db = client.db(process.env.MONGO_DATABASE);
  } catch (error) {
    console.error("MongoDB connection error:", error);
  }
}

export { connectDB, db };
