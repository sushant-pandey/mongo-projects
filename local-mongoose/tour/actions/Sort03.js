import Tour from "../model/ToursModel.js";
import {connectMongoClient, closeMongoConnection} from "./MongoConnections.js"


await connectMongoClient();

let query = Tour.find();
query = await query.sort(
    {
        price: 1,
        ratingsAverage: -1
    }
);

console.log(query);
await closeMongoConnection();