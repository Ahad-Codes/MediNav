const express = require("express");
const app = express();
const mongoose = require("mongoose");
const router = express.Router();
const UserModel = require("../models/Users");

router.get("/userlist", (req, res) => {
  UserModel.find().then(function (lists) {
    res.json(lists);
  });
});

router.post("/signup", async (req, res) => {
  const user = req.body;
  const newUser = new UserModel(user);
  await newUser.save();

  res.json(user);
});

router.get("/login", async (req, res) => {
  const { number, password } = req.body;
  // console.log(number);
  const fetchUser = await UserModel.findOne({ number: number });
  if (fetchUser == null) {
    res.json("No such user exists");
    return;
  }
  if (fetchUser.password == password) {
    res.json("Success");
    return;
  } else {
    res.json("Incorrect Password");
  }
});

module.exports = router;
