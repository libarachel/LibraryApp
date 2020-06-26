const mongoose=require('mongoose');
mongoose.connect('mongodb://localhost:27017/library');
const Schema=mongoose.Schema;
const bookSchema=new Schema({
Title:String,
Description:String,
Image:String

});

var bookdata = mongoose.model('bookdata',bookSchema);
module.exports=bookdata;