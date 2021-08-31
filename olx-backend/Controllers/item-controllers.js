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

const getallitems = async (req,res,next) =>{
    try{
        const allitems = await Items.find({} ,"-creator" );
        res.status(201).json({items : allitems})
    }
    catch(err){
        console.log(err);
        res.status(404).json('cannot get items');
    }
}


const getitemsbyuserid  = async (req,res,next) =>{
    const userid = req.params.uid;
    let items
    try{
        items = await Items.find({creator : userid}); 
    }
    catch(err){
        console.log(err);
        res.status(404).json("try after some time")
    }
    if(!items){
        res.status(404).json("no items found");
    }

    res.status(201).json({items:items});

    // const answer = Dummyitems.find(user => { return user.creator === userid});
    // res.json({answer : answer})
}



const getitembyid = async (req,res,next) =>{
    const itemid = req.params.pid;
    let item
    try{

        item = await Items.findById(itemid)
    }
    catch(err){
        console.log(err);
        res.status(404).json("try again later");
    }

    if(!item){
        res.status(400).json({message:"cannot find this item"});

    }

    res.status(201).json({item : item.toObject({getters :true})});
    // const answer = Dummyitems.find(item => {return item.id === itemid});
    // res.json({answer : answer})
}

const createitem = async (req,res,next) =>{
    const {name,sellprice,age,description,location} = req.body;
   let createditem;
    try{
    createditem = await new Items({
        
        name,
        sellprice,
        age,
        description,
        location,
        creator : "612bbd25ed816ca407d6ee7b"
    });
    }catch(err){
        console.log("cannot create item");
    }

    try{
        if(!createditem || createditem.name === "" || createditem.sellprice === "" || createditem.location === "" ){
            throw new Error("fill complete data");
        }
        else{
            await createditem.save();
        }
    }
    catch(err){
        console.log(err);
        res.status(404).json("cannot create item");
    }

    res.status(201).json({item : createditem});
}

const updateitem = async (req,res,next) =>{
    const itemid = req.params.pid;
    const { name,sellprice,age,description,location} = req.body;
    let itemtobeupdated
    try{

        itemtobeupdated = await Items.findById(itemid);
    }catch(err){
        console.log(err);
        res.status(401).json("try again");
    }
    itemtobeupdated.name = name;
    itemtobeupdated.sellprice = sellprice;
    itemtobeupdated.age = age;
    itemtobeupdated.description = description;
    itemtobeupdated.location = location;
    try{ 
        await itemtobeupdated.save();
      }catch(err) {
        console.log(err);
      }
      
      res.json( {item : itemtobeupdated.toObject({getters:true})}) 
      

    // const itemtobeupdated = {...Dummyitems.find(item => item.id === itemid)};
    // const itemindex = Dummyitems.findIndex(p => p.pid === itemid)
    // itemtobeupdated.name = name;
    // itemtobeupdated.sellprice = sellprice;
    // itemtobeupdated.age = age;
    // itemtobeupdated.description = description;
    // itemtobeupdated.location = location;
    // Dummyitems[itemindex] = itemtobeupdated;
    // try{

    //     res.status(200).json({itemtobeupdated});
    // }
    // catch(err){
    //     console.log(err);
    // };

}



const deleteitem =async (req,res,next) =>{
    const itemid = req.params.pid;
    let deleteditem;
    try{
        deleteditem = await Items.findOneAndRemove(itemid);
    }
    catch(err){
        console.log(err);
        res.status(400).json("try again later");
    }

    if(!deleteditem){
        res.status(404).json("cannot delete please try again");
    }
    
    res.status(201).json("item deleted");
    // const itemindex = { ...Dummyitems.findIndex(p => p.id === itemid)};
   
    // Dummyitems[itemindex].remove();
    
    //  res.json({message: 'deleted'});
}

exports.getallitems = getallitems;
exports.getitembyid = getitembyid;
exports.getitemsbyuserid = getitemsbyuserid;
exports.createitem = createitem;
exports.deleteitem = deleteitem;
exports.updateitem = updateitem;