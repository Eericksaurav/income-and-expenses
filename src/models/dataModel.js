const mongoose = require("mongoose");
const User = mongoose.model("User",{    
    first_name:{
        type : String,
        required:true
    },
    last_name: {
        type:String,
        required:true
    },
    phone:{
        type:Number,
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