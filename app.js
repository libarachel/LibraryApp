const express=require ('express');
const bodyparser=require('body-parser');
 const app=express();
 const nav=[
       
    {link:'/books',name:'Books'},
    {link:'/admin',name:'Add Book'},
    {link:'/authors',name:'Authors'},
    {link:'/adminauthor',name:'Add Author'},
    {link:'/signup',name:'Signup'},
    {link:'/login',name:'Login'}
   
   ];
const booksRouter=require('./src/routes/bookRoutes')(nav);
const authorsRouter=require('./src/routes/authorsRoutes')(nav);
const signupRouter=require('./src/routes/signupRoutes')(nav);
const loginRouter=require('./src/routes/loginRoutes')(nav);
const adminRouter=require('./src/routes/adminRoutes')(nav);
const adminauthorRouter=require('./src/routes/adminauthorRoutes')(nav);
app.use(express.urlencoded({extended:true}));
app.use(express.static('./public'));
app.set('view engine','ejs');
app.set('views','./src/views');
app.use(express.static(__dirname + '/public/images'));
app.use(bodyparser.urlencoded({extended:true}));
app.use('/books',booksRouter);
app.use('/admin',adminRouter);
app.use('/adminauthor',adminauthorRouter)
app.use('/authors',authorsRouter);
app.use('/signup',signupRouter);
app.use('/login',loginRouter);
 var details=[
     {
title:'Positive Quotations',
description:'The Positive Quotations line is an inspirational book series published by Fairview Press. Books in the series have topped the best-seller lists for self-help, juvenile nonfiction and reference books.Presents 365 life-affirming quotations to guide readers through every day of the year',
img:"book1.jpg",
detaillink:"https://en.wikipedia.org/wiki/The_Positive_Quotations_Series"
     },
     {
        title:'Double Take',
        description:'FBI agents Dillon Savich and Lacey Sherlock are joined by one of their own and a Virginia sheriff in an extraordinary case that immerses them in the world of psychic visions, mind benders, and communications with the dead.It’s been more than six months since her husband’s brutal death.',
        img:"book2.jpg",
        detaillink:"https://www.penguinrandomhouse.com/books/293957/double-take-by-catherine-coulter"
     },
     {
        title:'Sky Jumpers',
        description:'Twelve-year-old Hope has always felt a little different from everyone else who lives in White Rock. She tries hard, but she doesn’t always think before she acts. She takes big risks. Sometimes her risks pay off, but sometimes they fail. Sometimes she fails..',
        img:"book4.jpg",
        detaillink:"https://www.penguinrandomhouse.com/series/SJP/sky-jumpers"
     },
     {
        title:'The Alchemist',
        description:'Early into his journey, he meets an old king named Melchizedek, or the king of Salem, who tells him to sell his sheep, so as to travel to Egypt, and introduces the idea of a Personal Legend. Your Personal Legend "is what you have always wanted to accomplish. Everyone, when they are young, knows what their Personal Legend is',
        img:"alchemist.jpg",
        detaillink:"https://en.wikipedia.org/wiki/The_Alchemist_(novel)"
     },
     {
        title:'Harry potter',
        description:'We join Harry Potter as he enters his sixth year at Hogwarts. This volume is written from the point-of-view of the now 16-year-old Harry, as he takes advanced courses to prepare for the NEWT-level exams required for his chosen career. A darker book than the preceding volumes, it reveals more about Lord Voldemort life of the world',
        img:"hp.jpg",
        detaillink:"https://en.wikibooks.org/wiki/Muggles%27_Guide_to_Harry_Potter/Books/Half-Blood_Prince"
     },
     {
        title:'Half Girlfriend',
        description:'Madhav Jha, a rural boy from Dumraon, a village in Bihar, comes to meet the author, who is actually Chetan Bhagat, and leaves behind a few journals from his half-girlfriend, who he believes has died. Chetan Bhagat calls him up the next morning to hear his story. He starts by describing his trouble entering St. Stephens.',
        img:"chetan.jpg",
        detaillink:"https://en.wikipedia.org/wiki/Half_Girlfriend"
     }
 ]
app.get('/',function(req,res){
    res.render("index",
       {
           nav,
        title:'LIBRARY',
        details
       });
    
});

app.route('/thank')
 	.get(function (req, res) {
		res.render("thank",{nav});
   });
   
  


app.listen(5020);