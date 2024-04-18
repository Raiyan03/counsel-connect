import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        min: 3,
        max: 30,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    phone: {
        type: String,
    },
    address: {
        type: String,
    },
}, { timestamps: true });

const lawyerSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        min: 3,
        max: 30,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    phone: {
        type: String,
    },
    address: {
        type: String,
    },
    specialization: {
        type: String,
    },
    experience: {
        type: String,
    },
    certification: {
        type: Array,
    },
    education: {
        type: Array,
    },
    reviews: {
        type: Array,
    },
    rating: {
        type: Number,
    },
    languages: {
        type: Array,
    },
    average: {
        type: Number,
    },
    linkedin: {
        type: String,
    },
    }, { timestamps: true }
)

export const User = mongoose.models.User || mongoose.model("User", userSchema);
export const Lawyer = mongoose.models.Lawyer || mongoose.model("Lawyer", lawyerSchema);