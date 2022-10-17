const { response } = require("../../app");
const {
  getArticle,
  existAritcle,
  newPostArticle,
  updateArticle,
  deleteArticle,
} = require("../../models/articles.model");
const { getPagination } = require("../../service/query");
const httpGetArticle = async (req, res) => {
  const { skip, limit } = getPagination(req.query);
  return res.json(await getArticle(skip, limit));
};

const httpNewPostArticle = async (req, res) => {
  const article = req.body;
  await newPostArticle(article);
  return res.json(article);
};

const httpUdateArticle = async (req, res) => {
  const articleId = +req.params.id;
  const article = req.body;
  const existId = await existAritcle(articleId);
  console.log(existId);
  if (!existId) {
    return res.json({ massage: "not match id article" });
  }
  await updateArticle(articleId, article);

  return res.json({ massage: "success" });
};

const httpDeleteArticle = async (req, res) => {
  const articleId = +req.params.id;
  const existArticleId = await existAritcle(articleId);
  if (!existArticleId) {
    return res.json({ massage: "article not delete" });
  }
  await deleteArticle(articleId);
  return res.json({ massage: "success" });
};

module.exports = {
  httpGetArticle,
  httpNewPostArticle,
  httpUdateArticle,
  httpDeleteArticle,
};
