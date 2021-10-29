const mongoose = require("mongoose");
const express= require("express")
const router = express.Router();
const profileCont = require("../../controllers/profileCont")

/* Profile routes */
router.route("/")
    .get(profileCont.userProfile);

router.route("/posts/dailyView")
    .get(profileCont.dailyView);

router.route("/posts/monthlyView")
    .get(profileCont.monthlyView);

router.route("/posts/filter")
    .get(profileCont.filter);

router.route("/posts/stats")
    .get(profileCont.stats);
    
module.exports = router;