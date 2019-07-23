const mongoose = require('mongoose');
const UserSchema = new mongoose.Schema({
    name:{
        type: String,
        required : true
    },
    emmail:{
        type:email,
        required:true,
        unique:true,
    },
    password:{
        type:String,
        required:true,
    },
    avatar:{
        type:String,
    },
    date:{
        type:Date,
        default:Date.now,
    }
});

module.exports = user = mongoose.model('user', UserSchema);