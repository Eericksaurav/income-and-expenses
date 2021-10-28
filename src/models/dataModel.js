const mongoose = require("mongoose");
const User = mongoose.model("User",{    
    firstName:{
        type : String,
        required:true
    },
    lastName: {
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    re_password:{
        type:String,
        required:true
    }
})
module.exports = {User};