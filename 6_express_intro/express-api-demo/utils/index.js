const fs = require('node:fs');
const path = require('node:path');
const readData = (filePath) => {
  let fileData = [];
  try {
    let data = fs.readFileSync(`${filePath}`, { encoding: 'utf8' });
    if (data) {
      fileData = JSON.parse(data)
    }
  } catch (error) {
    console.log(`[utils]-[readData], [path]${__filename}\n`, error)
  }
  return fileData;
}
module.exports = {
  readData,
}