const express=require ('express');
const signupRouter=express.Router();
const signupdata = require('../model/signupdata');

function router(nav){

signupRouter.get('/',function(req,res){
    res.render("signup",{
        nav,
        title:'LIBRARY'
        
    

    });
});



        
    
   
signupRouter.post('/add',function(req,res){
    var dada={
        inputfirstname: req.body.inputfirstname,
        inputlastname: req.body.inputlastname,
        inputEmail4: req.body.inputEmail4,
        inputPassword4: req.body.inputPassword4,
        inputAddress2: req.body.inputAddress2,
        inputCity: req.body.inputCity,
        inputState: req.body.inputState
        
 }
    var signupdetails=signupdata(dada);
    signupdetails.save();
    res.redirect('/thank');

    });

return signupRouter;
}
module.exports=router;