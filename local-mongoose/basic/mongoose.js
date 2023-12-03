import mongoose from "mongoose";

const {Schema} = mongoose;

// const connectionStr = "mongodb://mongoadmin:secret@localhost:27017/natours";
const connectionStr = "mongodb://mongoadmin:secret@localhost:27017?retryWrites=true&w=majority";

const tourSchema = new Schema(
    {
        name: {
            type: String,
            required: [true, 'A tour must have a name'],
            unique: true
        },
        rating: {
            type: Number,
            default: 4.5
        },
        price: {
            type: Number,
            required: [true, 'A tour must have a price']
        }
    }
);

const Tour = mongoose.model('Tour', tourSchema);

const tour1 = new Tour({
    name: "Tour 2",
    rating: 4.8,
    price: 4800
});

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
// console.log(mConn.connection);
console.log("Connected to Mongo DB");

await tour1.save();

// tour1.save().then(doc => {
//     console.log(doc)
// }).catch(err => {
//     console.log('ERROR SAVING DOCUMENT...');
//     console.log(err);
// });



mongoose.connection.close();