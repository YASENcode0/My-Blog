const express = require("express");
const mongoose = require("mongoose");
const user = require("./models/user");
const { v4: nextid } = require("uuid");

const app = express();
const port = 3001 || 5000;

app.use(express.json());

mongoose
  .connect("mongodb://127.0.0.1:27017/blogs")
  .then(() => {
    app.listen(port, () => {
      console.log("connection to mongodb on port ", port);
    });
  })
  .catch((err) => {
    console.log("err mongodb : ", err);
  });

app.post("/adduser", async (req, res) => {
  try {
    const newUser = user();
    const { name, email, password } = req.body;
    //find if user is already hear
    user.findOne({ email }).then(async (response) => {
      if (response) {
        //if is hear return err message
        res.json({ msg: "email or password err" });
      } else {
        //if no, added and return message
        newUser.id = nextid();
        newUser.name = name;
        newUser.email = email;
        newUser.password = password;

        await newUser.save();
        res.json({ msg: 1, data: response });
      }
    });
  } catch (err) {
    res.status(500).send("err add user " + err);
  }
});

app.post("/login", (req, res) => {
  try {
    const { email, password } = req.body;
    user.findOne({ email }).then((response) => {
      if (response) {
        if (response.password == password) {
          res.json({ msg: 1 });
        } else {
          res.json({ msg: "password is wrong" });
        }
      } else {
        res.json({ msg: "email or password err" });
      }
    });
  } catch (err) {
    res.status(500).send("err log in " + err);
  }
});
