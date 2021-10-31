require('dotenv').config();
const express = require("express");
const path = require('path');

const app = express();
const PORT = process.env.PORT || 8000;

// serve static files from ../build (important for React)
const public = path.join(__dirname, '..', 'public');
console.log(public);
app.use(express.static(public));

app.get("/api/status", (req, res) => {
  res.json({ version: "1.01" });
});

app.use(function(req, res) {
  res.status(404);
});


app.listen(PORT, () => {
  console.log(`Demo API started on port ${PORT}!`);
});