const comments = require("./comment.mongo");
const articles = require("./articles.mongo");

const findComment = async (filter) => {
  return await comments.findOne(filter);
};

const postComments = async (comment) => {
  try {
    await comments.findOneAndUpdate(
      { comment_id: comment.commet_id },
      comment,
      {
        upsert: true,
      }
    );
  } catch (err) {
    console.error(err);
  }
};

const existComment = async (commentId) => {
  return await findComment({
    comment_id: commentId,
  });
};

const commentIdLatest = async (articleId) => {
  const latestComment = await comments
    .findOne({ article_id: articleId })
    .sort("-comment_id");
  if (!latestComment) {
    return 0;
  }
  return latestComment.comment_id;
};

const newPostComment = async (id, comment) => {
  const articleId = articles.findOne({
    article_id: id,
  });
  if (!articleId) {
    throw new Error("no matching post article");
  }

  const newComment = Object.assign(comment, {
    article_id: id,
    comment_id: (await commentIdLatest(id)) + 1,
  });
  postComments(newComment);
};

const getComment = async () => {
  return await comments.find({}, { _id: 0, __v: 0 });
};
const updateComment = async (articleId, commentId, comment) => {
  await comments.findOneAndUpdate(
    {
      article_id: articleId,
      comment_id: commentId,
    },
    comment
  );
};

const deleteComment = async (articleId, commentId) => {
  await comments.findOneAndDelete({
    article_id: articleId,
    comment_id: commentId,
  });
};
module.exports = {
  newPostComment,
  getComment,
  updateComment,
  existComment,
  deleteComment,
};
