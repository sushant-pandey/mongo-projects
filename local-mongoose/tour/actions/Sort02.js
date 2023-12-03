import Tour from "../model/ToursModel.js";
import {connectMongoClient, closeMongoConnection} from "./MongoConnections.js"


await connectMongoClient();
let query = Tour.find(); //find() returns a query
//query can be chained later.

query = await query.sort({price: -1});

console.log(query);
await closeMongoConnection();