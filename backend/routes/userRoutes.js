const express = require("express");
const {
  signup,
  login,
  getAllUserProjects,
  getAllUserProjectsRequests,
  allUsers
} = require("../controllers/userControllers");


const router = express.Router();
// Login route
router.post("/login", login);
// router.post("/signup", signup);
router.route('/signup').post(signup)
router.route('/users').get(allUsers);
router.get("/:id/projects", getAllUserProjects);
router.get("/:id/requests", getAllUserProjectsRequests);

module.exports = router;

