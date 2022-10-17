const {
  httpGetArticle,
  httpNewPostArticle,
  httpUdateArticle,
  httpDeleteArticle,
} = require("./articles.controller");
const express = require("express");
const articleRoute = express.Router();

articleRoute.get("/article", httpGetArticle);
articleRoute.post("/article", httpNewPostArticle);
articleRoute.put("/article/:id", httpUdateArticle);
articleRoute.delete("/article/:id", httpDeleteArticle);

module.exports = articleRoute;
