const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const projectSchema = Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  githubLink: { type: String },
  contributors: [{ type: Schema.Types.ObjectId, ref: "User" }],
  requests: [
    {
      userId: { type: Schema.Types.ObjectId, ref: "User" },
      note: { type: String },
      status: {
        type: String,
        enum: ["pending", "accepted", "rejected"],
        default: "pending",
      },
    },
  ],
  visibility: { type: String, enum: ["public", "private"], default: "public" },
});

const Project = mongoose.model("Project", projectSchema);
module.exports = Project;
