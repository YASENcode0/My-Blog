const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  id: String,
  name: String,
  email: { type: String, required: true, unique: true },
  password: String,
});

module.exports = mongoose.model("user", userSchema);
