const { MongoClient } = require("mongodb");
let uri = 'mongodb://127.0.0.1:27017';
const client = new MongoClient(uri);

const dbConnect = async () => {
    const connect = await client.connect();
    const db = connect.db("chat");
    return db.collection('chatGroups')
}

module.exports = dbConnect;
// const getData = async () => {
//     let result = await dbConnect();
//     let data = await result.find()?.toArray();
//     console.log(`====>> `,data)
// }
// getData();

// dbConnect().then(async ( data) => {
//     let result = await data.find({}).toArray();
//     console.log(`====>> `,result)
// })

