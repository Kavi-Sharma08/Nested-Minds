const express = require("express");
const env = require("dotenv");

const connectDB = require("./config/database");
const authRouter = require("./routes/auth");

env.config();

const app = express();
app.use(express.json());
app.use("/", authRouter);
connectDB()
  .then(() => {
    console.log("✅ Database successfully established");
    app.listen(process.env.PORT, () => {
      console.log(`🧠 Server is listening on http://localhost:${process.env.PORT}`);
    });
  })
  .catch((err) => {
    console.log("❌ DB connection error:", err);
});
