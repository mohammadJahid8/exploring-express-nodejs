const express = require("express");
const { getRandomUser, getAllUser, getLimitedUser, saveUser, updateAUser, DeleteUser, test } = require("../Controller/RandomUserController");
const router = express.Router();

router.route("/random")
    .get(getRandomUser)

router.get("/all", getAllUser)
router.get("/test", test)
router.post("/save", saveUser)
router.patch("/update/:id", updateAUser)
router.delete("/delete/:id", DeleteUser)



module.exports = router;