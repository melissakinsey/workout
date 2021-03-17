var path = require("path");

module.exports = function (app)
{
    // Handle HTML GET requests
    app.get("/", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/index.html"));
    });
    app.get("/exercise", function (req, res)
    {
        res.sendFile(path.join(__dirname, "../public/exercise.html"));
    });

    app.get("/stats", function (req, res)
    {
        res.sendFile(path.join(__dirname, "../public/stats.html"));
    });

}

	// If no matching route is found default to home
// 	app.get("*", function (req, res) {
// 		res.sendFile(path.join(__dirname, "../public/home.html"));
// 	});
// };
