const express = require("express");
const path = require("path");
const fs = require("fs");
const userroutes = require("./routes/user-routes");
const itemroutes = require("./routes/item-routes");
const contactroutes = require("./routes/contact-routes");

const mongoose = require("mongoose");
const PORT = process.env.PORT || 5000;

const app = express();
app.use(express.json());
app.use("/uploads/images", express.static(path.join("uploads", "images")));
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin,X-Requested-With,Content-Type,Accept,Authorization"
  );
  res.setHeader("Access-Control-Allow-Methods", "GET,POST,PATCH,DELETE");
  next();
});
app.use("/users", userroutes);
app.use("/api", itemroutes);
app.use("/", contactroutes);
app.use((req, res, next) => {
  if (req.file) {
    fs.unlink(req.file.path, (err) => {
      console.log(err);
    });
  }
});

mongoose
  .connect(
    "mongodb+srv://shivank:shivank@cluster0.e3ldd.mongodb.net/buy&sell?retryWrites=true&w=majority"
  )
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server listening on ${PORT}`);
    });
  })
  .catch((err) => {
    console.log(err);
  });
