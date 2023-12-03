import deleteAll from "./DeleteAllTours.js";
import { insertAllTours } from "./InsertDataScript.js";

if(process.argv[2] === '--delete'){
    deleteAll();
} else if(process.argv[2] === '--import'){
    insertAllTours();
}