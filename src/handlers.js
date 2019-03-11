// const handlers = (module.exports = {});
// const fs = require("fs");
// const path = require("path");
// const queryString = require("query-string");
// const beers = require("./beers.json");
//
// const headers = {
//   html: { "content-type": "text/html" },
//   css: { "content-type": "text/css" },
//   js: { "content-type": "application/javascript" },
//   img: { "content-type": "image/jpg" },
//   ico: { "content-type": "image/x-icon" },
//   json: { "content-type": "application/json" }
// };
//
// handlers.home = function(req, res) {
//   const filePath = path.join(__dirname, "..", "public", "index.html");
//   fs.readFile(filePath, (err, file) => {
//     if (err) {
//       console.log(err);
//       res.writeHead(500, headers.html);
//       res.end("<h1>Sorry, html file is not working.</h1>");
//     } else {
//       res.writeHead(200, headers.html);
//       res.end(file);
//     }
//   });
// };
//
// handlers.reset = function(req, res) {
//   const filePath = path.join(__dirname, "..", "public", "reset.css");
//   fs.readFile(filePath, (err, file) => {
//     if (err) {
//       console.log(err);
//       res.writeHead(500, headers.css);
//       res.end("<h1>Sorry, reset css file is not working.</h1>");
//     } else {
//       res.writeHead(200, headers.css);
//       res.end(file);
//     }
//   });
// };
//
// handlers.css = function(req, res) {
//   const filePath = path.join(__dirname, "..", "public", "main.css");
//   fs.readFile(filePath, (err, file) => {
//     if (err) {
//       console.log(err);
//       res.writeHead(500, headers.css);
//       res.end("<h1>Sorry, main css file is not working.</h1>");
//     } else {
//       res.writeHead(200, headers.css);
//       res.end(file);
//     }
//   });
// };
//
// handlers.js = function(req, res) {
//   const filePath = path.join(__dirname, "..", "public", "main.js");
//   fs.readFile(filePath, (err, file) => {
//     if (err) {
//       console.log(err);
//       res.writeHead(500, headers.js);
//       res.end("<h1>Sorry, javascript is not working.</h1>");
//     } else {
//       res.writeHead(200, headers.js);
//       res.end(file);
//     }
//   });
// };
//
// handlers.dom = function(req, res) {
//   const filePath = path.join(__dirname, "..", "public", "dom.js");
//   fs.readFile(filePath, (err, file) => {
//     if (err) {
//       console.log(err);
//       res.writeHead(500, headers.js);
//       res.end("<h1>Sorry, javascript is not working.</h1>");
//     } else {
//       res.writeHead(200, headers.js);
//       res.end(file);
//     }
//   });
// };
//
// handlers.image = function(req, res) {
//   const filePath = path.join(
//     __dirname,
//     "..",
//     "public",
//     "image",
//     "background.jpg"
//   );
//   fs.readFile(filePath, (err, file) => {
//     if (err) {
//       console.log(err);
//       res.writeHead(500, headers.img);
//       res.end("<h1>Sorry, background image is not working.</h1>");
//     } else {
//       res.writeHead(200, headers.img);
//       res.end(file);
//     }
//   });
// };
//
// handlers.ico = function(req, res) {
//   const filePath = path.join(
//     __dirname,
//     "..",
//     "public",
//     "image",
//     "favicon-beer.ico"
//   );
//   fs.readFile(filePath, (err, file) => {
//     if (err) {
//       console.log(err);
//       res.writeHead(500, headers.ico);
//       res.end("<h1>Sorry</h1>");
//     } else {
//       res.writeHead(200, headers.ico);
//       res.end(file);
//     }
//   });
// };
//
// handlers.query = function(req, res) {
//   let filtered = [];
//   const searchString = queryString.parse(req.url)["/query"].toLowerCase();
//
//   //console.log(beers["beers"][0].name);
//   filtered = beers["beers"].filter(beer =>
//     beer.name.toLowerCase().includes(searchString)
//   );
//   // console.log(filtered);
//   const firstFive = filtered.slice(0, 5);
//
//   res.writeHead(200, headers.json);
//   res.end(JSON.stringify(firstFive));
// };
//
// handlers.notFound = function(req, res) {
//   res.writeHead(404, headers);
//   res.end("Resource not found");
// };
