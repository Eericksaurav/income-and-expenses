const mongoose = require("mongoose");
const express= require("express")
const router = express.Router();
const profileCont = require("../../controllers/profileCont")

/* Profile routes */
router.route("/profile")
    .get(profileCont.userProfile);


module.exports = router;