
const fs = require('fs');
const path = require('path');


let filePath = path.join(__dirname , "../files_folder");

// for (let index = 0; index < 5; index++) {
    
//     fs.writeFileSync( `${filePath}/data-${index}.js` , "console.log(`this is file`)" , (err, file)=>{
//         if(err){
//             console.log(`====>> oops facing Error`,)
//         }else console.log(`====>> file ctared sucessfully!!!!`,)
//     } )
// }



fs.readdir(filePath, (err, fileArry)=>{
    console.log(`====>> file`,fileArry);
    fs.open(`${filePath}/${fileArry[0]}` , 'r',(err, file)=>{
        console.log(`====>> file>>>>>`,file)
    })
})