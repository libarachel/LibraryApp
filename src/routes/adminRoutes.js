const express=require ('express');
const adminRouter=express.Router();
const bookdata=require('../model/bookdata');

function router(nav){
adminRouter.get('/',function(req,res){
    res.render("Addbook",{
        nav,
        title:'LIBRARY'
        
    

    });
});
adminRouter.post('/add',function(req,res){
    var item={
     Title: req.body.Title,
     Description: req.body.Description,
     Image: req.body.Image



    }
    var book=bookdata(item);
    book.save();
    res.redirect('/books');

    });
    
   
       
return adminRouter;
}
module.exports=router;