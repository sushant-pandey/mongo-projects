import Tour from "../model/ToursModel.js";
import {connectMongoClient, closeMongoConnection} from "./MongoConnections.js"


export const filter02 = async () => {
    await connectMongoClient();
    const result = await Tour.find({
       maxGroupSize : { $gt : 10},
       price: { $lte : 397 }
    });
    console.log(result);
    await closeMongoConnection();
}

filter02();