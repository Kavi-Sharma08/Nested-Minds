const validator = require('validator');
const validateData = (req)=>{
    const {fname , lname , email , pass} = req.body;
    if(!fname || !lname){
        throw new Error ("Enter the correct username and password")
    }
    else if(!validator.isEmail(email)){
        throw new Error ("Enter the valid email")

    }
    else if(!validator.isStrongPassword(pass)){
        throw new Error ("Enter Strong Password");
    }
}
module.exports = validateData;