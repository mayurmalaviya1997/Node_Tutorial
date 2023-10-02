const { MongoClient } = require("mongodb");

const client =new  MongoClient(`mongodb://127.0.0.1:27017`);

async function dbConnect(database = "chat", collectionName = "chatGroups") {
    const connect= await client.connect();
    const db = connect.db(database);
    return db.collection(collectionName)
};
module.exports = dbConnect;