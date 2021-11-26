const Items = require("../models/item-model");
const Users = require("../models/user-model");
const mongoose = require("mongoose");
const fs = require("fs");
// const Dummyitems = [
//   {
//     id: "p1",
//     name: "BMW",
//     sellprice: 760000,
//     age: "2017 mdoel",
//     description: "2400km moved",
//     location: "agra",
//     creator: "u1",
//   },
//   {
//     id: "p2",
//     name: "BMW",
//     sellprice: 760000,
//     age: "2017 mdoel",
//     description: "2400km moved",
//     location: "agra",
//     creator: "u1",
//   },
// ];

const getallitems = async (req, res, next) => {
  let allitems;
  try {
    allitems = await Items.find({});
  } catch (err) {
    console.log(err);
    res.status(404).json("cannot get items");
  }
  res.status(201).json({
    items: allitems.map((allitems) => allitems.toObject({ getters: true })),
  });
};

const getitemsbyuserid = async (req, res, next) => {
  const userid = req.params.uid;
  let answer;
  try {
    answer = await Users.findById(userid).populate("items");
  } catch (err) {
    console.log(err);
    return next(err);
  }
  try {
    if (!answer) {
      res.status(400).json({ message: "cannot find id" });
      throw new Error("cannot show");
    }
  } catch (err) {
    console.log(err);
    console.log("shivank");
  }
  res.status(201).json({
    items: answer.items.map((item) => item.toObject({ getters: true })),
  });

  // const answer = Dummyitems.find(user => { return user.creator === userid});
  // res.json({answer : answer})
};

const getitembyid = async (req, res, next) => {
  const itemid = req.params.pid;
  let item;
  try {
    item = await Items.findById(itemid);
  } catch (err) {
    console.log(err);
    res.status(404).json("try again later");
  }

  if (!item) {
    res.status(400).json({ message: "cannot find this item" });
  }

  res.status(201).json({ item: item.toObject({ getters: true }) });
  // const answer = Dummyitems.find(item => {return item.id === itemid});
  // res.json({answer : answer})
};

const createitem = async (req, res, next) => {
  const { name, sellprice, age, description, location, creator, type } =
    req.body;
  let createditem;
  try {
    createditem = await new Items({
      name,
      sellprice,
      age,
      description,
      location,
      image: req.file.path,
      type,
      creator,
    });
  } catch (err) {
    console.log("cannot create item");
  }
  let user;
  try {
    user = await Users.findById(creator);
  } catch (err) {
    res.json("sorry cannot add items");
  }

  if (!user) {
    res.status(404).json("cannot find user");
    console.log("cannot find user");
  }
  try {
    if (
      !createditem ||
      createditem.name === "" ||
      createditem.sellprice === "" ||
      createditem.location === "" ||
      createditem.type === ""
    ) {
      throw new Error("fill complete data");
    } else {
      await createditem.save();
      user.items.push(createditem);
      await user.save();
    }
  } catch (err) {
    console.log(err);
    res.status(404).json("cannot create item");
  }
  console.log("hi");
  res.status(201).json({ item: createditem });
};

const updateitem = async (req, res, next) => {
  const itemid = req.params.pid;
  const { name, sellprice, age, description, location, type } = req.body;
  let itemtobeupdated;
  try {
    itemtobeupdated = await Items.findById(itemid);
  } catch (err) {
    console.log(err);
    res.status(401).json("try again");
  }
  itemtobeupdated.name = name;
  itemtobeupdated.sellprice = sellprice;
  itemtobeupdated.age = age;
  itemtobeupdated.description = description;
  itemtobeupdated.location = location;
  itemtobeupdated.type = type;
  try {
    await itemtobeupdated.save();
  } catch (err) {
    console.log(err);
  }

  res.json({ item: itemtobeupdated.toObject({ getters: true }) });

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
};

const deleteitem = async (req, res, next) => {
  const itemid = req.params.pid;
  // const deletedplace = {...DUMMY_PLACES.findIndex(p => p.id === placeid)}
  // DUMMY_PLACES[deletedplace].remove();
  // res.json({message: 'deleted'});
  let answer;
  let imagepath;
  try {
    answer = await Items.findById(itemid).populate("creator");
    imagepath = answer.image;
  } catch (err) {
    console.log(err);
    res.json("cannot delete 1st error");
  }
  if (!answer) {
    res.status(400).json("cannot find item");
  } else {
    try {
      const sess = await mongoose.startSession();
      await sess.startTransaction();
      await answer.remove({ session: sess });
      answer.creator.items.pull(answer);
      await answer.creator.save({ session: sess });
      await sess.commitTransaction();
    } catch (err) {
      console.log(err);
      res.json("cannot delete item");
      next();
    }

    fs.unlink(imagepath, (err) => {
      console.log(err);
    });
    res.json({ answer: "deleted item" });
  }
  // let deleteditem;
  // try {
  //   deleteditem = await Items.findOneAndRemove(itemid);
  // } catch (err) {
  //   console.log(err);
  //   res.status(400).json("try again later");
  // }

  // if (!deleteditem) {
  //   res.status(404).json("cannot delete please try again");
  // }

  // res.status(201).json("item deleted");
  // const itemindex = { ...Dummyitems.findIndex(p => p.id === itemid)};

  // Dummyitems[itemindex].remove();

  //  res.json({message: 'deleted'});
};

exports.getallitems = getallitems;
exports.getitembyid = getitembyid;
exports.getitemsbyuserid = getitemsbyuserid;
exports.createitem = createitem;
exports.deleteitem = deleteitem;
exports.updateitem = updateitem;
