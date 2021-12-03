const express = require("express");
const userscontrollers = require("../Controllers/users-controllers");
const router = express.Router();

router.get("/:uid", userscontrollers.getuserbyid);
router.post("/login", userscontrollers.login);
router.post("/signup", userscontrollers.signup);
router.patch("/:uid/updateuser", userscontrollers.updateuser);

module.exports = router;
