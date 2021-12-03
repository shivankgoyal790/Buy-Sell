const Users = require("../models/user-model");

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

const updateuser = async (req, res, next) => {
  const userid = req.params.uid;
  const { name, email, mobile } = req.body;
  let usertobeupdated;
  try {
    usertobeupdated = await Users.findById(userid);
  } catch (err) {
    console.log(err);
    res.status(401).json("try again");
  }
  usertobeupdated.name = name;
  usertobeupdated.email = email;
  usertobeupdated.mobile = mobile;

  try {
    await usertobeupdated.save();
  } catch (err) {
    console.log(err);
  }

  res.json({ user: usertobeupdated.toObject({ getters: true }) });
};

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
exports.updateuser = updateuser;
exports.getuserbyid = getuserbyid;
exports.login = login;
exports.signup = signup;
