const express=require ('express');
const adminauthorRoutes=express.Router();

const authordata=require('../model/authordata');
function router(nav){



    adminauthorRoutes.get('/',function(req,res){
         res.render("Addauthor",{
            nav,
            title:'LIBRARY'
            
        
    
         });
     });
     adminauthorRoutes.post('/add',function(req,res){
        var data={
         Title: req.body.Title,
         Description: req.body.Description,
         Image: req.body.Image
        
            
            
        }
        var author=authordata(data);
        author.save();
        res.redirect('/authors');
    
        });
return adminauthorRoutes;
}
module.exports=router;