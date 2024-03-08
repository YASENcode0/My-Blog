const express = require("express");
const mongoose = require("mongoose");
const user = require("./models/user");

const app = express();
const port = 3001 || 5000;

mongoose
  .connect("")
  .then(() => {
    app.listen(port, () => {
      console.log("connection to mongodb on port ", port);
    });
  })
  .catch((err) => {
    console.log("err mongodb : ", err);
  });
