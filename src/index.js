import dotenv from "dotenv";
import connectDB from "./config/database.js";
import app from "./app.js";

// Load environment variables as early as possible
dotenv.config({
    path: "./.env"
});

const PORT = process.env.PORT || 8000;

// Start server only after DB connection succeeds
connectDB()
    .then(() => {
        app.on("error", (error) => {
            console.error("Express App Error: ", error);
            throw error;
        });

        app.listen(PORT, () => {
            console.log(`Server is running at port: ${PORT}`);
        });
    })
    .catch((err) => {
        console.error("MongoDB connection failed! ", err);
        process.exit(1);
    });
