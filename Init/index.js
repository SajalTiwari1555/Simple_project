// to logic of data Initialization

const mongoose = require("mongoose")
const initData = require("./data");
const Listing = require("../models/listing.js")

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
// connection is stablisted and  Now initiaze data
const initDB = async()=>{
    await Listing.deleteMany({});
    await Listing.insertMany(initData.data)  //Beacause in data.js file exports Object formate
    console.log("data was initialized");
};

initDB();

