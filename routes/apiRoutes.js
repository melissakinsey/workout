// Connect routes to data sources
const createWorkout = require("../data/workouts");
var getWorkoutsInRange = require("../data/api/workouts/range"); 

// Handle API GET requests
module.exports = function (app)
{
    app.get("/api/data/workouts", function (req, res)
    {
        res.json(createWorkout);
    });
    
    app.get("/api/", function (req, res)
    {
        res.json(waitListData);
    });
    app.post("/api/tables", function (req, res)
    {
        if (tableData.length < 5)
        {
            tableData.push(req.body);
            res.json(true);
        }
        else
        {
            waitListData.push(req.body);
            res.json(false);
        }
    });
}