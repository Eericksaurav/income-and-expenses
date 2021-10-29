const mongoose = require("mongoose");
require("../src/routes/profileRoutes");

module.exports = {
    userProfile : (req,res)=>{
        res.render("profile");
    },
    dailyView : (req,res)=>{
        res.render("daily-view");
    },
    monthlyView : (req,res)=>{
        res.render("monthly-view");
    },
    filter : (req,res)=>{
        res.render("filter")
    },
    stats : (req,res)=>{
        res.render("stats")
    }
}