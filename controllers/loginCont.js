const mongoose = require("mongoose");
const {User} = require("../src/models/dataModel")
require("../src/routes/loginRegisterRoutes")

module.exports={
    login: (req,res)=>{
        res.render("login");
    },
    register:(req,res)=>{
        res.render("register");
    },

    /* Registration POST section */
    registerPost: async(req,res)=>{
        try {
            const mpassword = req.body.password;
            const ree_password = req.body.re_password;

            /* comparing the password and re_passowrd for the registration */
            if (mpassword === ree_password) {
                const userdata = new User({
                    first_name : req.body.first_name,
                    last_name : req.body.last_name,
                    phone : req.body.phone,
                    email : req.body.email,
                    password : req.body.password,
                    re_password : ree_password
                });
                console.log(`the sucess part:${userdata}`) 
                await userdata.save();
                res.status(201).render('register');
            } else {
                res.send("re-fill the form");
            }
        } catch (error) {
            console.log("error == ",error);
            res.status(400).send(error);
        }
    },
    
}