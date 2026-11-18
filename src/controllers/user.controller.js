import { User } from "../models/user.model.js";

// Register User: POST /api/v1/users/register
export const registerUser = async (req, res) => {
    try {
        const { username, email, password } = req.body;

        // Validation - required fields
        if (!username || !email || !password) {
            return res.status(400).json({
                message: "All fields (username, email, password) are required"
            });
        }

        // Validate password input length
        if (password.length < 6 || password.length > 50) {
            return res.status(400).json({
                message: "Password must be between 6 and 50 characters"
            });
        }

        // Check if user already exists with email or username
        const existingUser = await User.findOne({
            $or: [{ email: email.toLowerCase() }, { username: username.toLowerCase() }]
        });

        if (existingUser) {
            return res.status(409).json({
                message: "User with this email or username already exists"
            });
        }

        // Create new user (password is automatically hashed via Mongoose pre-save hook)
        const user = await User.create({
            username,
            email,
            password
        });

        // Return response without sensitive data
        return res.status(201).json({
            message: "User registered successfully",
            user: {
                _id: user._id,
                username: user.username,
                email: user.email,
                createdAt: user.createdAt,
                updatedAt: user.updatedAt
            }
        });
    } catch (error) {
        return res.status(500).json({
            message: "Error registering user",
            error: error.message
        });
    }
};

// Login User: POST /api/v1/users/login
export const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json({
                message: "Email and password are required"
            });
        }

        // Check if user exists
        const user = await User.findOne({ email: email.toLowerCase() });
        if (!user) {
            return res.status(401).json({
                message: "Invalid email or password"
            });
        }

        // Compare password using instance method
        const isPasswordValid = await user.comparePassword(password);
        if (!isPasswordValid) {
            return res.status(401).json({
                message: "Invalid email or password"
            });
        }

        // Credential verification successful
        // Note: As demonstrated in the tutorial, this verifies credentials only and does not issue JWT or session cookies.
        return res.status(200).json({
            message: "User logged in successfully (credentials verified)",
            user: {
                _id: user._id,
                username: user.username,
                email: user.email
            }
        });
    } catch (error) {
        return res.status(500).json({
            message: "Error during login",
            error: error.message
        });
    }
};

// Logout User: POST /api/v1/users/logout
export const logoutUser = async (req, res) => {
    try {
        const { email } = req.body;

        // Note: As per the tutorial, this is a demonstration endpoint.
        // Without active sessions or tokens, real authentication termination requires session/token invalidation.
        return res.status(200).json({
            message: `User ${email || "account"} logged out successfully (demonstration endpoint)`
        });
    } catch (error) {
        return res.status(500).json({
            message: "Error during logout",
            error: error.message
        });
    }
};
