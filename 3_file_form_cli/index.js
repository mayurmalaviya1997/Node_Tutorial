
const fs = require('fs');
const path = require('path');

console.log(`====>> `, process.argv)

let [, , specifier, fileName, content] = process.argv;

let filePath = `${__dirname}/../folder_form_cli`

if (specifier === 'create') {
    fs.writeFile(path.join(filePath, fileName), content || "", (err, file )=>{
        if(!err) console.log(`====>>  fule created sucesfully!!`,)
    })
} else if (specifier === 'delete') {
    fs.unlink(path.join(filePath, fileName), (err)=>{
        if(!err) console.log(`====>> file deleted !!`,)
    })

} else if (specifier === 'update') {
    fs.appendFile(path.join(filePath, fileName), content || "" , (err, file)=>{
        if(!err) console.log(`====>> file updated`,file)
    } )

} else if (specifier === 'rename') {
    fs.rename(path.join(filePath, fileName), path.join(filePath,content) , (err, file)=>{
        if(!err) console.log(`====>> file name changes!!!`,file)
    })
} else if (specifier === 'read') {
    fs.readFile(path.join(filePath, fileName), 'utf8',(err, file)=>{
        if(!err) console.log(`====>> file>>`,file)
    })
} else console.log(`====>> Error !!!`,);





