const express = require('express');
const env = require('dotenv')
env.config();

const app = express();
app.use(express.json());
const connectDB = require('./config/database')
const authRouter  = require("./routes/auth")
app.use("/" , authRouter)

connectDB().then(()=>{
    console.log("Data base successfully established")
    app.listen(process.env.PORT , console.log("Server is listening "))
}).catch((err)=>{
    console.log(err)
})
