const express = require("express");
const { getRandomUser, getAllUser, getLimitedUser } = require("../Controller/RandomUserController");
const router = express.Router();

router.route("/random")
    .get(getRandomUser)

router.get("/all", getAllUser)



module.exports = router;