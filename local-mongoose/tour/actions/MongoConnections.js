import mongoose from "mongoose";

const connectionStr = "mongodb://mongoadmin:secret@localhost:27017?retryWrites=true&w=majority";


export const connectMongoClient = async () => {
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
}

export const closeMongoConnection = async () => {
    mongoose.connection.close();
}

// export default {
//     connectMongoClient,
//     closeMongoConnection
// }