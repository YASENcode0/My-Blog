const mongoose = require("mongoose");
const postSchema = mongoose.Schema({
  id: String,
  user: String,
  title: String,
  date: {
    type: Date,
    default: Date.now,
  },
  content: String,
  comments: [{ user: String, comment: String }],
});

module.exports = mongoose.model("post", postSchema);
