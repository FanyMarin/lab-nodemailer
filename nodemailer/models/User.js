const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = new Schema({
  username: {
    type: String,
    required: [true, "You need to add a username"],
  },
  password: {
    type: String,
    required: [true, "You must add a password"],
  },
  status: {
    type: String,
    enum: ["Pending Confirmation", "Active"],
    default: "Pending Confirmation",
  },
  confirmationCode: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: [true, "You need to add your email"],
  },
});

module.exports = mongoose.model("User", userSchema);
