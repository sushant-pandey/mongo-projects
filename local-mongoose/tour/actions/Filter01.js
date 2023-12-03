import Tour from "../model/ToursModel.js";
import {connectMongoClient, closeMongoConnection} from "./MongoConnections.js"


export const filter01 = async () => {
    await connectMongoClient();
    const result = await Tour.find({
        "name": "The Park Camper",
        "duration": 10,
        "images"
    });
    console.log(result);
    await closeMongoConnection();
}

filter01();