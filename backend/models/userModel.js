import mongoose from "mongoose";

const userSchema = mongoose.Schema(
    {
        username: {
            type: String,
            required: true,
        },
        password: {
            type: String,
            required: true,
        },
        lists: {
            type: Array,
            required: false,
        }
    },
    {
        timestamps: true,
    }
)

export const User = mongoose.model('user', userSchema)