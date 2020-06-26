
const express=require ('express');
const authordata = require('../model/authordata');
function router(nav){
    // var authors=[
    //     {
    //         title:'J K Rowling',
    //         description:'J. K. Rowling, is a British author, film producer, screenwriter, and philanthropist. She is best known for writing the Harry Potter fantasy series, which has won multiple awards and sold more than 500 million copies.',
    //         img:"j k rowling.jpg"
    //     },
    //     {
    //         title:'Paulo Coelho',
    //         description:'Coelho was born on August 24, 1947, in Rio de Janeiro, Brazil. Coelho attended Jesuit schools and was raised by devout Catholic parents. ... He wrote song lyrics for Brazilian musicians protest.His famous book is Alchemist',
    //         img:"paulo coelho.jpg"
    //     },
    //     {
    //         title:'Catherine Coulter',
    //         description:'Jean Catherine Coulter (born December 26, 1942) is an American author of romantic suspense thrillers and historical romances who currently resides in northern California.',
    //         img:"cathrine coulter.jpg"
    //     },
    //     {
    //         title:'Chetan Bhagat',
    //         description:'Chetan Bhagat is Indian author and columnist, known for his Indian-English novels about young middle-class Indians. Bhagat was included in Time magazine list of World 100 Most Influential People in 2010 .He wrote Five Point Someone while in Hong Kong',
    //         img:"chetan bhagat.jpg"
    //     },
    //     {
    //         title:'Linda Picone',
    //         description:'The Positive Quotations line is an inspirational book series published by Fairview Press. Books in the series have topped the best-seller lists for self-help, juvenile nonfiction and reference books.It is written by Linda picone .',
    //         img:"linda picone.jpg",
    //     },
    //     {
    //         title:'Peggy Eddleman',
    //         description:'Peggy Eddleman is the author of the middle grade post-apocalyptic adventures SKY JUMPERS and THE FORBIDDEN FLATS . She lives at the foot of the Wasatch Mountains with her three hilarious and fun kids',
    //         img:"peggy eddleman.jpg ", 
    //     },
    //     {
    //         title:'Mamta Choudhry',
    //         description:'MAMTA CHAUDHRY’s fiction, poetry, and feature articles have been published in the Miami Review, The Illustrated Weekly of India, The Telegraph, The Statesman, Writer’s Digest, and The Rotarian, among others.',
    //         img:"mamta chodary.jpg",
    //     },
    //     {
    //         title:'Jon Gordon',
    //         description:'Jon Gordon is an American author and speaker on the topics of leadership, culture, sales, and ... In 2016, Gordon launched Positive University, an ongoing online program that provides access to content .',
    //         img:"jon gordon.jpg ",
    //     }
    // ]

const authorsRouter=express.Router();
authorsRouter.get('/',function(req,res){
    authordata.find()
    .then(function(authors){
        res.render("authors",{
            nav,
            title:'LIBRARY',
            authors
        
    
        });
    })
   
});
authorsRouter.get('/:id',function(req,res){
    const id= req.params.id
    authordata.findOne({_id:id})
    .then(function(author){
      res.render("author",{
          nav,
          title:'LIBRARY',
          author
      
  
      });
  });
});
authorsRouter.post("/edit",function(req,res){
    authordata.findById(req.body.id,(err,data)=>{
        if(err){
            throw err;
        }
        else{
            res.render("editauthor",{nav,title:"update",data});
        }
    })
});
authorsRouter.post("/update",function(req,res){
    authordata.findByIdAndUpdate(req.body.id,{$set:req.body},(err,data)=>{
        if(err){
            res.json({"status":"Failed"});
        }
        else if(data.n==0){
            console.log(data);
            res.json({"status":"No matches Found"});
    }
        else{
            authordata.find().then(function(data){

                res.redirect("/authors");
               
            })
        }
    })
});
authorsRouter.post("/delete",function(req,res){
    const id = req.body.id;
    authordata.findByIdAndDelete({_id:id}).then(function(){
        res.redirect("/authors");
    })
});
return authorsRouter;
}
module.exports=router;