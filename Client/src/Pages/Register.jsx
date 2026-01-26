import React from "react";
import "./Register.css"
const Register = () => {
  return (
    <div className="register-container">
      <div className="register-card">
        <h2>Create Account</h2>
        <p className="subtitle">Sign up to get started</p>

        <form className="register-form">
          <input
            type="text"
            placeholder="Username"
            className="register-input"
          />

          <input
            type="email"
            placeholder="Email address"
            className="register-input"
          />

          <input
            type="password"
            placeholder="Password"
            className="register-input"
          />

          <button className="register-btn">Register</button>
        </form>

        <p className="login-text">
          Already have an account? <span>Login</span>
        </p>
      </div>
    </div>
  );
};

export default Register;
