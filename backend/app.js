const express = require("express"),
  app = express(),
  morgan = require("morgan"),
  cors = require("cors");

app
  .use(morgan("dev"))
  .use(express.urlencoded({ extended: true }))
  .use(express.json())
  .use(cors());

app.use("/api", require("./routes/users.routes"));

module.exports = app;
