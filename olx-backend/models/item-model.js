const mongoose = require('mongoose');
const itemschema = new mongoose.Schema({
    name : {type: String , required:true},
    sellprice : {type:String,required:true},
    age : {type:String ,required:true},
    description : {type:String},
    location : {type:String,required:true},
    creator : {type:String,required:true}


});

exports.itemschema = itemschema;
