const mongoose = require("mongoose");
const { useParams } = require("react-router");
const Items = require("../models/item-model");
const Users = require("../models/user-model");

// const users = [{
//     id : "u1",
//     name : "shivank",
//     email: "goyal.shivank790@gmail.com",
//     password : "shivank119",
//     mobile : "7906558590",
// }]

// const getuserbyid = (req,res,next) =>{
// const userid = req.params.uid;
// const answer = users.filter(user => user.id === userid);
// res.json(answer);
// };

const getuserbyid = async (req, res, next) => {
  let usercheck;
  try {
    usercheck = await Users.findById(req.params.uid);
  } catch (err) {
    console.log("hi");
    console.log(err);

    res.status(500).json("try again after some time");
  }

  if (!usercheck) {
    res.status(404).json("cannot find user");
  }

  res.status(201).json({ user: usercheck.toObject({ getters: true }) });
};
// const login = (req,res,next) =>{
//     const {email,password} = req.body;
//     const user = users.find(emailid => emailid.email === email);
//     if(user && user.password === password){
//         res.status(200).json("you are logged");
//     }
//     else{
//         res.status(400).json("check credentials")
//     }
// }

const login = async (req, res, next) => {
  const { email, password } = req.body;
  let usercheck;
  try {
    usercheck = await Users.findOne({ email: email });
  } catch (err) {
    console.log(err);
    res.status(400).json("try after some time");
  }

  if (!usercheck) {
    res.status(501).json("invalid email");
  } else {
    if (usercheck.password !== password) {
      res.status(501).json("invalid password");
    }
  }

  if (usercheck && usercheck.password === password) {
    res.status(201).json({
      message: "you are logged",
      user: usercheck,
    });
  }
};
// const signup = (req,res,next) =>{
//   const {name ,email,password,mobile} = req.body;
//   const newuser = {
//       name,
//       email,
//       password,
//       mobile
//   }
//   users.push(newuser);
//   res.status(200).json({newuser});
// }

const signup = async (req, res, next) => {
  const { name, email, password, mobile } = req.body;
  const newuser = await new Users({
    name: name,
    email: email,
    password,
    mobile,
    items: [],
  });

  try {
    if (
      !newuser.password ||
      newuser.name === "" ||
      newuser.email === "" ||
      newuser.mobile === ""
    ) {
      res.status(501).json("check credential");
    } else {
      await newuser.save();
      res.json("you are signed in");
    }
  } catch (err) {
    console.log(err);
    res.status(404).json("cannot signup");
  }
};

// const getuseritemsbyid = async (req, res, next) => {
//   const userid = req.params.uid;
//   let useritems;
//   try {
//     useritems = await Users.findById({ userid });
//   } catch (err) {
//     console.log(err);
//     res.status(500).json("try again after some time");
//   }
//   if (!useritems) {
//     res.status(404).json("cannot find user");
//   }

//   res.status(201).json({
//     useritems: useritems.items.map((allitems) =>
//       allitems.toObject({ getters: true })
//     ),
//   });
// };
exports.getuserbyid = getuserbyid;
exports.login = login;
exports.signup = signup;
