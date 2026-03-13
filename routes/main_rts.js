const express = require('express');
const router = express.Router();
const mongoose = require("mongoose");
const usdata = require("../controllers/form")
require("dotenv").config();
const db = process.env.MONGO_URI;
// Database connection
mongoose.connect(db);
const connection = mongoose.connection;
connection.once("open", () => {
    console.log("MongoDB database connection established successfully");
}); 
connection.on("error", () => {
    console.log("Failed to connect to MongoDB database");
});

// All routes here

router.get("/", (req, res) =>{
    res.render('index')
});
router.get("/contact", (req, res) =>{
    res.render('contact')
});
router.get("/about", (req, res) =>{
    res.render('about')
});
router.get("/acc", (req, res) =>{
    res.render('acc')
});

router.get("/products", (req, res) =>{
    res.render('products')
});

router.use(usdata)

module.exports = router;
