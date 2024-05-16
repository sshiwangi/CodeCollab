const express = require("express");
const { protect } = require("../middleware/authMiddleware");
const {
  getAllDiscussions,
  getSingleDiscussion,
  createDiscussion,
} = require("../controllers/discussionControllers");
const router = express.Router();

router.get("/", getAllDiscussions);
router.get("/:id", getSingleDiscussion);
router.route("/adddiscussion").post(protect, createDiscussion);

// router.get("/search", searchProjectsByName);

module.exports = router;
