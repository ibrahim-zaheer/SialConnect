// backend/routes/auth.js
const express = require("express");
const router = express.Router();
const authController = require("../controllers/auth_controllers");

// Register Route
router.post("/register", authController.registerUser);

// Login Route
router.post("/login", authController.loginUser);

// Google Sign-In Route
router.post("/google", authController.googleSignIn);

module.exports = router;
