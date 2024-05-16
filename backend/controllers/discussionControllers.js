const asyncHandler = require("express-async-handler");
const Discussion = require("../model/discussionModel");

// Controller to get all discussions
const getAllDiscussions = asyncHandler(async (req, res) => {
  const discussions = await Discussion.find();
  res.json(discussions);
});

// Controller to get a single discussion by ID
const getSingleDiscussion = asyncHandler(async (req, res) => {
  const discussionId = req.params.id;
  const discussion = await Discussion.findById(discussionId);
  if (!discussion) {
    return res.status(404).json({ message: "Discussion not found" });
  }
  res.json(discussion);
});

const createDiscussion = asyncHandler(async (req, res) => {
  const { title, question } = req.body;
  const creatorId = req.user._id; // Extract creatorId from authenticated user

  // Check if required fields are provided
  if (!title || !question) {
    return res.status(400).json({ message: "Title and question are required" });
  }

  // Create the discussion
  const discussion = await Discussion.create({ title, question, creatorId });

  res.status(201).json(discussion);
});

module.exports = {
  createDiscussion,
  getAllDiscussions,
  getSingleDiscussion,
};
