import express from "express";
import userRouter from "./routes/user.route.js";
import postRouter from "./routes/post.route.js";

const app = express();

// Global middleware to parse JSON request bodies
app.use(express.json());

// Basic health check route
app.get("/health", (req, res) => {
    res.status(200).json({ status: "ok", message: "Server is healthy" });
});

// Route registration
app.use("/api/v1/users", userRouter);
app.use("/api/v1/posts", postRouter);

export default app;
