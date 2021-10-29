const mongoose = require("mongoose");
require("../src/routes/profileRoutes");

module.exports = {
    userProfile : (req,res)=>{
        res.render("profile");
    }
}