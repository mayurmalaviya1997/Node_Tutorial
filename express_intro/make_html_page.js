const express = require('express');
const app = express();
const apprRoute = app.routes();

app.get("/", (req,res)=>{
    res.send("<h1> this is heading html send from server</h1>");
});

app.get("/about", (req,res)=>{
    res.send(`
    <h1> about Page !!</h1> </br>
    <input type="text" placeholder="user Name"  value="" />
    <button type="submit" value="submit" />
    `)
})

app.listen(5001, ()=>{
    console.log(`====>> server is listening on port 5001`,);
})