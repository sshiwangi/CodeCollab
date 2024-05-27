const express = require("express");
const { protect } = require("../middleware/authMiddleware");
const {
  getAllDiscussions,
  getSingleDiscussion,
  createDiscussion,
  likeDiscussions,
  commentOnDiscussions,
} = require("../controllers/discussionControllers");
const router = express.Router();

router.get("/", getAllDiscussions);
router.get("/:id", getSingleDiscussion);
router.route("/adddiscussion").post(protect, createDiscussion);
router.post("/:id/like", likeDiscussions);
router.post("/:id/comment", commentOnDiscussions);

// router.get("/search", searchProjectsByName);

module.exports = router;
