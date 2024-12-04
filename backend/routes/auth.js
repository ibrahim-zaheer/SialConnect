// backend/routes/auth.js
const express = require("express");
const router = express.Router();
const authController = require("../controllers/auth_controllers");
const profileController = require("../controllers/profile_controller")
const {uploadProfilePicture}= require('../config/multerConfig');

const authMiddleware = require("../middleware/authMiddleware");

// Register Route
router.post("/register", authController.registerUser);

// Login Route
router.post("/login", authController.loginUser);

// Google Sign-In Route
router.post("/google", authController.googleSignIn);

router.post("/select-role",authController.selectRole);


// for profile picture upload
router.put("/profile-picture", authMiddleware,uploadProfilePicture.single('image'),profileController.profilePicture);

module.exports = router;
