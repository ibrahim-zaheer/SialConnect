// backend/routes/auth.js
const express = require("express");
const router = express.Router();
const authController = require("../controllers/auth_controllers");
const profileController = require("../controllers/profile_controller")
const upload = require('../config/multerConfig');

// Register Route
router.post("/register", authController.registerUser);

// Login Route
router.post("/login", authController.loginUser);

// Google Sign-In Route
router.post("/google", authController.googleSignIn);


// for profile picture upload
router.put("/profile-picture", upload.single('image'),profileController.profilePicture);

module.exports = router;
