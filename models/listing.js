const mongoose =require("mongoose")
const Schema = mongoose.Schema;

const listingSchema = new Schema({
title:{
type:String,
require:true
},
description:String,
image: {
    type:String,
    default:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTukIrsCRm7WCLMGHP9T49h9peYanI9uNaupMVWVgC257MV9B0FjB3c84dkT0BoCOn8rs&usqp=CAU",
    set:(v) => v===""?"default Link" : v,    // if image is not loaded,

},
price:Number,
loction:String,
country:String,
});

const Listing=  mongoose.model("Listing",listingSchema);
module.exports = Listing;