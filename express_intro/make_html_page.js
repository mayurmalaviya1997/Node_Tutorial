const express = require('express');
const app = express();

app.get("/", (req,res)=>{
    res.send("<h1> this is heading html send from server</h1>");
});

app.get("/about", (req,res)=>{
    console.log(`====>> req`,req.query?.name)
    res.send(`
    <h1> about Page !!</h1> </br>
    <input type="text" placeholder="user Name"  value=${req.query?.name} />
    <button  value="submit"> submit</button>
    `)
});

app.post("/form-submit", (req,res)=>{
    console.log(`====>> req`,req)
    console.log(`====>> req`,req.data)
    res.send("form submitted !!")
})

app.listen(5001, ()=>{
    console.log(`====>> server is listening on port 5001`,);
});