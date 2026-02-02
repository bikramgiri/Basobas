const bcrypt = require("bcrypt");
const User = require("./model/userModel");

const adminSeeder = async () => {
  const adminExists = await User.findOne({ 
        email: "admin@gmail.com", 
        role: "admin" 
  });
  if (!adminExists) {
    await User.create({
      username: "admin",
      email: "admin@gmail.com",
      password: await bcrypt.hash("adminpassword", 8),
      role: "admin",
    });
      console.log("Admin user created");
  } else {
    console.log("Admin user already exists");
  }
};

module.exports = adminSeeder;
