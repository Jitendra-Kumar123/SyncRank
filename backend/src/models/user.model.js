import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    userName: {
        type: String,
        required: [true, "userName is required"],
        unique: true,
        trim: true
    },
    email: {
        type: String,
        required: [true, "email is required"],
        unique: true
    },
    password: {
        type: String,
        required: [true, "password is required"]
    },
    leetcodeId: {
        type: String,
        required: [true, "leetcode id is required"],
        trim: true
    },
    codeForcesId: {
        type: String,
        required: [true, "codeforces id is required"],
        trim: true
    }
})


const userModel = mongoose.model("user", userSchema);

export default userModel;