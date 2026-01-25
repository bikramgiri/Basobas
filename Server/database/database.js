const mongoose = require('mongoose')

exports.connectDatabase = async()=>{
 await mongoose.connect(process.env.DATABASE_URL,{    
 }).then (()=>{
      console.log("Database is connected successfully")
 }).catch((error)=>{
      console.log("Database connection failed", error)
 })
}
