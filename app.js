const express = require("express");
const app =express();
const port = "8081";
const mongoose = require("mongoose");
const Listing = require("./models/listing.js")
const path = require("path");
const methodOverride = require("method-override");
const ejsMate = require("ejs-mate");  
main()
.then(()=> {
 console.log("Connected to DB");
})
.catch((err)=>{
    console.log(err);
});

async function main(){
    await mongoose.connect("mongodb://127.0.0.1:27017/wanderlust")
}

// app.get("/testListing",async(req,res) => {
//    let sampleListing = new Listing({
//     title:"My New Villa",
//     discription:"By the Beach",
//     price:1200,
//     location:"Calangute ,Goa",
//     Country:"India",
//    });
//   await sampleListing.save();       // sampleListing is saved to databases 

//    console.log("Sample was Saved");
//    res.send("Successful testing");
// });

app.get("/",(req,res)=>{
    res.send("This is my Project")

});

// app.get("/listing",(req,res) => {
//     Listing.find({}).then((res) => {
//         console.log(res);
//     })
// });

app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"));
app.use(express.urlencoded({extended:true}));
app.use(methodOverride("_method"));
app.engine("ejs",ejsMate);
app.use(express.static(path.join(__dirname,"/public")));
//Index route

app.get("/listings",async (req,res) => {
   const allListings = await Listing.find({});
   res.render("listings/index.ejs",{allListings}); 
});

//New Route

app.get("/listings/new",(req,res)=>{
    res.render("listings/new.ejs")
  });

//Create Route 
app.post("/listings", async (req,res)  => {
    // let {title,description,image,price,country,location} = req.body;
    // let listing = req.body.listing;
  const newListing =  new Listing(req.body.listing);   // to prints documents in collections
   await newListing.save();    //to save in databases
     console.log(newListing);
     res.redirect("/listings");   //page redirect 
});

//Edit Route
app.get("/listings/:id/edit", async (req,res)=>{
    let{id} = req.params;
    const listing = await Listing.findById(id);
    res.render("listings/edit.ejs",{listing});
})

//Update Route
app.put("/listings/:id", async (req,res)=>{
 let {id} = req.params;
await Listing.findByIdAndUpdate(id,{...req.body.listing});     //req.body.listing -- javascript Object that hold all parameters
 res.redirect("/listings");
 });

 ///Delete Route
 app.delete("/listings/:id", async (req,res) =>{
    let {id} = req.params;
    let deleteList = await Listing.findByIdAndDelete(id);
    console.log(deleteList);
    res.redirect("/listings");
 })

//show route using ObjectID
app.get("/listings/:id",async (req,res)=>{
    let {id}= req.params;
    const listing = await Listing.findById(id);
res.render("listings/show.ejs",{listing});
});


app.listen(port,()=>{
    console.log(`Server is Running On ${port}`);
});