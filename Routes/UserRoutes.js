const express = require("express");
const { getRandomUser, getAllUser, getLimitedUser, saveUser, updateAUser } = require("../Controller/RandomUserController");
const router = express.Router();

router.route("/random")
    .get(getRandomUser)

router.get("/all", getAllUser)
router.post("/save", saveUser)
router.patch("/update/:id", updateAUser)



module.exports = router;