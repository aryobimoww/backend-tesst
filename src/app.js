const cors = require("cors");
const express = require("express");
const articleRoute = require("./routes/article/articles.route");
const commentRoute = require("./routes/comment/comment.route");
const bodyParser = require("body-parser");
const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(articleRoute);
app.use(commentRoute);

module.exports = app;
