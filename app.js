const express=require('express');
const app=express();
const mongoose= require('mongoose');
const path=require('path');
const Listing=require("./models/listing.js");
const methodOverride=require("method-override");
const { log, error } = require('console');
const ejsMate= require('ejs-mate');
const wrapAsync = require("./utils/wrapAsync.js");
const ExpressError = require("./utils/ExpressError.js");
const Review = require('./models/review.js');

app.set("views",path.join(__dirname,"views"));
app.set("view engine","ejs");
app.use(express.static(path.join(__dirname,"/public")));
app.use(express.urlencoded({extended:true}))
app.use(methodOverride("_method"));
app.engine("ejs",ejsMate);


let mongo_url="mongodb://127.0.0.1:27017/wonderlust";
main()
.then(()=>{
    console.log("connection succesfull");
})
.catch((err)=>console.log(err));

async function main(){
    await mongoose.connect(mongo_url);
}


//index route
app.get("/listings",wrapAsync( async (req,res,next)=>{
    let listings = await Listing.find({});
    res.render("listings/index.ejs",{listings});
}))


//new route
app.get("/listings/new",(req,res)=>{
    res.render("listings/new.ejs");
});

//creat route 
app.post("/listings",wrapAsync(async(req,res,next)=>{
    if(!req.body.listing){
        throw new ExpressError(400,"Send vailid data for listing");
    }
    let newListing= new Listing(req.body.listing);
    await newListing.save();
    res.redirect("/listings");
}))

//show route 
app.get("/listings/:id",wrapAsync(async (req,res)=>{
    let {id}=req.params;
    let listing =  await Listing.findById(id).populate("reviews");
    res.render("listings/show.ejs",{listing});
}));


//Update Route
app.patch("/listings/:id",wrapAsync(async(req,res)=>{
    let {id} = req.params;
    let updatedListing= await Listing.findByIdAndUpdate(id, {...req.body.listing}); 
    console.log(updatedListing);
    res.redirect(`/listings/${id}`);
}));

//Delete Route
app.delete("/listings/:id",wrapAsync(async(req,res)=>{
    let {id}=req.params;
    let deletedListing= await Listing.findByIdAndDelete(id);
    console.log(deletedListing);
    res.redirect("/listings");
}));


//Edit route
app.get("/listings/:id/edit",wrapAsync(async (req,res)=>{
    let {id} = req.params;
   let listing = await Listing.findById(id);
   res.render("listings/edit.ejs",{listing});
}))

app.post("/listings/:id/reviews",wrapAsync( async(req,res)=>{
    let listing = await Listing.findById(req.params.id);
    let  review = new Review(req.body.review);
    listing.reviews.push(review);
    
    await review.save();
    await listing.save();
    console.log(req.body);
    res.redirect(`/listings/${listing._id}`)
}))

// Delete Review Route
app.delete("/listings/:id/reviews/:reviewId", wrapAsync(async (req,res,next)=>{
    let {id,reviewId} = req.params;
    await Listing.findByIdAndUpdate(id, {$pull: {reviews:reviewId}});
    await Review.findByIdAndDelete(reviewId);
    res.redirect(`listings/${id}`);
}))

app.get("/",(req,res)=>{
    res.send("root working");
})

//very random route which we have not defined
app.all("*",(req,res,next)=>{
   next(new ExpressError(404,"Page not found!"));
})

app.use((err,req,res,next)=>{
 let {statusCode=500, message="Somthing ain't right"} = err;
     console.log(err);
     res.render("listings/error.ejs",{err});
//   res.status(statusCode).send(message);
})



app.listen(8080,()=>{
    console.log("listning at 8080");
});

// app.get("/testlisting",async(req,res)=>{
//     let samplelisting= new Listing({
//         title:"My New Villa",
//         discription:"at the beach",
//         price : 1200,
//         location:"Calagute Goa",
//         country:"India",
//     });

//     await samplelisting.save();
//     console.log("semple saved to DB");
//       //.then((result)=>{
//     //     console.log(result);
//     // }).catch((err)=>{
//     //     console.log(err);
//     // });
//     res.send("test succesfull");
// })