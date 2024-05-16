const express = require("express");
const {
  signup,
  login,
  getAllUserProjects,
  getAllUserProjectsRequests,
} = require("../controllers/userControllers");

const router = express.Router();
// Login route
router.post("/login", login);
//Signup route
router.post("/signup", signup);
router.get("/:id/projects", getAllUserProjects);
router.get("/:id/requests", getAllUserProjectsRequests);

module.exports = router;
