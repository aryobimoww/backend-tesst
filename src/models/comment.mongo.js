const mongoose = require("mongoose");

const CommentSchema = new mongoose.Schema({
  comment_id: {
    type: Number,
    required: true,
  },
  comment: {
    type: String,
  },
  article_id: {
    Type: Number,
  },
});

module.exports = mongoose.model("Comment", CommentSchema);
