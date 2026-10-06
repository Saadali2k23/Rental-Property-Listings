const mongoose = require("mongoose");
const review = require("./review");
const Schema=mongoose.Schema;

const listingSchema=new Schema({
    title:{
        type:String,
        required:true,
    },
    description:{
        type:String,
    },
    image:{
        type:String,
        default:"https://media.istockphoto.com/id/1337232523/photo/high-angle-view-of-a-lake-and-forest.webp?b=1&s=612x612&w=0&k=20&c=ONfRBrp00hOvHvA1_gJxompbAZj9adJjShikxUK-UkI=",
        set : (v)=> v==="" ? "https://media.istockphoto.com/id/1337232523/photo/high-angle-view-of-a-lake-and-forest.webp?b=1&s=612x612&w=0&k=20&c=ONfRBrp00hOvHvA1_gJxompbAZj9adJjShikxUK-UkI=" : v,
    },
    price:{
        type:Number,
        required:true
    },
    location:{
        type:String,
    },
    country:{
        type:String,
    },
    reviews:[
      {
        type : Schema.Types.ObjectId,
        ref:"Review"
      }
    ]

});

const Listing=mongoose.model("Listing",listingSchema);

module.exports=Listing;