const mongoose=require('mongoose');
mongoose.connect('mongodb://localhost:27017/library');
const Schemaauthor=mongoose.Schema;
const authorSchema=new Schemaauthor({
Title:String,
Description:String,
Image:String

});

var authordata = mongoose.model('authordata',authorSchema);
module.exports=authordata;