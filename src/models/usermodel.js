// Importing required packages
const mongoose = require('mongoose');

// Initializing a new schema for the user entity
const Schema = mongoose.Schema;
// This schema defines the structure of user data to be stored in MongoDB
const user = new Schema({
    Name: {
        type: String,
        required: "Please provide the name of the organization"
    },
    Age: {
        type: Number,
        required: "Please provide the age of the user"
    },
    Gender: {
        type: String
    },
    created_date: {
        type: Date,
        default: Date.now
    }
});


module.exports = user