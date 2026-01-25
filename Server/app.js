require("dotenv").config();
const express = require("express");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true}));

app.get("/", (req, res)=>{
      res.status(200).json({
            message: "Hello from Server!"
      })
})

const PORT = process.env.PORT
const server = app.listen(PORT, ()=>{
      console.log(`Server is running on port ${PORT}`);
})
