const { MongoClient } = require("mongodb");
const url ="mongodb://120.0.0.1:27017";
const client = new MongoClient(url);

async function connectDb(databaseName = "chat" , collectionName = 'chatGorups') {
    let result =await client.connect();
    let dataBase =  result.db(databaseName);
    let collection =  dataBase.collection(collectionName)
    console.log(`====>> `,collection.find({}).toArray())
};
connectDb('chat', 'chatGorups');
