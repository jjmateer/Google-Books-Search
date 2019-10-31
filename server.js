const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
require("dotenv").config();
const routes = require("./routes")
const PORT = process.env.PORT || 3001;
const app = express();
// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(routes);
// Serve up static assets (usually on heroku)
//Connect to mongoose
var dbUrl = `mongodb+srv://jjmateer:${process.env.MONGO_PW}@cluster0-q0kab.mongodb.net/googlebooks?retryWrites=true&w=majority`;
mongoose.connect(dbUrl, err => {
  console.log("Connected to mongoose");
  if (err) {
    console.log(err)
  }
});

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
  app.get("*", function (req, res) {
    res.sendFile(path.join(__dirname, "./client/build/index.html"));
  });
} else {
  app.use(express.static(path.join(__dirname, '/client/public')));
  app.get("*", function (req, res) {
    res.sendFile(path.join(__dirname, "./client/public/index.html"));
  });
}

app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
