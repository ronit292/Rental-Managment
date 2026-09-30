const express = require("express");
const bcrypt = require("bcryptjs");
const crypto = require("crypto");


const User = require("../models/User");
const sendVerificationEmail = require("../utils/sendEmail");
const sendPasswordResetEmail = require("../utils/sendPasswordResetEmail");

const router = express.Router();


// =========================
// SIGNUP
// =========================
router.post("/signup", async (req, res) => {
    try {
        const { name, email, password } = req.body;

        // Check if all fields are provided
        if (!name || !email || !password) {
            return res.status(400).json({
                message: "Please fill all fields"
            });
        }

        // Password requirements:
        // Minimum 8 characters
        // At least one letter
        // At least one number
        // At least one special character
        const passwordRegex =
            /^(?=.*[A-Za-z])(?=.*\d)(?=.*[^A-Za-z\d]).{8,}$/;

        if (!passwordRegex.test(password)) {
            return res.status(400).json({
                message:
                    "Password must be at least 8 characters and contain a letter, number, and special character."
            });
        }

        // Check if user already exists
        const existingUser = await User.findOne({ email });

        if (existingUser) {
            return res.status(400).json({
                message: "User already exists"
            });
        }

        // Hash password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Generate verification token
        const verificationToken = crypto.randomBytes(32).toString("hex");

        // Token expires in 15 minutes
        const verificationTokenExpires = new Date(
            Date.now() + 15 * 60 * 1000
        );

        // Create user
        const user = await User.create({
            name,
            email,
            password: hashedPassword,
            isVerified: false,
            verificationToken,
            verificationTokenExpires
        });

        // Send verification email
        await sendVerificationEmail(email, verificationToken);

        // Send response
        res.status(201).json({
            message:
                "Signup successful. Please check your email to verify your account."
        });

    } catch (error) {
        console.error("Signup error:", error);

        res.status(500).json({
            message: "Server error"
        });
    }
});


// =========================
// VERIFY EMAIL
// =========================
router.get("/verify-email", async (req, res) => {
    try {
        const { token } = req.query;

        if (!token) {
            return res.status(400).json({
                message: "Verification token is missing"
            });
        }

        const user = await User.findOne({
            verificationToken: token
        });

        if (!user) {
            return res.status(400).json({
                message: "Invalid verification link"
            });
        }

        if (user.verificationTokenExpires < new Date()) {
            return res.status(400).json({
                message: "Verification link has expired"
            });
        }

        user.isVerified = true;
        user.verificationToken = undefined;
        user.verificationTokenExpires = undefined;

        await user.save();

        res.json({
            message: "Email verified successfully"
        });

    } catch (error) {
        console.error("Email verification error:", error);

        res.status(500).json({
            message: "Server error"
        });
    }
});


// =========================
// LOGIN
// =========================
router.post("/login", async (req, res) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json({
                message: "Please fill all fields"
            });
        }

        const user = await User.findOne({ email });

        if (!user) {
            return res.status(400).json({
                message: "Invalid email or password"
            });
        }

        if (!user.isVerified) {
            return res.status(400).json({
                message: "Please verify your email first"
            });
        }

        const isPasswordCorrect = await bcrypt.compare(
            password,
            user.password
        );

        if (!isPasswordCorrect) {
            return res.status(400).json({
                message: "Invalid email or password"
            });
        }

        res.json({
            message: "Login successful",
            user: {
                id: user._id,
                name: user.name,
                email: user.email
            }
        });

    } catch (error) {
        console.error("Login error:", error);

        res.status(500).json({
            message: "Server error"
        });
    }
});

// =========================
// FORGOT PASSWORD
// =========================
router.post("/forgot-password", async (req, res) => {
    try {
        const { email } = req.body;

        if (!email) {
            return res.status(400).json({
                message: "Please enter your email"
            });
        }

        const user = await User.findOne({ email });

        // Don't reveal whether the email exists
        if (!user) {
            return res.json({
                message:
                    "If an account with that email exists, a reset code has been sent."
            });
        }

        // Generate 6-digit code
        const resetCode = crypto
            .randomInt(100000, 1000000)
            .toString();

        // Code expires in 10 minutes
        const resetPasswordCodeExpires = new Date(
            Date.now() + 10 * 60 * 1000
        );

        // Save code
        user.resetPasswordCode = resetCode;
        user.resetPasswordCodeExpires = resetPasswordCodeExpires;

        await user.save();

        // Send email
        await sendPasswordResetEmail(email, resetCode);

        res.json({
            message:
                "If an account with that email exists, a reset code has been sent."
        });

    } catch (error) {
        console.error("Forgot password error:", error);

        res.status(500).json({
            message: "Server error"
        });
    }
});

// =========================
// VERIFY RESET CODE
// =========================
router.post("/verify-reset-code", async (req, res) => {
    try {
        const { email, code } = req.body;

        if (!email || !code) {
            return res.status(400).json({
                message: "Email and reset code are required"
            });
        }

        const user = await User.findOne({ email });

        if (!user) {
            return res.status(400).json({
                message: "Invalid reset code"
            });
        }

        // Check if code has expired
        if (
            !user.resetPasswordCodeExpires ||
            user.resetPasswordCodeExpires < new Date()
        ) {
            return res.status(400).json({
                message: "Reset code has expired"
            });
        }

        // Check code
        if (user.resetPasswordCode !== code) {
            return res.status(400).json({
                message: "Invalid reset code"
            });
        }

        res.json({
            message: "Reset code verified successfully"
        });

    } catch (error) {
        console.error("Verify reset code error:", error);

        res.status(500).json({
            message: "Server error"
        });
    }
});

// =========================
// RESET PASSWORD
// =========================
router.post("/reset-password", async (req, res) => {
    try {
        const { email, code, newPassword } = req.body;

        if (!email || !code || !newPassword) {
            return res.status(400).json({
                message: "Please fill all fields"
            });
        }

        // Password requirements
        const passwordRegex =
            /^(?=.*[A-Za-z])(?=.*\d)(?=.*[^A-Za-z\d]).{8,}$/;

        if (!passwordRegex.test(newPassword)) {
            return res.status(400).json({
                message:
                    "Password must be at least 8 characters and contain a letter, number, and special character."
            });
        }

        const user = await User.findOne({ email });

        if (!user) {
            return res.status(400).json({
                message: "Invalid reset request"
            });
        }

        // Check if reset code exists
        if (!user.resetPasswordCode) {
            return res.status(400).json({
                message: "Please request a new reset code"
            });
        }

        // Check expiration
        if (
            !user.resetPasswordCodeExpires ||
            user.resetPasswordCodeExpires < new Date()
        ) {
            return res.status(400).json({
                message: "Reset code has expired"
            });
        }

        // Check code
        if (user.resetPasswordCode !== code) {
            return res.status(400).json({
                message: "Invalid reset code"
            });
        }

        // Hash new password
        const hashedPassword = await bcrypt.hash(newPassword, 10);

        user.password = hashedPassword;

        // Invalidate reset code after use
        user.resetPasswordCode = undefined;
        user.resetPasswordCodeExpires = undefined;

        await user.save();

        res.json({
            message: "Password reset successfully"
        });

    } catch (error) {
        console.error("Reset password error:", error);

        res.status(500).json({
            message: "Server error"
        });
    }
});


module.exports = router;

