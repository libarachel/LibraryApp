const express=require ('express');
function router(nav){
const loginRouter=express.Router();
loginRouter.get('/',function(req,res){
    res.render("login",{
        nav,
        title:'LIBRARY'
    

    });
});
return loginRouter;
}
module.exports=router;