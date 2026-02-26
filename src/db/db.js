const mongoose = require("mongoose");

async function connectDB(){

    await mongoose.connect("mongodb+srv://minti:nYRJwnEvzS3FRFoC@complete-backend.lshtbgz.mongodb.net/halley")

    console.log("Connected to DB")
}

module.exports = connectDB