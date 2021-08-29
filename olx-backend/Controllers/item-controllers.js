const mongoose = require("mongoose");
const Items = require("../models/item-model");
const Users = require("../models/user-model");
const Dummyitems = [
    {
        id : "p1",
        name : "BMW",
        sellprice : 760000,
        age : "2017 mdoel",
        description : "2400km moved",
        location : "agra",
        creator : "u1"
        
    },
    {
        id : "p2",
        name : "BMW",
        sellprice : 760000,
        age : "2017 mdoel",
        description : "2400km moved",
        location : "agra",
        creator : "u1"
    }
];

const getallitems = (req,res,next) =>{
    res.json({Dummyitems});
}

const getitemsbyuserid  = (req,res,next) =>{
    const userid = req.params.uid;
    const answer = Dummyitems.find(user => { return user.creator === userid});
    res.json({answer : answer})
}

const getitembyid = (req,res,next) =>{
    const itemid = req.params.pid;
    const answer = Dummyitems.find(item => {return item.id === itemid});
    res.json({answer : answer})
}

const createitem = (req,res,next) =>{
    const {id,name,sellprice,age,description,location,creator} = req.body;
    const createditem = {
        id ,
        name,
        sellprice,
        age,
        description,
        location,
        creator
    }
    Dummyitems.push(createditem);
    res.status(201).json({item : createditem});
}

const updateitem = (req,res,next) =>{
    const itemid = req.params.pid;
    const { name,sellprice,age,description,location} = req.body;
    const itemtobeupdated = {...Dummyitems.find(item => item.id === itemid)};
    const itemindex = Dummyitems.findIndex(p => p.pid === itemid)
    itemtobeupdated.name = name;
    itemtobeupdated.sellprice = sellprice;
    itemtobeupdated.age = age;
    itemtobeupdated.description = description;
    itemtobeupdated.location = location;
    Dummyitems[itemindex] = itemtobeupdated;
    try{

        res.status(200).json({itemtobeupdated});
    }
    catch(err){
        console.log(err);
    };

}
const deleteitem = (req,res,next) =>{
    const itemid = req.params.pid;
    const itemindex = { ...Dummyitems.findIndex(p => p.id === itemid)};
   
    Dummyitems[itemindex].remove();
    
     res.json({message: 'deleted'});
}

exports.getallitems = getallitems;
exports.getitembyid = getitembyid;
exports.getitemsbyuserid = getitemsbyuserid;
exports.createitem = createitem;
exports.deleteitem = deleteitem;
exports.updateitem = updateitem;