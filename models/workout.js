// Mongoose schema goes here
// * As a user, I want to be able to view create and track daily workouts. I want to be able to log multiple exercises in a workout on a given day. I should also be able to track the name, type, weight, sets, reps, and duration of exercise (also distance). If the exercise is a cardio exercise, I should be able to track my distance traveled.

// Recipe should have name, type, weight, sets, reps, and duration of exercise (also distance)

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
    name: {
        type: String,
        trim: true,
        required: "Name is Required",
        trim: true
    },
    
    type: {
        type: String,
        required: "Type is required",
        trim: true
    },
    
    weight: {
        type: Number,
    },
    
    sets: {
        type: Number,
    },
    
    reps: {
        type: Number,
    },
    duration: {
        type: Number,
    },

    distance: {
        type: Number,
    }, 
    
    boolean: Boolean,
    
    array: Array,
    
    date: {
        type: Date,
        default: Date.now
    },
    
    // longstring: {
    //     type: String,
    //     validate: [({ length }) => length >= 6, "Longstring should be longer."]
    // }
});

const Example = mongoose.model("Example", ExampleSchema);

module.exports = Example;