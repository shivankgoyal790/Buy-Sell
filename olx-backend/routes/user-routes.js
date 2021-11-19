const express = require("express");
const userscontrollers = require("../Controllers/users-controllers")
const router = express.Router();

// const users = [{
//     id : "u1",
//     name : "shivank",
//     email: "goyal.shivank790@gmail.com",
//     password : "shivank119",
//     mobile : "7906558590",
// }]

router.get('/:uid',userscontrollers.getuserbyid);
router.post("/login",userscontrollers.login);
router.post("/signup",userscontrollers.signup);

module.exports = router; 	