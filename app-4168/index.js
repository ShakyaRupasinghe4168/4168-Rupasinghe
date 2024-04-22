const express = require("express");
const app = express();

const PORT = process.env.PORT || 3000; 

app.get("/", function (req, res) {
  res.send({ response: "Welcome to My Express App" });
});

app.get("/hello", function (req, res) {
  res.send({ response: "Hello 4168" });
});

app.get("/status", function (req, res) {
  res.send({ response: "Great!, It works!" });
});

app.listen(PORT, function () {
  console.log(`App listening on port ${PORT}!`);
});

module.exports = app;
