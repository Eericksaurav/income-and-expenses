const mongoose = require("mongoose");
const express= require("express")
const router = express.Router();
const loginCont = require("../../controllers/loginCont");

/* main route */
router.route("/")
    .get(loginCont.login)
    .post(loginCont.login);

router.route('/register')
    .get(loginCont.register)
    .post(loginCont.register);
    
module.exports= router;