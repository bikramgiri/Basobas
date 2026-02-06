const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../../model/user/userModel");
const sendEmail = require("../../services/sendEmail");

// User Register
exports.userRegister = async (req, res) => {
  const { username, email, password, role } = req.body;

  if (!username || !email || !password || !role) {
    return res.status(400).json({
      message: "Username, email, and password are required.",
      field: "general",
    });
  }

  if (username.length < 3) {
    return res.status(400).json({
      message: "Username must be at least 3 characters long.",
      field: "username",
    });
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({
      message: "Please enter a valid email address.",
      field: "email",
    });
  }

  const existingUser = await User.findOne({ email: email });
  if (existingUser) {
    return res.status(400).json({
      message: "Email is already registered.",
      field: "email",
    });
  }

  if (password.length < 8) {
    return res.status(400).json({
      message: "Password must be at least 8 characters.",
      field: "password",
    });
  }

const validRoles = ['user', 'hosteler', 'admin'];
if (role && !validRoles.includes(role)) {
  return res.status(400).json({
    message: "Invalid role selected.",
    field: "role",
  });
}

  try{
    const userData = await User.create({
    username: username,
    email: email,
    password: bcrypt.hashSync(password, 8),
    role: role || 'user'
  });

  res.status(201).json({
    message: "Registered successful",
    data: userData,
  });
  } catch (error) {
    return res.status(500).json({
      message: "Something went wrong.",
    });
  }
};


// User Login
exports.userLogin = async (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({
        message: "Email and password are required.",
        field: "general",
      });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({
        message: "Please enter a valid email address.",
        field: "email",
      });
    }

    const existingUser = await User.findOne({ email: email });
    if (!existingUser) {
      return res.status(400).json({
        message: "User not found with this email.",
        field: "email",
      });
    }

    const passwordMatch = bcrypt.compareSync(password, existingUser.password);
    if (!passwordMatch) {
      return res.status(400).json({
        message: "Incorrect password.",
        field: "password",
      });
    }

    const token = jwt.sign({ userId: existingUser._id },process.env.JWT_SECRET,{
        expiresIn: "1d",
      },
    );

    res.cookie("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      maxAge: 1 * 24 * 60 * 60 * 1000, 
    });

    res.status(200).json({
      message: "Login successful",
      data: existingUser,
      token: token,
    });
  };

  
// User Logout
exports.userLogout = (req, res) => {
  res.clearCookie("token");
  res.status(200).json({
    message: "Logout successful",
  });
};

exports.forgotPassword = async (req, res) => {
  const { email } = req.body;
  if (!email) {
    return res.status(400).json({
      message: "Email is required.",
      field: "email",
    });
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({
      message: "Please enter a valid email address.",
      field: "email",
    });
  }

  const existingUser = await User.findOne({ email: email });
  if (!existingUser) {
    return res.status(400).json({
      message: "User not found with this email.",
      field: "email",
    });
  }

  const generateOTP = Math.floor(100000 + Math.random() * 900000).toString();

  existingUser.otp = generateOTP;
  existingUser.otpGeneratedTime = Date.now(); 
  await existingUser.save();

  await sendEmail({
    email: email,
    subject: "Password Reset OTP",
    otp: generateOTP,
  });

  res.status(200).json({
    message: "OTP has been sent to your email.",
    data: existingUser.email,
  });
};

exports.verifyOTP = async (req, res) => {
  const { email, otp } = req.body;
  if (!email || !otp) {
    return res.status(400).json({
      message: "Email and OTP are required.",
      field: "general",
    });
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({
      message: "Please enter a valid email address.",
      field: "email",
    });
  }

  const existingUser = await User.findOne({ email: email });
  if (!existingUser) {
    return res.status(400).json({
      message: "User not found with this email.",
      field: "email",
    });
  }

  if (otp.length !== 6) {
    return res.status(400).json({
      message: "OTP must be 6 digits.",
      field: "otp",
    });
  }

  if (existingUser.otp !== otp) {
    return res.status(400).json({
      message: "Incorrect OTP.",
      field: "otp",
    });
  }

  const currentTime = Date.now();
  const otpGeneratedTime = existingUser.otpGeneratedTime.getTime(); 
  const timeDifference = currentTime - otpGeneratedTime;
  const otpExpiryTime = 20 * 60 * 1000; 
  if (timeDifference > otpExpiryTime) {
    return res.status(400).json({
      message: "OTP has expired.",
      field: "otp",
    });
  }

  existingUser.otp = otp;
  existingUser.otpGeneratedTime = Date.now();
  await existingUser.save();

  res.status(200).json({
    message: "OTP verified successfully.",
  });
};

exports.resetPassword = async (req, res) => {
  const { email, otp, newPassword, confirmPassword } = req.body;
  if (!email || !otp || !newPassword || !confirmPassword) {
    return res.status(400).json({
      message: "Please provide email, otp, new password and confirm password.",
      field: "general",
    });
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({
      message: "Please enter a valid email address.",
      field: "email",
    });
  }

  const existingUser = await User.findOne({ email: email });
  if (!existingUser) {
    return res.status(400).json({
      message: "User not found with this email.",
      field: "email",
    });
  }

  if (otp.length !== 6) {
    return res.status(400).json({
      message: "OTP must be 6 digits.",
      field: "otp",
    });
  }

  if (existingUser.otp !== otp) {
    return res.status(400).json({
      message: "Incorrect OTP.",
      field: "otp",
    });
  }

  const currentTime = Date.now();
  const otpGeneratedTime = existingUser.otpGeneratedTime.getTime();
  const timeDifference = currentTime - otpGeneratedTime;
  const otpExpiryTime = 20 * 60 * 1000;
  if (timeDifference > otpExpiryTime) {
    return res.status(400).json({
      message: "OTP has expired.",
      field: "otp",
    });
  }

  existingUser.otp = otp;
  existingUser.otpGeneratedTime = Date.now();
  await existingUser.save();

  if (newPassword !== confirmPassword) {
    return res.status(400).json({
      message: "New password and confirm password do not match.",
      field: "confirmPassword",
    });
  }

  existingUser.password = bcrypt.hashSync(newPassword, 8);
  await existingUser.save();

  res.status(200).json({
    message: "Password has been reset successfully.",
  });
};
