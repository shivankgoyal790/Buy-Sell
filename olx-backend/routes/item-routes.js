const express = require("express");

const router = express.Router();

const Dummyitems = [
    {
        id : "p1",
        name : "BMW",
        sellprice : 760000,
        age : "2017 mdoel",
        description : "2400km moved",
        location : "agra",
        creator : "u1"
        
    }
]

router.get('/',);

router.get("/:pid/item",(req,res,next) =>{
    const itemid = req.params.pid;
    const answer = Dummyitems.find(item => {return item.id === itemid});
    res.json({answer : answer})
}); 

//getitemby userid
router.get("/:uid/usersitem",(req,res,next) =>{
    const userid = req.params.uid;
    const answer = Dummyitems.find(user => { return user.creator === userid});
    res.json({answer : answer})
});

module.exports = router;