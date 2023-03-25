const mongoose = require("mongoose");

const WardensSchema = new mongoose.Schema({
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
  address: {
    type: String,
    required: true,
  },
});

const WardenModel = mongoose.model("wardens", WardensSchema);
module.exports = WardenModel;
