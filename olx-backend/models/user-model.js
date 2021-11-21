const mongoose = require("mongoose");
const userschema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true, minlength: 6 },
  mobile: { type: Number, required: true, minlength: 10 },
  items: [{ type: mongoose.Types.ObjectId, require: true, ref: "Items" }],
});
module.exports = mongoose.model("Users", userschema);
