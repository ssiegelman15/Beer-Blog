const router = require("express").Router();
const { Comment } = require("../../models");
const withAuth = require("../../utils/auth");

// Find all comments
router.get("/", async (req, res) => {
  try {
    const commentData = await Comment.findAll();
    res.status(200).json(commentData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Create new comment on post
router.post("/", withAuth, async (req, res) => {
  try {
    const commentData = await Comment.create({
      userId: req.session.userId,
      postId: req.body.postId,
      comment: req.body.comment,
    });
    res.status(200).json(commentData);
  } catch (err) {
    res.status(500).json(err);
  }
});
