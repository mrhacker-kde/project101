const express = require("express");
require("dotenv").config();

// starting Here
///////////////////////////

// app server
const app = express(),
    port = process.env.PORT;


// Declare other variables Here


// middlewares here
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.set("view engine", "ejs");
app.use(express.static("public"));
app.set("public", __dirname + ['/public',
    '/public/css',
    '/public/js',
    '/public/src',
]);


// Routes and other modules
const Wb = require("./routes/main_rts");
app.use(Wb);



// Calling of the server

app.listen(port, () =>{
    console.log(`Server Running on http://localhost:${port}`)
});

