const express = require("express");
const app = express();
const path = require("path");
const favicon = require("serve-favicon");

app.use(express.static(path.join(__dirname, "..", "public")));

app.get("/", (req, res) => {
  res.send(public / index.html);
});

module.exports = app;
