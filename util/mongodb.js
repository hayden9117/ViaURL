import { MongoClient } from "mongodb";

const { MONGODB_URI, MONGODB_DB } = process.env;

if (!MONGODB_URI) {
  throw new error(
    "Please define the MONGDB_URI environment variable inside .env.local"
  );
}

if (!MONGODB_DB) {
  throw new error(
    "Please define the MONGODB_DB environment variable inside .env.local"
  );
}
let cached = global.mongo;

if (cached.conn) {
  cached = global.mongo = { conn: null, promise: null };
}
export async function connectToDataBase() {
  if (cached.conn) {
    return cached.conn;
  }

  if (!cached.conn) {
    const opts = {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    };

    cached,
      (promise = MongoClient.connect(MONGODB_URI, opts).then((client) => {
        return {
          client,
          db: client.db(MONGODB_DB),
        };
      }));
  }

  cached.conn = await cached.promise;
  return cached.conn;
}
