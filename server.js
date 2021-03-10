// Require Express
const express = require("express");
const app = express();
// Set up server
app.listen(3000, function() {
  console.log("I'm a server listening on localhost 3000")
})
// Use sendFile method to return index.html file
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html")
})
