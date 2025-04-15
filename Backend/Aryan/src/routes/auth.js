const express = require('express');
const authRouter = express.Router();
const bcrypt = require("bcrypt")
const validateData = require("../utils/validations")
const Student = require("../models/Student")
const Teacher = require("../models/Teacher")
authRouter.post('/student/signup' , async (req, res )=>{
    try{
        validateData(req);
        const {fname  , lname , email , pass} = req.body;
        const passWordHash = await bcrypt.hash(pass ,10 );
        const student = new Student({
            fname,
            lname,
            email,
            pass : passWordHash,
        });
        console.log(student)
        await student.save()
        res.send("Student added successfully");
    }
    catch(error){
        console.log(error)
        res.json({
            "message" : error.message
        })
    }

})
authRouter.post('/teacher/signup' , async (req, res )=>{
    try{
        validateData(req);
        const {fname  , lname , email , pass} = req.body;
        const passWordHash = await bcrypt.hash(pass ,10 );
        const teacher = new Teacher({
            fname,
            lname,
            email,
            pass : passWordHash,
        });
        console.log(teacher)
        await teacher.save()
        res.send("Teacher added successfully");
    }
    catch(error){
        console.log(error)
        res.json({
            "message" : error.message
        })
    }
})
authRouter.post('/login' , async(req,res)=>{
    res.send("login Page")
})
module.exports = authRouter;
