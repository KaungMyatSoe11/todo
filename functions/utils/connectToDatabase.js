const MongoClient = require('mongodb').MongoClient
const MONGODB_URI = process.env.MONGODB_URI;


module.exports = async () => {
    let cachedDb = null;
    if (cachedDb) return cachedDb;

    const client = await MongoClient.connect(MONGODB_URI, {
        useUnifiedTopology: true,
    });

    cachedDb = client.db("todo");

    return cachedDb;
};