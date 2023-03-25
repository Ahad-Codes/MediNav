const mongoose = require("mongoose");

const HospitalsSchema = new mongoose.Schema({
  address: {
    type: String,
    required: true,
  },
  landline: {
    type: String,
    required: true,
  },
  p_number: {
    type: String,
    required: true,
    unique: true,
  },
  s_number: {
    type: String,
    required: true,
  },
  doctors: {
    type: Number,
    required: true,
  },
  ambulances: {
    type: Number,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  approved: {
    type: Number,
    required: true,
  },
});

const HospitalModel = mongoose.model("hospitals", HospitalsSchema);
module.exports = HospitalModel;
