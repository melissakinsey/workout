// Connect routes to data sources

const db = require("../models");

// Handle API POST requests
module.exports = app => {
    app.post("/api/workouts", ({ body }, res) =>
    {
        db.Workout.create({})
            .then(createWorkout =>
            {
                console.log(createWorkout)
                res.json(createWorkout);
            })
            .catch(err =>
            {
                res.status(400).json(err);
            });
    });
    // Handle API PUT requests
    app.put("/api/workouts/:id" , (req, res) =>
    {
        db.Workout.findOneAndUpdate({ id: req.params.id }, {$push:{exercises:req.body}})
            .then(addExercise =>
            {
                res.json(addExercise);
            })
            .catch(err =>
            {
                res.status(400).json(err);
            });
    });
    // Handle API GET requests
    app.get("/api/workouts", (req, res) =>
    {
        db.Workout.find({})
            .sort({ day: -1 })
            .then(getLastWorkout =>
            {
                res.json(getLastWorkout);
            })
            .catch(err =>
            {
                res.status(400).json(err);
            });
    });
    app.get("/api/workouts/range", (req, res) =>
    {
        db.Workout.find({})
            .sort({ day: -1 })
            .limit(7)
            .then(getWorkoutsInRange =>
            {
                res.json(getWorkoutsInRange);
            })
            .catch(err =>
            {
                res.status(400).json(err);
            });
    });
}  
    