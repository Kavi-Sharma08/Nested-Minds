// encryption
const jwt = require("jsonwebtoken")
const bcrypt = require("bcrypt")
// schema definition
const mongoose = require("mongoose");
const StudentSchema = new mongoose.Schema({
  fname: { type: String, required: true },
  lname: { type: String, required: true },
  email: { type: String, unique: true, required: true },
  pass: { type: String, required: true }, // Store hashed passwords
});
StudentSchema.methods.getJwt = async function () {
    const token = jwt.sign({id : this._id} , "NESTEDSTUDENT" , {expiresIn : "1d"});
    return token;
}
StudentSchema.methods.validatePassword = async function (passwordInputByUser) {
    const passwordHash = this.password;
    const isPassWordValid = await bcrypt.compare(
        passwordInputByUser,
        passwordHash
    )
    return isPassWordValid;
}

module.exports = mongoose.model("Student", StudentSchema);