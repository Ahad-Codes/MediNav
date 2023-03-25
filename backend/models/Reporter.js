const mongoose = require("mongoose");

const ReportersSchema = new mongoose.Schema({
  cnic: {
    type: String,
    required: true,
  },
  number: {
    type: String,
    required: true,
    unique: true,
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
});

const ReporterModel = mongoose.model("reporters", ReportersSchema);
module.exports = ReporterModel;
