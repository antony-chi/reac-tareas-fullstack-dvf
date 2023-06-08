import { Schema, model } from "mongoose";

const userSchema = Schema({
    name: {
        type: String,
        require: [true, "Please insert name"]
    },
    email: {
        type: String,
        require: [true, "Please insert email"],
        unique: true
    },
    password: {
        type: String,
        require: [true, "Please inserte a password"]
    },

},{
    timestamps: true
})

export default model("User",userSchema )