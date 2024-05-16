const jwt = require('jsonwebtoken');
const User = require('../model/userModel.js');
const asyncHandler = require('express-async-handler');

const protect = asyncHandler(async (req, res, next) => {
    let token;
    
    if (req.headers.authorization && req.headers.authorization.startsWith("Bearer")) {
        try {
            // console.log('hh')
            //  console.log('JWT_SECRET:', process.env.JWT_SECRET);
            //  console.log(req.headers.authorization);
            token = req.headers.authorization.split(" ")[1];
            // console.log(token);

            // Decode token to get user ID
            const decoded = jwt.verify(token, process.env.JWT_SECRET);
            // console.log(decoded);
            // Find user by ID and attach user data to request object
            req.user = await User.findById(decoded.id).select("-password");

            next(); // Move to the next middleware or route handler
        } catch (error) {
            res.status(401);
            throw new Error("Not authorized, token failed");
        }
    } 
   
    else {
        // No token found in the request headers
        res.status(401);
        throw new Error('Not authorized, no token');
    }
});


module.exports = { protect };
