// Mongoose schema goes here
// * As a user, I want to be able to view create and track daily workouts. I want to be able to log multiple exercises in a workout on a given day. I should also be able to track the name, type, weight, sets, reps, and duration of exercise (also distance). If the exercise is a cardio exercise, I should be able to track my distance traveled.

// Schema should have name, type, weight, sets, reps, and duration of exercise (also distance)

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const WorkoutSchema = new Schema(
    {
        date: {
            type: Date,
            default: Date.now,
            required: true,
        },
        exercises: [
            {
                name: {
                    type: String,
                    trim: true,
                    required: "Name is required",
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
                }
            }
        ]
    });
    
    const Workout = mongoose.model("Workout", WorkoutSchema);
    
    module.exports = Workout;