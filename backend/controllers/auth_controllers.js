// backend/controllers/authController.js
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/user");

// Register User
exports.registerUser = async (req, res) => {
    try {
        const { name, email, password } = req.body;
        const existingUser = await User.findOne({ email });
        if (existingUser) return res.status(400).json({ message: "User already exists" });

        const hashedPassword = await bcrypt.hash(password, 10);
        const user = new User({ name, email, password: hashedPassword });
        await user.save();

        res.status(201).json({ message: "User registered successfully" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Login User
exports.loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email });
        if (!user) return res.status(400).json({ message: "User does not exist" });

        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) return res.status(400).json({ message: "Invalid password" });

        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: "1h" });
        res.json({ token, userId: user._id });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Google Sign In
exports.googleSignIn = async (req, res, next) => {
    const { name, email, googlePhotoUrl } = req.body;

    try {
        const user = await User.findOne({ email });

        if (user) {
            const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
            const { password, ...rest } = user._doc;

            return res.status(200).cookie("access_token", token, {
                httpOnly: true,
            }).json(rest);
        } else {
            const generatedPassword = Math.random().toString(36).slice(-8);
            const hashedPassword = bcrypt.hashSync(generatedPassword, 10);

            const newUser = new User({
                name: name,
                email: email,
                password: hashedPassword,
                profilePicture: googlePhotoUrl,
            });
            await newUser.save();

            const token = jwt.sign({
                id: newUser._id,
            }, process.env.JWT_SECRET);
            const { password, ...rest } = newUser._doc;
            res.status(200).cookie("access_token", token, { httpOnly: true }).json(rest);
        }
    } catch (error) {
        next(error); // Pass error to the error handling middleware
    }
};
