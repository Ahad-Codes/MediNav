const mongoose = require("mongoose");

const AdminSchema = new mongoose.Schema({
  number: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
});

const AdminModel = mongoose.model("NavAdmin", AdminSchema);
module.exports = AdminModel;
