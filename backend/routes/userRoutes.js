const express =require('express');
const { signup, login, allUsers  } = require('../controllers/userControllers');
const { protect } = require("../middleware/authMiddleware");

const router = express.Router();
// Login route
router.post("/login", login );
//Signup route
// router.post("/signup", signup);
router.route('/signup').post(signup)
router.route('/users').get(allUsers);
module.exports=router;