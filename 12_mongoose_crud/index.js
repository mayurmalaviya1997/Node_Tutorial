const express = require('express');
const app = express();
require('./db_connect.js');
const chatMembers = require('./chat-schema.js');
app.use(express.json());

app.post("/add-member", async (req, res) => {
    if (req.body) {
        const data = await chatMembers.insertMany(Array.isArray(req.body) ? req.body : [req.body])
        res.send(data);
    }
})

app.delete("/delete-member/:_id", async (req, res) => {
    if (!req.params) {
        return res.send("Error !!!")
    }
    let data = await chatMembers.deleteOne(req.params)
    res.send(data)
})

app.put('/update/:_id',async (req,res)=>{
    const data = await chatMembers.updateOne(
        req.params,
        {
            $set:req.body
        }
    )
    res.send(data)
})

app.listen(5001, () => {
    console.log(`====>> server is running `,)
}
)



