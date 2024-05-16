const asyncHandler = require("express-async-handler");
const User = require("../model/userModel");
const generateToken = require("../config/generateToken");
const Project = require("../model/projectModel");

const signup = asyncHandler(async (req, res) => {
  const { name, email, password, confirmPassword } = req.body;

  if (!name || !email || !password || !confirmPassword) {
    res.status(400);
    throw new Error("Please fill all the fields");
  }

  if (password !== confirmPassword) {
    res.status(400);
    throw new Error("Passwords do not match");
  }

  const userExists = await User.findOne({ email });

  if (userExists) {
    res.status(400);
    throw new Error("User already exists");
  }

  const user = await User.create({
    name,
    email,
    password,
    confirmPassword,
  });

  if (user) {
    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      confirmPassword: user.confirmPassword,
      token: generateToken(user._id),
    });
  } else {
    res.status(400);
    throw new Error("User registration failed");
  }
});

const login = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });

  if (user && (await user.matchPassword(password))) {
    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      token: generateToken(user._id),
    });
  } else {
    res.status(401);
    throw new Error("Invalid email or password");
  }
});
// Controller to get all projects of a user
const getAllUserProjects = asyncHandler(async (req, res) => {
  const userId = req.params.id; // Assuming user ID is stored in req.params.id
  const projects = await Project.find({ contributors: userId });
  res.json(projects);
});

// Controller to get all collaboration requests of all projects of a user
const getAllUserProjectsRequests = asyncHandler(async (req, res) => {
  const userId = req.params.id; // Assuming user ID is stored in req.params.id
  const projects = await Project.find({ contributors: userId });

  // Collect all requests from all projects
  const allRequests = projects.reduce((requests, project) => {
    return requests.concat(project.requests);
  }, []);

  res.json(allRequests);
});

module.exports = {
  signup,
  login,
  getAllUserProjects,
  getAllUserProjectsRequests,
};
