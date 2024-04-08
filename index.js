// Importing the packages
const mongoose = require('mongoose');
const express = require('express');
const userRoute = require('./src/routes/userRoute.js')

// Initializing an instance of Express
const app = express();

// Setting up the database with MongoDB Atlas and listening to a port
mongoose.connect('mongodb+srv://samiutufail:8Ta1kJsz4j6mSQGo@cluster0.slrktsc.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0&ssl=true')
  .then(() => {
    app.listen(3000, () => {
      console.log(`Listening to port 3000`);
    });
  })
  .catch((err) => {
    console.error(err);
  });

//   using these routes as middleware for next operations
app.use(express.json)
app.use('/user',userRoute)