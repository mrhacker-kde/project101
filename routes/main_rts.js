const express = require('express');
const router = express.Router();

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
r
router.get("/products", (req, res) =>{
    res.render('products')
});


module.exports = router;
