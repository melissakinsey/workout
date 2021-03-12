// Connect routes to data sources

// Handle API GET requests
module.exports = function (app)
{
    app.get("/api/workouts", function (req, res)
    {
        res.json(getLastWorkout);
    });
    
    app.get("/api/workouts/range", function (req, res)
    {
        res.json(getWorkoutsInRange);
    });
    // Handle API PUT requests
    app.put("/api/workouts" + id, function (req, res)
    {
        res.json(addExercise);
    });
    // Handle API POST requests
    app.post("/api/workouts/range", function (req, res)
    {
        res.json(createWorkout);
   });
}