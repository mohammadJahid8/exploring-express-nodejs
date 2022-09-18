const express = require("express");
const { getRandomUser } = require("../Controller/RandomUserController");
const router = express.Router();

router.route("/random")
    .get(getRandomUser)

module.exports = router;