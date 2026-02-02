require("dotenv").config();
const express = require("express");
const cors = require("cors")
const { connectDatabase } = require("./database/database");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true}));
app.use(cors({
      origin: "http://localhost:5173",
      credentials: true
}))

// Database connection
connectDatabase();

// *Admin Seeder
const adminSeeder = require("./adminSeeder");
adminSeeder();

// Routes
const authRoutes = require("./routes/auth/authRoutes")

// Using Routes
app.use("/auth", authRoutes)

const PORT = process.env.PORT
const server = app.listen(PORT, ()=>{
      console.log(`Server is running on port ${PORT}`);
})
