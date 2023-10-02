const express = require('express');
const app = express();
const dbConnect = require('./db_connect.js');
app.use(express.json())
app.get("/", async (req,res)=>{
    let result = await dbConnect();
    let data = await result.find({}).toArray()
    res.send(data)
})

app.post("/", async (req,res)=>{
    const result = await dbConnect();
    console.log(`====>> `,req.body)
    let data = await result.insertMany(Array.isArray(req.body) ? req.body : [req.body]);
    console.log(`====>> `,data)
    res.send(data)
})

app.put("/", async (req,res)=>{
    let result = await dbConnect();
    let data = await  result.updateOne(
        req.body.old,
        {$set:{...req.body.new}}
    )
    console.log(`====>> data`,data)
})
app.listen(5001, ()=>{
    console.log(`====>> listening......`,)
})
