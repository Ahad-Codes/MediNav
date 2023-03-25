const express = require("express");
const app = express();
const mongoose = require("mongoose");
const router = express.Router();
const ReporterModel = require("../models/Reporter");
const HospitalModel = require("../models/Hospital");
const WardenModel = require("../models/Warden");
const AdminModel = require("../models/Admin");

const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

// router.get("/userlist", (req, res) => {
//   UserModel.find().then(function (lists) {
//     res.json(lists);
//   });
// });

router.post("/signupRep", async (req, res) => {
  const { cnic, number, name, email, password } = req.body;
  const fetchUserRep = await ReporterModel.findOne({
    $or: [{ email: email }, { number: number }],
  });
  const fetchUserHosp = await HospitalModel.findOne({
    $or: [{ email: email }, { p_number: number }],
  });
  if (fetchUserRep || fetchUserHosp) {
    res.json({ message: "A user with this email or number already exists" });
    return;
  }

  const hashedPassword = await bcrypt.hash(password, 10);
  const newUser = new ReporterModel({
    cnic,
    number,
    name,
    email,
    password: hashedPassword,
  });
  await newUser.save();

  res.json({ message: "User Registered Succesfully" });
});

router.post("/signupHosp", async (req, res) => {
  const {
    name,
    address,
    email,
    password,
    landline,
    p_number,
    s_number,
    doctors,
    ambulances,
  } = req.body;
  const fetchUserHosp = await HospitalModel.findOne({
    $or: [{ email: email }, { p_number: p_number }],
  });
  const fetchUserRep = await ReporterModel.findOne({
    $or: [{ email: email }, { number: p_number }],
  });
  if (fetchUserHosp || fetchUserRep) {
    res.json({ message: "A user with this email or number already exists" });
    return;
  }

  const hashedPassword = await bcrypt.hash(password, 10);
  const newUser = new HospitalModel({
    name,
    address,
    email,
    password: hashedPassword,
    landline,
    p_number,
    s_number,
    doctors,
    ambulances,
  });
  await newUser.save();

  res.json({ message: "User Registered Succesfully" });
});

router.post("/signupWard", async (req, res) => {
  const { name, number, email, address, password } = req.body;
  const fetchUserHosp = await HospitalModel.findOne({
    $or: [{ email: email }, { p_number: number }],
  });
  const fetchUserRep = await ReporterModel.findOne({
    $or: [{ email: email }, { number: number }],
  });
  const fetchUserWard = await WardenModel.findOne({
    $or: [{ email: email }, { number: number }],
  });
  if (fetchUserHosp || fetchUserRep || fetchUserWard) {
    res.json({ message: "A user with this email or number already exists" });
    return;
  }

  const hashedPassword = await bcrypt.hash(password, 10);
  const newUser = new WardenModel({
    number,
    name,
    email,
    address,
    password: hashedPassword,
  });
  await newUser.save();

  res.json({ message: "User Registered Succesfully" });
});

router.post("/login", async (req, res) => {
  const { number, password } = req.body;
  const fetchUserRep = await ReporterModel.findOne({ number: number });
  const fetchUserHosp = await HospitalModel.findOne({ p_number: number });
  const fetchUserWard = await WardenModel.findOne({ number: number });
  const fetchUserAdmin = await AdminModel.findOne({ number: number });

  if (!fetchUserRep && !fetchUserHosp && !fetchUserWard && !fetchUserAdmin) {
    res.json({ message: "No such user exists" });
    return;
  }

  let fetchUser = fetchUserRep;
  if (fetchUserAdmin) {
    fetchUser = fetchUserAdmin;
  }
  if (fetchUserHosp) {
    fetchUser = fetchUserHosp;
  }
  if (fetchUserWard) {
    fetchUser = fetchUserWard;
  }

  const isValid = fetchUserAdmin
    ? password === fetchUser.password
    : await bcrypt.compare(password, fetchUser.password);
  if (!isValid) {
    return res.json({ message: "Incorrect Password" });
  }

  const token = jwt.sign({ id: fetchUser._id }, "secret");
  res.json({
    token,
    userID: fetchUser._id,
    type: fetchUserHosp
      ? "Hospital"
      : fetchUserWard
      ? "Warden"
      : fetchUserAdmin
      ? "Admin"
      : "Reporter",
  });
});

module.exports = router;
