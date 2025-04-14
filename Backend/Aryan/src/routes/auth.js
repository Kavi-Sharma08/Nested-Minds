const express = require('express');
const authRouter = express.Router();
const bcrypt = require("bcrypt")
const validateData = require("../utils/validations")
authRouter.post('/signup' , async (req, res )=>{
    try{
        validateData(req);
        const {firstName  , lastName , email , password} = req.body;
        const passWordHash = await bcrypt.hash(password ,10 );
        const user = new User({
            firstName,
            lastName,
            email,
            password : passWordHash,
        });
        await user.save()
        res.send("User added successfully");

    }
    catch(error){
        res.json({
            "message" : error.message
        })
    }

})
authRouter.post('/login' , async(req,res)=>{
    
})

module.exports = authRouter;
