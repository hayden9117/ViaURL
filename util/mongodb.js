import { MongoClient } from "mongodb";
import mongoose from "mongoose";
import nextConnect from "next-connect";
const MONGODB_DB = process.env.MONGODB_DB;
const MONGODB_URI = process.env.MONGODB_URI;
let cachedClient = null;
let cachedDb = null;

if (!MONGODB_URI) {
  throw new Error(
    "Please define the MONGODB_URI environment variable inside .env.local"
  );
}

if (!MONGODB_DB) {
  throw new Error(
    "Please define the MONGODB_DB environment variable inside .env.local"
  );
}

export async function connectToDatabase() {
  if (cachedClient && cachedDb) {
    return { client: cachedClient, db: cachedDb };
  }

  // set the connection options
  const opts = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  };

  // Connect to cluster
  let client = new MongoClient(MONGODB_URI, opts);

  await mongoose
    .connect(MONGODB_URI)
    .then(() => console.log("connected"))
    .catch((_err) => console.log(_err));

  let db = client.db(MONGODB_DB);

  // set cache
  cachedClient = client;
  cachedDb = db;

  return {
    client: cachedClient,
    db: cachedDb,
  };
}
