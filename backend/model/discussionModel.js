const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const discussionSchema = Schema({
  title: { type: String, required: true },
  question: { type: String, required: true },
  creatorId: { type: Schema.Types.ObjectId, ref: "User", required: true },
});

const Discussion = mongoose.model("Discussion", discussionSchema);
module.exports = Discussion;
