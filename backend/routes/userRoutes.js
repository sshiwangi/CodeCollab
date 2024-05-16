const express = require("express");
const {
  signup,
  login, allUsers,
  getAllUserProjects,
  getAllUserProjectsRequests,
} = require("../controllers/userControllers");
const { protect } = require("../middleware/authMiddleware");

const router = express.Router();
// Login route
router.post("/login", login);
//Signup route
// router.post("/signup", signup);
router.get("/:id/projects", getAllUserProjects);
router.get("/:id/requests", getAllUserProjectsRequests);


router.route('/signup').post(signup)
router.route('/users').get(allUsers);
module.exports = router;