const express = require("express");
const {
  getAllProjects,
  getSingleProject,
  createProject,
  requestCollaboration,
  getCollaborationRequests,
  requestStatus,
  approveCollaborationRequest,
  rejectCollaborationRequest,
  searchProjectsByName,
} = require("../controllers/projectControllers");

const router = express.Router();
// all project
router.get("/", getAllProjects);
router.get("/:id", getSingleProject);
router.post("/addproject", createProject);
router.post("/:id/request", requestCollaboration);
router.get("/:id/requests", getCollaborationRequests);
router.put("/:id/requests/:requestId", requestStatus);
router.put("/:id/requests/:requestId/approve", approveCollaborationRequest);
router.put("/:id/requests/:requestId/reject", rejectCollaborationRequest);
// router.get("/search", searchProjectsByName);

module.exports = router;
