/* eslint-disable-no-console */
const express = require("express");
const path = require("path");

const app = express();

//serve all files in public folder
app.use(express.static(path.join(__dirname, "..", "public")));

module.exports = app;
