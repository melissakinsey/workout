// Require Express
const express = require("express");
const mongoose = require("mongoose");
// Create Express server
const app = express();
// Set up initial port 
PORT = process.env.PORT || 8080;
// Set up Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Require HTML and API routes
require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);
// Set up listener on port
app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});
