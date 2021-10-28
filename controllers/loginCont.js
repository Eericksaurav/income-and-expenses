const mongoose = require("mongoose");
require("../src/routes/loginRegisterRoutes")

module.exports={
    login: (req,res)=>{
        res.render("login");
    },
    register:(req,res)=>{
        res.render("register");
    }
}