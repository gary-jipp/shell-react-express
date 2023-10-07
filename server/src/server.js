require('dotenv').config();
const express = require("express");
const uniqid = require('uniqid');
const morgan = require('morgan');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 8080;

// serve static files from ../build (needed for React)
const cwd = process.cwd();
const public = path.join(cwd, '..', 'public');
console.log("public dir: ", public);
app.use(express.static(public));
// Note: Do Not make a route for "/" below or it will override our static public

// So we can read JSON body requests
app.use(express.json());
app.use(morgan('dev'));

let data = [
  {id: uniqid(), name: "Nathan Brown"},
  {id: uniqid(), name: "James Holden"},
  {id: uniqid(), name: "Roy Trenneman"},
  {id: uniqid(), name: "Maurice Moss"},
  {id: uniqid(), name: "Tom Cruise "},
];

app.get("/api/status", (req, res) => {
  res.json({version: "1.01"});
});

app.get("/api/data", (req, res) => {
  res.json(data);
});

app.post("/api/data", (req, res) => {
  const name = req.body.name;
  const item = {id: uniqid(), name};
  data.push(item);
  res.json(item);
});

app.delete("/api/data/:id", (req, res) => {
  const id = req.params.id;
  data = data.filter(item => item.id !== id);
  res.status(204).send();
});

app.use(function(req, res) {
  res.status(404);
});


app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}!`);
});