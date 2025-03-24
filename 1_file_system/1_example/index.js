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

