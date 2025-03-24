/**
|--------------------------------------------------
| Make Api usong HTTP
|--------------------------------------------------
*/

/**
 * what is status code
 * 200 sucess
 * 201 create
 * 303 redirection
 * 404 page not found
 * 403 unauthorized
 * 500 server Erros
 * 
 * what is PORT number
 * 2701 -- local 
 * 3000 defaulet in react
 * 
 * what is headers 
 *      information  
 * 
*/

// const http = require('http');
// const port = 5500;
// const host = "localhost";
// const {arr} = require('./data.js')
// function _CS(fn, value) {
//     return http.createServer(fn).listen(port , host , (error)=>{
//         console.log(`====>> server is runnning ...`,)
//     })
// }

// let homePage = (req, res) => {
//     let { url } = req
//     if (url === "/get-post") {
//         res.writeHead(200,{ 'Content-Type':'application/json'})
//         // res.write(JSON.stringify({name:"mayur"}))
//         res.write(JSON.stringify(arr))
//         res.end()
//     } else if (url === '/create-post') {
//         res.end("create")
//     } else if (url === 'update-post') {
//         res.end('update')
//     } else if (url === 'delete-post') {
//         res.end('delete')
//     }
// }

// _CS(homePage);















const http = require('http');
const port = 8000
function handler(req, res) {
    switch (req.url) {
        case "/":
            res.end("This is home page!!");
            break;
        case "/get" :
            res.end(' This is get page');
            break;
        default:
            res.end("404  page not found!!")
            break;
    }
}

function _SERVER({handler, port}) {
    return http.createServer(handler).listen(port, (err, msg)=> {
        console.log(`Server running on port ${port} ===>>> `)
    });
}


_SERVER({handler, port})


