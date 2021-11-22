const mongoose = require("mongoose");
const itemschema = new mongoose.Schema({
  name: { type: String, required: true },
  sellprice: { type: String, required: true },
  age: { type: String, required: true },
  description: { type: String },
  location: { type: String, required: true },
  image: { type: String, required: true },
  type: { type: String, required: true },
  creator: { type: mongoose.Types.ObjectId, require: true, ref: "Users" },
});

module.exports = mongoose.model("Items", itemschema);
