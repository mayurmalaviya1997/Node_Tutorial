const mongoose = require('mongoose');

const chatGroupSchema = new mongoose.Schema({
    "first_name": String,
    "last_name": String,
    "email": String,
    "gender": String
})

module.exports = mongoose.model("chatMembers", chatGroupSchema);