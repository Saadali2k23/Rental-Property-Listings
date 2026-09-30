const express=require('express');
const app=express();
const mongoose= require('mongoose');
const path=require('path');
const Listing=require("./models/listing.js");
const methodOverride=require("method-override");
const { log } = require('console');
const ejsMate= require('ejs-mate');
const wrapAsync = require("./utils/wrapAsync.js");

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
app.get("/listings",(req,res)=>{
   Listing.find({}).then((result)=>{
    let listings=result;
    res.render("listings/index.ejs",{listings});
   }).catch((err)=>{
    console.log(err);
   });
})


//new route
app.get("/listings/new",(req,res)=>{
    res.render("listings/new.ejs");
});

//creat route 
app.post("/listings",async(req,res)=>{
    console.log(req.body.listing);
    let newListing= new Listing(req.body.listing);
    await newListing.save();
    res.redirect("/listings");
})

//show route 
app.get("/listings/:id",(req,res)=>{
    let {id}=req.params;
     Listing.findById(id).then((result)=>{
        let listing =  result;
        res.render("listings/show.ejs",{listing});
    }).catch((err)=>{
        console.log(err);
    })
});


//Update Route
app.patch("/listings/:id",async(req,res)=>{
    let {id} = req.params;
    let updatedListing= await Listing.findByIdAndUpdate(id, {...req.body.listing}); 
    console.log(updatedListing);
    res.redirect(`/listings/${id}`);
});

//Delete Route
app.delete("/listings/:id",async(req,res)=>{
    let {id}=req.params;
    let deletedListing= await Listing.findByIdAndDelete(id);
    console.log(deletedListing);
    res.redirect("/listings");
});


//Edit route
app.get("/listings/:id/edit",async (req,res)=>{
    let {id} = req.params;
   let listing = await Listing.findById(id);
   res.render("listings/edit.ejs",{listing});
})


app.get("/",(req,res)=>{
    res.send("root working");
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