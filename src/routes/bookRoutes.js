const express=require ('express');
const bookdata=require('../model/bookdata');
function router(nav){
    // var books=[
    //     {
    //         title:'harry potter',
    //         description:'This is the tale of Harry Potter (Daniel Radcliffe), an ordinary eleven-year-old boy serving as a sort of slave for his aunt and uncle who learns that he is actually a wizard and has been invited to attend the Hogwarts School for Witchcraft and Wizardry. Harry is snatched away from his mundane existence by Rubeus Hagrid (Robbie Coltrane), the groundskeeper for Hogwarts, .',
    //         img:"harrypotter.jpg"
    //     },
    //     { 
    //     title:'suitable boy',
    //     description:'A Suitable Boy is set in a newly post-independence, post-partition India. The novel follows the story of four families over a period of 18 months, and centres on Mrs. Rupa Mehra efforts to arrange the marriage of her younger daughter, Lata, to a "suitable boy". Lata is a 19-year-old university student who refuses to be influenced by her domineering mother or opinionated brother, Arun. Her story revolves around the choice she is forced to make between her suitors.',
    //     img:"bt.jpg"
    //     },
    //     {
    //         title:'Half Girl Friend',
    //         description:'Once upon a time there was a Bihari boy called Madhav. He fell in love with a girl called Riya. Madhav didn’t speak English well. Riya did Madhav wanted a relationship. Riya didn’t. Riya wanted just friendship. Madhav didn’t. Riya suggested a compromise. She agreed to be his half-girlfriend.',
    //         img:"chetan.jpg"
    //     },
    //     {
    //         title:'Sky Jumpers',
    //         description:'Sky Jumpers depicts a post-apocalyptic world after World War III. Its spunky heroine, Hope Toriella, her best friend, Aaren, and their acquaintance, Brock, are risk-takers who like to climb the cliff at the town edge, hold their breaths, and jump through the Bombs Breath.',
    //         img:"book4.jpg"
    //     }
    // ]
    const booksRouter=express.Router();
    booksRouter.get('/',function(req,res){
        bookdata.find()
        .then(function(books){
            res.render("books",{
                nav,
                title:'LIBRARY',
                books
            
        
            });
        })
       
    });
    booksRouter.get('/:id',function(req,res){
      const id= req.params.id
      bookdata.findOne({_id:id})
      .then(function(book){
        res.render("book",{
            nav,
            title:'LIBRARY',
            book
        
    
        });
    });
});
// booksRouter.get('/delete/:id',function(req,res){
//     const id= req.params.id
//     c.findByIdAndRemove({_id:id})
//     .then(function(books){
//       res.render("books",{
//           nav,
//           title:'LIBRARY',
          
      
  
//       });
//   });
// });
booksRouter.post("/edit",function(req,res){
    bookdata.findById(req.body.id,(err,data)=>{
        if(err){
            throw err;
        }
        else{
            res.render("editbook",{nav,title:"update",data});
        }
    })
});
booksRouter.post("/update",function(req,res){
    bookdata.findByIdAndUpdate(req.body.id,{$set:req.body},(err,data)=>{
        if(err){
            res.json({"status":"Failed"});
        }
        else if(data.n==0){
            console.log(data);
            res.json({"status":"No matches Found"});
    }
        else{
            bookdata.find().then(function(data){

                res.redirect("/books");
               
            })
        }
    })
});
booksRouter.post("/delete",function(req,res){
    const id = req.body.id;
    bookdata.findByIdAndDelete({_id:id}).then(function(){
        res.redirect("/books");
    })
});
    return booksRouter;
}

module.exports=router;