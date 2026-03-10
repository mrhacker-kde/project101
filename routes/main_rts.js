const express = require('express'),
    router = express.Router();

// All routes here

router.get("/", (res,req) =>{
    res.render('index')
});
