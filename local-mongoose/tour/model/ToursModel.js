import mongoose from "mongoose";

const {Schema} = mongoose;

const tourSchema = new Schema(
    {
        name: {
            type: String,
            required: [true, 'A tour must have a name'],
            unique: true
        },
        duration: {
            type: Number,
            required: [true, 'A tour must have a duration']
        },
        maxGroupSize: {
            type: Number,
            required: [true, 'A tour must have a Group Size']
        },
        difficulty: String,
        ratingsAverage: Number,
        ratingsQuantity: Number,
        price:{
            type: Number,
            required: [true, 'A tour must have a price']
        },
        summary:{
            type: String,
            required: [true, 'A tour must have a summary']
        },
        description:{
            type: String,
            required: [true, 'A tour must have a description']
        },
        imageCover: String,
        images: [String],
        startDates:[Date],
        createdOn: {
            type: Date,
            default: Date.now()
        }
    }
);

const Tour = mongoose.model('Tour', tourSchema);

export default Tour;
