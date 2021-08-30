const express = require("express");
const userroutes = require("./routes/user-routes");
const itemroutes = require("./routes/item-routes");
const mongoose = require("mongoose");
const PORT = process.env.PORT || 5000;

const app = express();
app.use(express.json());

app.use("/users",userroutes);
app.use("/api",itemroutes);

mongoose.connect("mongodb+srv://shivank:shivank@cluster0.e3ldd.mongodb.net/buy&sell?retryWrites=true&w=majority")
.then(()=>{

  app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
  });        
}).catch(err => {

  console.log(err);
}); 


