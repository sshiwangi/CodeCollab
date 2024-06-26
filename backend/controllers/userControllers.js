const asyncHandler = require("express-async-handler");
const User = require("../model/userModel");
const generateToken = require("../config/generateToken");
const Project = require("../model/projectModel");
const validator = require('validator');

const validatePassword=(password) =>{
  const lengthRequirement = /^.{12,16}$/;
  const uppercaseRequirement = /[A-Z]/;
  const lowercaseRequirement = /[a-z]/;
  const digitRequirement = /\d/;
  const specialCharRequirement = /[!@#$%^&*()\-_=+\[\]{}|;:'",.<>?/~]/;

const errors=[];
 if (!lengthRequirement.test(password)) {
    errors.push("Password must be 8-16 characters long.");
  }
  if (!uppercaseRequirement.test(password)) {
    errors.push("Password must include at least one uppercase letter.");
  }
  if (!lowercaseRequirement.test(password)) {
    errors.push("Password must include at least one lowercase letter.");
  }
  if (!digitRequirement.test(password)) {
    errors.push("Password must include at least one number.");
  }
  if (!specialCharRequirement.test(password)) {
    errors.push("Password must include at least one special character.");
  }

  return errors;
};

const signup = asyncHandler(async (req, res) => {
  const { name, email, password, confirmPassword } = req.body;

  if (!name || !email || !password || !confirmPassword) {
    res.status(400);
    throw new Error("Please fill all the fields");
  }
  
    if (!validator.isEmail(email)) {
    res.status(400);
    throw new Error("Invalid Email Address");
  }

  const passwordErrors= validatePassword(password);
  if(passwordErrors.length>0){
    res.status(400).json({errors:passwordErrors});
    return;
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

const allUsers = asyncHandler(async (req, res) => {
  try {
    const keyword = req.query.search
      ? {
          $or: [
            { name: { $regex: req.query.search, $options: "i" } },
            { email: { $regex: req.query.search, $options: "i" } },
          ],
        }
      : {};

    const users = await User.find(keyword).find({
      _id: { $ne: req.user?._id },
    });
    // console.log(users)
    res.send(users);
  } catch (err) {
    console.log(err);
  }
});

const fetchUserProfile = asyncHandler(async (req, res) => {
  const userId = req.params.id;

  const user = await User.findById(userId);

  if (!user) {
    res.status(404);
    throw new Error("User not found");
  }

  res.json(user);
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
  allUsers,
  fetchUserProfile,
};
