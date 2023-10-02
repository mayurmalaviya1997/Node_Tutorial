const dbConnect = require('./db_connection.js');

const insertData = async ()=>{
    let result = await dbConnect();
    let data = await result.insertOne(null || {});
    console.log(`====>> data`,data)
    if(data?.acknowledged && data?.insertedId){
        console.log(`====>> data added sucessfully!!!`,)
    }else console.log(`====>> something went wrong with the data file`,)
};
// insertData()

async function updateData() {
    let result = await dbConnect();
    let data = await result.updateOne(
        {name:"pms-channel"},
        {$set:{adminUsers:["mayur","nimisha"]}}
    );
    if(data?.modifiedCount >0){
        console.log(`====>> successfully!!!`,)
    }else console.log(`====>> failed`,)
};
// updateData();

async function deleteData() {
    let result  = await dbConnect()
    let data  =  await result.deleteOne()
    console.log(`====>> `,data)
}
// deleteData()