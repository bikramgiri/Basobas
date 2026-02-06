const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema({
      username:{
            type: String,
            required: true,
            trim: true 
      },
      email:{
            type: String,
            required: true,
            unique: true,
            lowercase: true,
            trim: true
      },
      password:{
            type: String,
            required: true
      },
      role:{
            type: String,
            enum: ['user', 'hosteler', 'admin'],
            default: 'user'
      },
      otp:{
            type: String,
            allowNull: true
      },
      otpGeneratedTime:{
            type: Date,
            default: Date.now,
            allowNull: true
      },
},{timestamps: true})

const User = mongoose.model('User', userSchema)
module.exports = User