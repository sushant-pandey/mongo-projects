import mongoose from "mongoose";

import Tour from "./model/ToursModel.js";

const {Schema} = mongoose;

// const connectionStr = "mongodb://mongoadmin:secret@localhost:27017/natours";
const connectionStr = "mongodb://mongoadmin:secret@localhost:27017?retryWrites=true&w=majority";





mongoose.connect(
    connectionStr ,
    {
        dbName: 'natours',
    } ,
    { 
        collection: 'tours'
    }
).then(() => {
    console.log("Connected to Database");
}).catch((err) => {
    console.log("Not Connected to Database!");
    
});

console.log("Connected to Mongo DB");

const tour1 = new Tour({
    name: "Tour 3",
    rating: 4.5,
    price: 4500
});

await tour1.save();

mongoose.connection.close();