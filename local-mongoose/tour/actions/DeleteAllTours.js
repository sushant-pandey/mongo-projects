import fs from 'fs';
import mongoose from "mongoose";
import Tour from "../model/ToursModel.js";

import {connectMongoClient, closeMongoConnection} from "./MongoConnections.js"

export const deleteAll = async () => {
    await connectMongoClient();
    await Tour.deleteMany();
    await closeMongoConnection();
}

export default deleteAll;