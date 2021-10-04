// const connectToDataBase = require("./utils/connectToDataBase");
const MongoClient = require("mongodb").MongoClient;
const MONGODB_URI = process.env.MONGODB_URI;

const connectToDataBase = async () => {
  let cachedDb = null;
  if (cachedDb) return cachedDb;

  const client = await MongoClient.connect(MONGODB_URI, {
    useUnifiedTopology: true,
  });

  cachedDb = client.db("todo");

  return cachedDb;
};

exports.handler = async () => {
  const db = await connectToDataBase();
  const data = await db.collection("tasks").find({}).toArray();
  console.log(data);

  return {
    statusCode: 200,
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  };
};
