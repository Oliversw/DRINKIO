/* eslint-disable-no-console */
const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");

const apiCall = require("./apiCall");

const app = express();

//serve all files in public folder
app.use(express.static(path.join(__dirname, "..", "public")));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.post("/query", (req, res) => {
  console.log("In the query route. Body: ", req.body.query);
  const apiCallResult = apiCall(req.body.query);
  console.log("Trying to return: ", apiCall(req.body.query));
  res.send(JSON.stringify({ res: apiCallResult }));
});

module.exports = app;
