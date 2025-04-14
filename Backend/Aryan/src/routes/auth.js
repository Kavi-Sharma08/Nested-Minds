const express = require('express');
const authRouter = express.Router();
const validateData = require("../utils/validations")
authRouter.post('/signup' , async (req, res )=>{
    try{
        validateData(req);
    }
    catch(error){
        res.json({
            "message" : error.message
        })
    }

})

module.exports = authRouter;
