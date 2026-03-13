const express = require('express');
const router = express.Router();
const bycrypt = require("bcryptjs")

router.post("/login", (req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    const subit = req.body.submit;
    const errors = [];
    function validate(){
        if(!username || !password){
            errors.push("All fields are required")
        }
        if(password.length < 6){
            errors.push("Password must be at least 6 characters")
        }else{
            const hashedPassword = bycrypt.hashSync(password, 10);
            console.log("Hashed Password:", hashedPassword);
            return res.render("index", {errors});
        } 
    }
    validate();
    
    
});


module.exports = router;