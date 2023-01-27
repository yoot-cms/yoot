import mongoose from "mongoose";

const user_schema = new mongoose.Schema({
    email: {
        type: String,
        unique: true
    },
    password: String,
    username: String,
    api_key: {
        type: String,
        default: ""
    }
})

const User = mongoose.model("User", user_schema)
export default User