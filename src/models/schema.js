const mongoose = require("mongoose");
const { required } = require('nodemon/lib/config');

const signupSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    otp:{
        type: Number,
        required: false
    }
});

//collection
const User = new mongoose.model("User", signupSchema);
module.exports = User;