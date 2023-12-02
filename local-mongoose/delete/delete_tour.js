import mongoose from "mongoose";

import Tour from "../model/ToursModel.js";

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
    
})

console.log("Connected to Mongo DB");

const updatedTour = await Tour.findByIdAndDelete(
    '656a6fccc0f1610df7ca6647'
);

console.log(updatedTour);

mongoose.connection.close();