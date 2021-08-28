const express = require("express");

const router = express.Router();

const users = [{
    id : "u1",
    name : "shivank",
    email: "goyal.shivank790@gmail.com",
    password : "shivank119",
    mobile : "7906558590",

}]

router.get('/:uid',(req,res,next) =>{
const userid = req.params.uid;
const answer = users.filter(user => user.id === userid);
res.json(answer);
});

module.exports = router;