/* eslint-disable-no-console */
const express = require("express");
const path = require("path");

const app = express();

//serve all files in public folder
app.use(express.static(path.join(__dirname, "..", "public")));

app.get("/query=*", (req, res) => {
  res.send("working");
});

module.exports = app;
