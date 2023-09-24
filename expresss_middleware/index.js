const express = require('express');
const app = express();
const appUser = express.Router();
const appPost = express.Router();
console.clear()
/*-> application level middleware */
const watchApplication = (req, res, next) => {
    console.log(`====>> watchApplication!!!`,)
    next()
}
/*-> Route level MiddleWare for user */
const watchUserMiddleware = (req,res,next)=>{
    console.log(`====>> watchUserMiddleware`,)
    next()
}

const watchPostMiddleware=(req,res,next)=>{
    console.log(`====>> watchPostMiddleware`,)
    next()
}
appUser.use(watchUserMiddleware)
app.use(appUser);

appPost.use(watchPostMiddleware)
app.use(appPost);

/*-> route level middleware for posts */
/*-> for global snippet */
app.use(watchApplication);

app.get('/', (req, res) => {
    res.send(' default page');
});

app.get("/about", (req, res) => {
    res.send("AboutPage")
})

/*-> ROute specific middleware */
const watchContactPage = (req, res, next) => {
    console.log(`====>> watchContactPage`,)
    next()
}
app.get("/contact", watchContactPage, (req, res) => {
    res.send("contactPage")
})


/*-> route level middleware for groups of route*/
appUser.get("/user-get", (req,res)=>{
    res.send('this get user data')
})

appUser.get("/user-create", (req,res)=>{
    res.send('this get user data')
})

appUser.get("/user-update", (req,res)=>{
    res.send('this get user data')
})

//---- Post =----

appPost.get('/post-get',(req,res)=>{
    res.send("post-one page")
})

appPost.get('/post-update',(req,res)=>{
    res.send("post-all page")
})

app.get("*", (req, res) => {
    res.send("page not found!!")
});
app.listen(5001);