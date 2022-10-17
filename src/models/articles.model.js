const articles = require("./articles.mongo");

const findArticles = async (filter) => {
  return articles.findOne(filter);
};

const articleIdLatest = async () => {
  const latestArticle = await articles.findOne().sort("-article_id");
  if (!latestArticle) {
    return 0;
  }
  return latestArticle.article_id;
};

const postArticle = async (article) => {
  try {
    await articles.findOneAndUpdate({ article_id: article.id }, article, {
      upsert: true,
    });
  } catch (err) {
    console.log(err);
  }
};

const existAritcle = async (articleId) => {
  return await findArticles({
    article_id: articleId,
  });
};

const newPostArticle = async (article) => {
  console.log(await articleIdLatest());
  const newArticle = Object.assign(article, {
    article_id: (await articleIdLatest()) + 1,
  });

  postArticle(newArticle);
};

const getArticle = async (skip, limit) => {
  return await articles
    .find({}, { _id: 0, __v: 0 })
    .sort({ article_id: 1 })
    .skip(skip)
    .limit(limit);
};

const updateArticle = async (articleId, article) => {
  return await articles.findOneAndUpdate(
    {
      article_id: articleId,
    },
    article
  );
};

const deleteArticle = async (articleId) => {
  return await articles.findOneAndDelete({
    article_id: articleId,
  });
};

module.exports = {
  getArticle,
  newPostArticle,
  updateArticle,
  deleteArticle,
  existAritcle,
};
