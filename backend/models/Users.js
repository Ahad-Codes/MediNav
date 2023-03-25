const mongoose = require("mongoose");

const UsersSchema = new mongoose.Schema({
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

const UserModel = mongoose.model("users", UsersSchema);
module.exports = UserModel;
