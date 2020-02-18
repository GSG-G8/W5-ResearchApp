const express = require("express");
const path = require('path');

const app = express();

// app.use(express.static(__dirname + '../Public'));

app.use(express.static(path.join(__dirname, '..','Public')));

app.get("/", function(req, res) {
  res.send("");
});


module.exports = app;