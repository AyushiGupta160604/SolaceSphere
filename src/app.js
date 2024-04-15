const express = require("express");
const path = require("path");
const app = express();
require("./db/conn");
const User = require("./models/schema");
const port = process.env.PORT || 4000;
const static_path = path.join(__dirname, "../public");
const nodemailer = require('nodemailer');
const crypto = require('crypto'); // For generating OTP
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(express.static(static_path))


// This is the password: 'nmqg ntzg dfse yqai'
// Creating a Nodemailer transporter
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'ayushigupta36881@gmail.com',
        pass: 'nmqg ntzg dfse yqai'
    }
});

app.listen(port, () => {
    console.log(`server is running at port ${port}`);
})

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/index.html"));
})

app.get("/User", (req,res) => {
    res.sendFile(path.join(__dirname, "../models/schema.js"));
})

app.post("/User", async (req, res) => {
    try {
        const { username, email, password } = req.body;
        // Check if the email already exists in the database
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.send('<script>alert("Email already registered. Please login to your account!"); window.location.href="./login.html";</script>');
        }

         // Generate OTP
         const otp = Math.floor(100000 + Math.random() * 900000); // 6-digit OTP
        // If the email doesn't exist, create a new user
        const user = new User({
            username,
            email,
            password,
            otp // Store OTP in user document
        })

        await user.save();


        // Send OTP to the user's email
        await transporter.sendMail({
            from: 'solacesphere1606@gmail.com',
            to: email,
            subject: 'OTP Verification',
            html: `<p>Your OTP for account verification is: <strong>${otp}</strong></p>`
        });

        return res.send('<script>alert("An OTP has been sent to your email. Please enter the OTP to verify your account."); window.location.href="./verify.html";</script>');

    } catch(error){
        res.status(400).send(error);
    }
})

app.post("/verify", async (req, res) => {
    try {
        const { email, otp } = req.body;

        // Find the user by email
        const user = await User.findOne({ email });

        // Check if the OTP matches
        if (user.otp == otp) {
            // If OTP is correct, send confirmation email
            await transporter.sendMail({
                from: 'solacesphere1606@gmail.com',
                to: email,
                subject: 'Account Confirmation',
                html: `<p>Dear ${user.username},</p><p>Thank you for signing up!</p><p>Your account has been successfully created.</p>`
            });

            // Redirect to dashboard
            res.send('<script>alert("Your account has been successfully verified!"); window.location.href="./dashboard.html";</script>');
        } else {
            // If OTP is incorrect, show error message
            res.send('<script>alert("Incorrect OTP! Please try again."); window.location.href="./verify.html";</script>');
        }
    } catch(error) {
        res.status(400).send(error);
    }
});

// Endpoint to handle OTP resend request
app.post("/resendOTP", async (req, res) => {
    try {
        const { email } = req.body;

        // Find the user by email
        const user = await User.findOne({ email });

        if (user) {
            // Generate new OTP
            const newOTP = Math.floor(100000 + Math.random() * 900000); // 6-digit OTP

            // Update user document with new OTP
            user.otp = newOTP;
            await user.save();

            // Send the new OTP to the user's email
            await transporter.sendMail({
                from: 'solacesphere1606@gmail.com',
                to: email,
                subject: 'New OTP',
                html: `<p>Your new OTP for account verification is: <strong>${newOTP}</strong></p>`
            });

            res.send('<script>alert("New OTP has been sent to your email.");</script>');
        } else {
            res.status(400).send("User not found");
        }
    } catch(error) {
        res.status(400).send(error);
    }
});

// Assuming login form submits data to /login endpoint with username and password fields
app.post("/login", async (req, res) => {
    try {
        const { username, password } = req.body;

        // Check if a user exists with the provided username and password
        const user = await User.findOne({ username, password });
        if (user) {
            // If the user exists, redirect to the dashboard
            res.sendFile(path.join(__dirname, "../public/dashboard.html"));
        } else {
            // If the user does not exist or the credentials are incorrect, show an alert
            res.send('<script>alert("Incorrect credentials! Try again."); window.location.href="./login.html";</script>');
        }
    } catch(error) {
        res.status(400).send(error);
    }
});