const express = require("express");

const app = express();

const port = process.env.PORT || 4000;

const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/exampleDB", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on("error", console.error.bind(console, "Mongoose Connection Error"));

db.once("open", () => {
  console.log("Mongoose Connected!");
});

app.listen(port, () => {
  console.log(`Listening on port: ${port}`);
});
