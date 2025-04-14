const validator = require('validator');
const validateData = (req)=>{
    const {firstName , lastName , email , password} = req.body;
    if(!firstName || !lastName){
        throw new Error ("Enter the correct username and password")
    }
    else if(!validator.isEmail(email)){
        throw new Error ("Enter the valid email")

    }
    else if(!validator.isStrongPassword(password)){
        throw new Error ("Enter Strong Password");
    }
}
module.exports = validateData;