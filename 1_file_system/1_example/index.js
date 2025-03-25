const fs = require("fs");
const path = require("node:path");

// check file exist or not
const filePath = `${__dirname}/info.txt`;
console.log(fs.existsSync(filePath))


// create and write data 
// synchro..
const data = fs.writeFileSync(`${__dirname}/data-1.txt`, "This is first file opeation");
console.log('Sync File done...');

//async..
fs.writeFile(`${__dirname}/data-2.txt`, `This is async file`, (err, data) => {
  if (err) {
    throw err
  } else {
    console.log('Async file Write Done...')
  }
})


// Reding operations 
fs.readFile(`${__dirname}/data-2.txt`, "utf-8", (error, data) => {
  try {
    if (error) {
      throw new Error(error);
    } else {
      console.log(data)
    }
  } catch (error) {
    console.log("ERROR", error)
  }
});


// append and unlink
fs.appendFile(`${__dirname}/append.txt`, `\n append data `, (error, data) => {
  if (error) {
    throw error
  } else {
    console.log(`Data Sucessfuly append!`);
  }
})

// delete file
fs.unlink(`${__dirname}/data-1.txt`, (error, data) => {
  if (error) {
    throw error
  } else {
    console.log(`File deleted ..`, data)
  }
})

/*-> Directories */
// //create  directory
// const pathdir = `${__dirname}/user-info/child/peta`
// fs.mkdir(pathdir, { recursive: true }, (error, data) => {
//   try {
//     if (error) {
//       throw error;
//     } else {
//       console.log("DIRECTORY CREATED !")
//     }
//   } catch (error) {
//     console.log('===>>>', error)
//   }
// })

// //Read dir content
// fs.readdir(`${__dirname}`, { recursive: true }, (error, data) => {
//   if (error) {
//     console.log(`Error in reading directory`, error)
//   } else {
//     console.log("DIRECTORY ::", data)
//   }
// });

// check directory exist or not ?
let isExist = fs.existsSync(`${__dirname}/user-info-child`);
console.log(`====>> isExist`, isExist);

// fs.rm(`${__dirname}/user-info`, { force: true, recursive: true }, (error, msg) => {
//   if (error) {
//     console.log("Error in deleting directory", error)
//   } else {
//     console.log("Directory deleted!!!")
//   }
// });


