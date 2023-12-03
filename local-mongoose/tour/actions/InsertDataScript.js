import fs from 'fs';
import mongoose from "mongoose";
import Tour from "../model/ToursModel.js";
import {connectMongoClient, closeMongoConnection} from "./MongoConnections.js"


export const insertAllTours = async () => {
    const tours = JSON.parse(fs.readFileSync(`${process.cwd()}/../data/tours-simple.json`, 'utf-8'));
    await connectMongoClient();
    await Tour.create(tours);
    await closeMongoConnection();
}

