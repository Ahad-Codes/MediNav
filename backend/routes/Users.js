const express = require("express");
const app = express();
const mongoose = require("mongoose");
const router = express.Router();
const UserModel = require("../models/Users");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

router.get("/userlist", (req, res) => {
  UserModel.find().then(function (lists) {
    res.json(lists);
  });
});

router.post("/signup", async (req, res) => {
  const { cnic, number, name, email, password } = req.body;
  const fetchUser = await UserModel.findOne({
    $or: [{ email: email }, { number: number }],
  });
  if (fetchUser) {
    res.json({ message: "A user with this email or password already exists" });
    return;
  }

  const hashedPassword = await bcrypt.hash(password, 10);
  const newUser = new UserModel({
    cnic,
    number,
    name,
    email,
    password: hashedPassword,
  });
  await newUser.save();

  res.json({ message: "User Registered Succesfully" });
});

router.post("/login", async (req, res) => {
  const { number, password } = req.body;
  const fetchUser = await UserModel.findOne({ number: number });
  if (!fetchUser) {
    res.json({ message: "No such user exists" });
    return;
  }

  const isValid = await bcrypt.compare(password, fetchUser.password);
  if (!isValid) {
    return res.json({ message: "Incorrect Password" });
  }

  const token = jwt.sign({ id: fetchUser._id }, "secret");
  res.json({ token, userID: fetchUser._id });
});

module.exports = router;
