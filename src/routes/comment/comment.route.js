const express = require("express");
const commentRoute = express.Router();
const {
  httpGetComment,
  httpPostComment,
  httpUpdateComment,
  httpDeleteComment,
} = require("./comment.controller");
commentRoute.get("/comment", httpGetComment);
commentRoute.post("/comment/:articleId", httpPostComment);
commentRoute.put("/comment/:articleId/:commentId", httpUpdateComment);
commentRoute.delete("/comment/:articleId/:commentId", httpDeleteComment);

module.exports = commentRoute;
