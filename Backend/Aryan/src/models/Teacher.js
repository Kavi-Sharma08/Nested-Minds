// encryption

const validator = require('validator')
const jwt = require("jsonwebtoken")
const bcrypt = require("bcrypt")

// schema definition

const mongoose = require("mongoose");

const TeacherSchema = new mongoose.Schema({
  fname: { type: String, required: true },
  lname: { type: String, required: true },
  teach_id: { type: String, unique: true, required: true },
  email: { type: String, unique: true, required: true },
  pass: { type: String, required: true }, // Store hashed passwords
});

userSchema.methods.getJwt = async function () {
    const token = jwt.sign({id : this._id} , "NESTEDTEACHER" , {expiresIn : "1d"});
    return token;

}
userSchema.methods.validatePassword = async function (passwordInputByUser) {
    const passwordHash = this.password;
    const isPassWordValid = await bcrypt.compare(
        passwordInputByUser,
        passwordHash
    )
    return isPassWordValid;
    
}

module.exports = mongoose.model("Teacher", TeacherSchema);