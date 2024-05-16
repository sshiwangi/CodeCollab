const asyncHandler = require("express-async-handler");
const Project = require("../model/projectModel");

// const userId = localStorage.getItem("userId");

// Controller to get all projects
const getAllProjects = asyncHandler(async (req, res) => {
  const projects = await Project.find();
  res.json(projects);
});

// Controller to get a single project by ID
const getSingleProject = asyncHandler(async (req, res) => {
  const projectId = req.params.id;
  const project = await Project.findById(projectId);
  if (!project) {
    return res.status(404).json({ message: "Project not found" });
  }
  res.json(project);
});

// Controller to create a new project
const createProject = asyncHandler(async (req, res) => {
  const { name, description, projectUrl } = req.body;

  // Check if required fields are provided
  if (!name || !description || !projectUrl) {
    return res
      .status(400)
      .json({ message: "Name, description, and project URL are required" });
  }

  // Create the project
  const project = await Project.create({ name, description, projectUrl });

  res.status(201).json(project);
});

// Controller to request collaboration on a project
const requestCollaboration = asyncHandler(async (req, res) => {
  const projectId = req.params.id;
  const userId = req.body.userId;
  const { note } = req.body;

  // Find the project
  const project = await Project.findById(projectId);

  // Add the user's request to the project's requests array
  project.requests.push({ userId, note });
  await project.save();

  res.status(201).json({ message: "Collaboration request sent successfully" });
});

// Controller to get collaboration requests for a project
const getCollaborationRequests = asyncHandler(async (req, res) => {
  const projectId = req.params.id;

  // Find the project
  const project = await Project.findById(projectId);

  res.json(project.requests);
});

// Controller to handle request status (accept/reject collaboration request)
const requestStatus = asyncHandler(async (req, res) => {
  const projectId = req.params.id;
  const requestId = req.params.requestId;
  const { status } = req.body; // 'accepted' or 'rejected'

  // Find the project
  const project = await Project.findById(projectId);

  // Find the request
  const request = project.requests.find((req) => req._id.equals(requestId));

  // Update the request status
  request.status = status;

  if (status === "accepted") {
    // If request is accepted, add the user to the project's contributors list
    project.contributors.push(request.userId);
  }

  await project.save();

  res.json({ message: "Request status updated successfully" });
});

// Controller to approve collaboration request
const approveCollaborationRequest = asyncHandler(async (req, res) => {
  const projectId = req.params.id;
  const requestId = req.params.requestId;

  // Find the project
  const project = await Project.findById(projectId);

  // Find the request
  const request = project.requests.find((req) => req._id.equals(requestId));

  // Update the request status to 'approved'
  request.status = "accepted";

  await project.save();

  res.json({ message: "Collaboration request approved successfully" });
});

// Controller to reject collaboration request
const rejectCollaborationRequest = asyncHandler(async (req, res) => {
  const projectId = req.params.id;
  const requestId = req.params.requestId;

  // Find the project
  const project = await Project.findById(projectId);

  // Find the request
  const request = project.requests.find((req) => req._id.equals(requestId));

  // Update the request status to 'rejected'
  request.status = "rejected";

  await project.save();

  res.json({ message: "Collaboration request rejected successfully" });
});

// Exporting the controllers
module.exports = {
  getAllProjects,
  getSingleProject,
  createProject,
  requestCollaboration,
  getCollaborationRequests,
  requestStatus,
  approveCollaborationRequest,
  rejectCollaborationRequest,
};
