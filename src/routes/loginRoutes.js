const express=require ('express');
const signupdata = require('../model/signupdata');
function router(nav){
const loginRouter=express.Router();

loginRouter.get('/',function(req,res){
    res.render("login",{
        nav,
        title:'LIBRARY'
    

    });
});
loginRouter.post('/check',function(req,res){
    var email=req.body.email;
console.log(email);

    var password=req.body.password;
    console.log(password);
signupdata.findOne({$and :[{'email':email},{'password':password}]},function(err,user){
    if(user){
        console.log("valid");
        res.redirect('/books');
    }
    else{
        
        res.send("invalid credentials");
    }
})
})
return loginRouter;
}
module.exports=router;
