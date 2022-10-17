const {
  getComment,
  newPostComment,
  updateComment,
  existComment,
  deleteComment,
} = require("../../models/comment.model");
const { existAritcle } = require("../../models/articles.model");
const httpGetComment = async (req, res) => {
  return res.json(await getComment());
};

const httpPostComment = async (req, res) => {
  const articleId = +req.params.articleId;
  const comment = req.body;
  const existId = await existAritcle(articleId);
  if (!existId) {
    res.json({ massage: "not match article" });
  }
  await newPostComment(articleId, comment);
  res.json(comment);
};
const httpUpdateComment = async (req, res) => {
  const articleId = +req.params.articleId;
  const commentId = +req.params.commentId;
  const comment = req.body;
  const existArticleId = existAritcle(articleId);
  const existCommentId = existComment(commentId);

  if (!existArticleId || !existCommentId) {
    return res.json({ massage: "not match comment or article" });
  }
  await updateComment(articleId, commentId, comment);
  res.json(comment);
};

const httpDeleteComment = async (req, res) => {
  const articleId = +req.params.articleId;
  const commentId = +req.params.commentId;
  const existArticleId = await existAritcle(articleId);
  const existCommentId = await existComment(commentId);
  console.log(await existAritcle(1));
  console.log(articleId);
  // console.log(existCommentId);
  if (!existArticleId && !existCommentId) {
    return res.json({ massage: "not match comment or article" });
  }
  await deleteComment(articleId, commentId);
  return res.json({ massage: "delete success" });
};
module.exports = {
  httpGetComment,
  httpPostComment,
  httpUpdateComment,
  httpDeleteComment,
};
