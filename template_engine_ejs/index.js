const express = require('express');
const app = express();
const data = require('./data/index.js')
app.set('view engine','ejs');
app.use(express.static(`${__dirname}/public`))
app.get('/user', (req,res)=>{
    res.render(`${__dirname}/views`,{data})
})

app.get("/table", (req,res)=>{
    res.render(`${__dirname}/views/table.ejs`,{data})
})

app.listen(5001);

