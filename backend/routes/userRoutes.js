const express =require('express');
const { signup, login  } = require('../controllers/userControllers');

const router = express.Router();
// Login route
router.post("/login", login );
//Signup route
router.post("/signup", signup);

module.exports=router;