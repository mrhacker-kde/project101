const express = require('express');
const router = express.Router();

// All routes here

router.get("/", (req, res) =>{
    res.render('index')
});

module.exports = router;
