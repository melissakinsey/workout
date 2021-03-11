// Require Express
const express = require("express");
const app = express();
// Set up server
app.listen(3000, function() {
  console.log("I'm a server listening on localhost 3000")
})
// Use sendFile method to return exercise.html file
app.get("/", (req, res) =>
{
  res.sendFile("/Users/MelissaKinsey/developer/workout/public" + "/exercise.html")
})

app.post("/Users/MelissaKinsey/developer/workout/public" + "/exercise.html", (req, res) => {
  console.log("It works!")
})