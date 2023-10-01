console.log(`====>> first`,);

new Promise((resolve, reject)=>{
    setTimeout( ()=>{
        reject({name:"mayur"});
    }, 2000)
}).then((data)=>{
    console.log(`====>> data`,data)
}).catch((err)=>{
    console.log(`====>> errr`,err)
}).finally( ()=>{
    console.log(`====>> always run!!!!`,)
})

console.log(`====>> third`,);
console.log(`====>> four`,);