const mongoose= require('mongoose');

const Chat=require("./models/chats.js");


main()
.then(()=>{
    console.log("connection succesfull");
})
.catch((err)=>console.log(err));

async function main(){
    await mongoose.connect("mongodb://127.0.0.1:27017/whatsapp")
}

let allchats= [{
    from:"neha",
    to:"priya",
    msg:"send me your notes",
    created_at: new Date(),
},
{
    from:"divya",
    to:"sneha",
    msg:"come at my home",
    created_at: new Date(),
},
{
    from:"tina",
    to:"deny",
    msg:"Whats up",
    created_at: new Date(),
},
{
    from:"herry",
    to:"millie",
    msg:"Hii how are you",
    created_at: new Date(),
},
{
    from:"nancy",
    to:"mike",
    msg:"XWBRE its a scecrate",
    created_at: new Date(),
},
];

Chat.insertMany(allchats)