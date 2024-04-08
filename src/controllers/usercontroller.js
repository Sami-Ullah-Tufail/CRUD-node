const mongoose = require('mongoose')
const userSchema = require('../models/usermodel.js')

const users = mongoose.model('user',userSchema)

// Post Controller for Create functionality
const PostController = (req, res) => {
    // Create a new user instance using data from the request body
    let newUser = new users(req.body);
    
    // Save the new user to the database
    newUser.save()
        .then((user) => {
            console.log("New user added:", user);
            // Respond with the newly created user
            res.json(user);
        })
        .catch((error) => {
            console.error("Error saving user:", error);
            // Handle errors and respond with an appropriate status code
            res.status(500).json({ error: "Error saving user" });
        });
};
// Get Controller for Read functionality
const GetController =(req,res)=>{
    const id = req.params.id; 
    users.find(id)
    .then((user) => {
        console.log("This is the asked user:", user);
        // Respond with the found user
        res.json(user);
    })
    .catch((error) => {
        console.error("Error finding user:", error);
        // Handle errors and respond with an appropriate status code
        res.status(500).json({ error: "Error finding user" });
    });
}
// Put Controller for Update functionality
const PutController =(req,res)=>{
    const id = req.params.id; 
    users.findByIdAndUpdate(id,{$set : req.body}, { new: true })
    .then((user) => {
        console.log("this user is updated:", user);
        // Respond with the updated user
        res.json(user);
    })
    .catch((error) => {
        console.error("Error updating user:", error);
        // Handle errors and respond with an appropriate status code
        res.status(500).json({ error: "Error updating user" });
    });
}
// Delete Controller for Delete functionality
const DeleteController =(req,res)=>{
    const id = req.params.id; 
    users.findByIdAndDelete(id)
    .then((user) => {
        console.log("this user is Deleted:", id);
        // Respond with the deleted user id
        res.json("User has been deleted"  + id);
    })
    .catch((error) => {
        console.error("Error deleting user:", error);
        // Handle errors and respond with an appropriate status code
        res.status(500).json({ error: "Error deleted user" });
    });
}

// Exporting for use in route file
module.exports= {GetController,PostController,PutController,DeleteController};