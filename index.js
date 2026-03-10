const express = require("express");
require("dotenv").config();

// starting Here
///////////////////////////

// app server
const app = express(),
    port = process.env.PORT;


// Declare other variables Here



// middlewares here


// Routes and other modules


// Calling of the server

app.listen(port, () =>{
    console.log(`Server Running on http://localhost:${port}`)
});

