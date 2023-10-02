const mongoose = require("mongoose")
mongoose.connect("mongodb://127.0.0.1:27017/mobile");

const androidSchema = new mongoose.Schema({
    name:{type:String},
    model:{type:String},
    price:{type:Number},
})

const saveData =async ()=>{
    const mobileModel = mongoose.model('androids',androidSchema);
    const data = new mobileModel({name:"vivo T2", model:"T2", price:1000});
    console.log(`====>> data`,data);
    const result = await data.save();
    console.log(`====>> `,result)
}
// saveData();

const updateData= async ()=>{
    const mobileModel = mongoose.model('androids', androidSchema);
    const data = await mobileModel.updateOne(
        {model:"T2"},
        {
            $set:{model:"T2 updated"}
        }
    );
        console.log(`====>> `,data)
};
// updateData();

const deleteData = async ()=>{
    const mobileModel = mongoose.model('androids',androidSchema );
    const data = await mobileModel.deleteOne({name:"vivo T2"});
    console.log(`====>> `,data)
}
// deleteData()

