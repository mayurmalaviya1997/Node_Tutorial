const express = require('express');
const app = express();
const appRoute = express.Router();

app.get("/", (req,res)=>{
    res.send("this is home pahe")
});

app.get("/about", (req,res)=>{
    res.send('this is about page !!')
});

app.get('/contact', (req,res)=>{
    res.send("this is contact page");
});

app.listen(5001, (err,msg)=>{
    console.log(`====>> server is running on !!!`,)
})

