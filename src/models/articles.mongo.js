const mongoose = require("mongoose");
const comments = require("./comment.mongo");

const ArticlesSchema = new mongoose.Schema({
  article_id: { type: Number, required: true },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  comment: [],
});

module.exports = mongoose.model("Articles", ArticlesSchema);
