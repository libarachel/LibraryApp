
const mongoose=require('mongoose');
mongoose.connect('mongodb://localhost:27017/library');
const Schema=mongoose.Schema;
const signupSchema=new Schema({
    inputfirstname:String,
    inputlastname:String,
    email:String,
    password:String,
    inputAddress:String,
    inputAddress2:String,
    inputCity:String,
    inputState:String

});

var signupdata = mongoose.model('signupdata',signupSchema);
module.exports=signupdata;
