const express = require("express");
const app = express();
const mongoose = require("mongoose");
const router = express.Router();
// importing mongo models
const ReporterModel = require("../models/Reporter");
const HospitalModel = require("../models/Hospital");
const WardenModel = require("../models/Warden");
const AdminModel = require("../models/Admin");
const Report = require("../models/Reports");

const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");