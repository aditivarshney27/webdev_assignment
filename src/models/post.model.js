import mongoose from "mongoose";

const postSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, "Name is required"],
            trim: true
        },
        description: {
            type: String,
            required: [true, "Description is required"],
            trim: true
        },
        age: {
            type: Number,
            required: [true, "Age is required"]
        }
    },
    {
        timestamps: true
    }
);

export const Post = mongoose.model("Post", postSchema);
