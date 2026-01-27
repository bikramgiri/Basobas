import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  HiOutlineUser,
  HiOutlineEnvelope,
  HiOutlineLockClosed,
  HiOutlineEye,
  HiOutlineEyeSlash,
} from "react-icons/hi2";
import { registerUser } from "../../store/authSlice";
import { STATUSES } from "../../global/status";

const Register = () => {

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { status } = useSelector((state) => state.auth);

  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  // const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // setIsSubmitting(true);
    console.log("Registration attempt:", formData);
    dispatch(registerUser(formData));
  };

useEffect(() => {
    if (status === STATUSES.SUCCESS) {
      setMessage("User registered successfully");
      setTimeout(() => {
        setMessage("");
        navigate("/login");
      }, 2000);
    } else if (status === STATUSES.ERROR) {
console.log("Registration failed")
    }
  }, [status, navigate]);

  return (
    <div className="min-h-screen flex bg-[#0c1110] text-zinc-100 font-sans selection:bg-emerald-500/30">
      {/* Left Side: Visual Narrative */}
      <div className="hidden lg:flex lg:w-3/5 relative overflow-hidden bg-[#0c1110]">
        <img
          src="/hostel-bg.png"
          alt="Modern Student Living"
          className="absolute inset-0 w-full h-full object-cover opacity-40 scale-105 animate-subtle-zoom"
        />
        <div className="absolute inset-0 bg-linear-to-t from-[#0c1110] via-[#0c1110]/20 to-transparent" />
        <div className="relative z-10 w-full flex flex-col justify-end p-24 animate-fade-up">
          <div className="space-y-6 max-w-xl">
            <h2 className="text-7xl font-extrabold leading-[1.1] tracking-tighter text-white drop-shadow-2xl">
              Your home <br />
              <span className="text-emerald-400 italic font-serif">
                away from home.
              </span>
            </h2>
            <p className="text-zinc-300 text-2xl leading-relaxed font-medium drop-shadow-lg max-w-lg opacity-90">
              The unified platform for students seeking comfort and owners
              managing excellence.
            </p>
          </div>
        </div>
      </div>

      {/* Right Side: Registration Portal */}
      <div className="w-full lg:w-2/5 flex flex-col items-center justify-center p-8 lg:p-16 bg-[#0c1110] border-l border-zinc-900/50 relative">
        <div className="absolute top-1/4 right-0 w-64 h-64 bg-emerald-500/5 blur-[120px] rounded-full pointer-events-none" />
        <div className="w-full max-w-sm space-y-12 relative z-10">
          <div className="space-y-4">
            <div className="flex items-center gap-3 group cursor-default">
              <div className="w-12 h-12 rounded-2xl bg-emerald-600 flex items-center justify-center font-black text-white italic text-2xl shadow-lg shadow-emerald-900/40 group-hover:scale-110 transition-transform duration-500">
                B
              </div>
              <div className="flex flex-col">
                <span className="text-emerald-500 font-bold tracking-[0.4em] text-[10px] uppercase leading-none mb-1">
                  Basobas
                </span>
                <span className="text-zinc-600 text-[10px] uppercase tracking-widest font-medium">
                  Hostel Solutions
                </span>
              </div>
            </div>
            <div className="space-y-1">
              <h1 className="text-4xl font-black tracking-tight text-white">
                Create Account
              </h1>
              <p className="text-zinc-500 text-sm font-medium">
                Join our community to find your perfect stay.
              </p>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="space-y-6">
              {/* Username Input */}
              <div className="space-y-2 group">
                <label className="text-[11px] uppercase tracking-widest font-bold text-zinc-600 group-focus-within:text-emerald-400 transition-colors duration-300">
                  Username
                </label>
                <div className="flex items-center bg-zinc-900/40 border border-zinc-800 rounded-2xl px-5 py-4.5 group-focus-within:border-emerald-500/50 group-focus-within:bg-zinc-900/80 transition-all duration-500 shadow-inner group-hover:border-zinc-700">
                  <HiOutlineUser className="text-2xl text-zinc-600 group-focus-within:text-emerald-400 mr-4 transition-colors duration-300" />
                  <input
                    type="text"
                    name="username"
                    value={formData.username}
                    onChange={handleChange}
                    required
                    className="bg-transparent border-none outline-none w-full focus:ring-0 text-white placeholder-zinc-700 p-0 text-lg transition-all"
                    placeholder="e.g., john_doe"
                    autoComplete="username"
                  />
                </div>
              </div>

              {/* Email Input */}
              <div className="space-y-2 group">
                <label className="text-[11px] uppercase tracking-widest font-bold text-zinc-600 group-focus-within:text-emerald-400 transition-colors duration-300">
                  Email Address
                </label>
                <div className="flex items-center bg-zinc-900/40 border border-zinc-800 rounded-2xl px-5 py-4.5 group-focus-within:border-emerald-500/50 group-focus-within:bg-zinc-900/80 transition-all duration-500 shadow-inner group-hover:border-zinc-700">
                  <HiOutlineEnvelope className="text-2xl text-zinc-600 group-focus-within:text-emerald-400 mr-4 transition-colors duration-300" />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="bg-transparent border-none outline-none w-full focus:ring-0 text-white placeholder-zinc-700 p-0 text-lg transition-all"
                    placeholder="email@example.com"
                    autoComplete="email"
                  />
                </div>
              </div>

              {/* Password Input */}
              <div className="space-y-2 group">
                <label className="text-[11px] uppercase tracking-widest font-bold text-zinc-600 group-focus-within:text-emerald-400 transition-colors duration-300">
                  Password
                </label>
                <div className="flex items-center bg-zinc-900/40 border border-zinc-800 rounded-2xl px-5 py-4.5 group-focus-within:border-emerald-500/50 group-focus-within:bg-zinc-900/80 transition-all duration-500 shadow-inner group-hover:border-zinc-700">
                  <HiOutlineLockClosed className="text-2xl text-zinc-600 group-focus-within:text-emerald-400 mr-4 transition-colors duration-300" />
                  <input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                    className="bg-transparent border-none outline-none w-full focus:ring-0 text-white placeholder-zinc-700 p-0 text-lg transition-all"
                    placeholder="••••••••••••"
                    autoComplete="new-password"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="text-zinc-600 hover:text-emerald-400 transition-colors duration-300"
                  >
                    {showPassword ? (
                      <HiOutlineEyeSlash className="w-6 h-6" />
                    ) : (
                      <HiOutlineEye className="w-6 h-6" />
                    )}
                  </button>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <button
                type="submit"
                className="w-full bg-emerald-600 text-white font-bold py-4 rounded-2xl text-lg tracking-wide hover:bg-emerald-700 focus:outline-none focus:ring-4 focus:ring-emerald-500/50 transition-all duration-300 disabled:bg-zinc-700 disabled:text-zinc-500 disabled:cursor-not-allowed shadow-lg shadow-emerald-900/30"
              >
                Register Account
              </button>

              <p className="text-center text-sm text-zinc-500 font-medium">
                Already have an account?{" "}
                <Link
                  to="/login"
                  className="text-emerald-400 hover:text-emerald-300 font-bold underline underline-offset-4 transition-colors duration-300"
                >
                  Login
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;