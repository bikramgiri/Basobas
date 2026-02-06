require("dotenv").config();
const express = require("express");
const cors = require("cors")
const adminSeeder = require("./adminSeeder");
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

// Admin Seeder
adminSeeder();

// Routes
const authRoutes = require("./routes/auth/authRoutes")
const hostelRoutes = require("./routes/hosteler/hostelRoutes")

// Using Routes
app.use("/auth", authRoutes)
app.use("/hosteler", hostelRoutes)

const PORT = process.env.PORT
app.listen(PORT, ()=>{
      console.log(`Server is running on port ${PORT}`);
})
