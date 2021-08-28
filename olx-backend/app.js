const express = require("express");
const userroutes = require("./routes/user-routes");
const itemroutes = require("./routes/item-routes")
const PORT = process.env.PORT || 5000;

const app = express();

app.use("/users",userroutes);
app.use("/api",itemroutes);
app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});         


