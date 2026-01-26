import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { HiOutlineEnvelope, HiOutlineLockClosed, HiOutlineEye, HiOutlineEyeSlash } from 'react-icons/hi2';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [showPassword, setShowPassword] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    console.log('Login attempt:', formData);

    // Simulating API call
    setTimeout(() => {
      setIsSubmitting(false);
      // Role-based redirection will be handled by the backend response
    }, 1500);
  };

  return (
    <div className="min-h-screen flex bg-[#0c1110] text-zinc-100 font-sans selection:bg-emerald-500/30">
      {/* Left Side: Visual Narrative */}
      <div className="hidden lg:flex lg:w-3/5 relative overflow-hidden bg-[#0c1110]">
        <img
          src="/hostel-bg.png"
          alt="Modern Student Living"
          className="absolute inset-0 w-full h-full object-cover opacity-40 scale-105 animate-subtle-zoom"
        />
        {/* Dark overlay for background image */}
        <div className="absolute inset-0 bg-linear-to-t from-[#0c1110] via-[#0c1110]/20 to-transparent" />

        <div className="relative z-10 w-full flex flex-col justify-end p-24 animate-fade-up">
          <div className="space-y-6 max-w-xl">
            <h2 className="text-7xl font-extrabold leading-[1.1] tracking-tighter text-white drop-shadow-2xl">
              Your home <br />
              <span className="text-emerald-400 italic font-serif">away from home.</span>
            </h2>
            <p className="text-zinc-300 text-2xl leading-relaxed font-medium drop-shadow-lg max-w-lg opacity-90">
              The unified platform for students seeking comfort and owners managing excellence.
            </p>
          </div>
        </div>
      </div>

      {/* Right Side: Universal Access Portal */}
      <div className="w-full lg:w-2/5 flex flex-col items-center justify-center p-8 lg:p-16 bg-[#0c1110] border-l border-zinc-900/50 relative">
        {/* Subtle background glow */}
        <div className="absolute top-1/4 right-0 w-64 h-64 bg-emerald-500/5 blur-[120px] rounded-full pointer-events-none" />

        <div className="w-full max-w-sm space-y-12 relative z-10">

          {/* Brand Identity */}
          <div className="space-y-4">
            <div className="flex items-center gap-3 group cursor-default">
              <div className="w-12 h-12 rounded-2xl bg-emerald-600 flex items-center justify-center font-black text-white italic text-2xl shadow-lg shadow-emerald-900/40 group-hover:scale-110 transition-transform duration-500">
                B
              </div>
              <div className="flex flex-col">
                <span className="text-emerald-500 font-bold tracking-[0.4em] text-[10px] uppercase leading-none mb-1">Basobas</span>
                <span className="text-zinc-600 text-[10px] uppercase tracking-widest font-medium">Hostel Solutions</span>
              </div>
            </div>
            <div className="space-y-1">
              <h1 className="text-4xl font-black tracking-tight text-white">Welcome Back</h1>
              <p className="text-zinc-500 text-sm font-medium">Secure access to your personal portal.</p>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="space-y-6">
              {/* Account Email Input */}
              <div className="space-y-2 group">
                <label className="text-[11px] uppercase tracking-widest font-bold text-zinc-600 group-focus-within:text-emerald-400 transition-colors duration-300">
                  Account Email
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

              {/* Secure Password Input */}
              <div className="space-y-2 group">
                <div className="flex justify-between items-center px-1">
                  <label className="text-[11px] uppercase tracking-widest font-bold text-zinc-600 group-focus-within:text-emerald-400 transition-colors duration-300">
                    Secure Password
                  </label>
                  <Link to="/forgot-password" weights="medium" className="text-[10px] uppercase tracking-widest font-bold text-zinc-500 hover:text-emerald-400 transition-colors duration-300">
                    Forgot?
                  </Link>
                </div>
                <div className="flex items-center bg-zinc-900/40 border border-zinc-800 rounded-2xl px-5 py-4.5 group-focus-within:border-emerald-500/50 group-focus-within:bg-zinc-900/80 transition-all duration-500 shadow-inner group-hover:border-zinc-700">
                  <HiOutlineLockClosed className="text-2xl text-zinc-600 group-focus-within:text-emerald-400 mr-4 transition-colors duration-300" />
                  <input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                    className="bg-transparent border-none outline-none w-full focus:ring-0 text-white placeholder-zinc-700 p-0 text-lg transition-all"
                    placeholder="••••••••"
                    autoComplete="current-password"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="text-zinc-600 hover:text-emerald-400 transition-colors pl-2 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 rounded-lg p-1"
                    title={showPassword ? "Hide Password" : "Show Password"}
                  >
                    {showPassword ? <HiOutlineEyeSlash className="text-2xl" /> : <HiOutlineEye className="text-2xl" />}
                  </button>
                </div>
              </div>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full bg-emerald-600 hover:bg-emerald-500 text-white font-black uppercase tracking-[0.2em] py-5 rounded-2xl transition-all duration-300 shadow-xl shadow-emerald-900/20 active:scale-[0.98] flex items-center justify-center gap-3 group relative overflow-hidden ${isSubmitting ? 'opacity-80 cursor-wait' : ''}`}
            >
              {isSubmitting ? (
                <>
                  <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  <span>Verifying...</span>
                </>
              ) : (
                <>
                  <span>Enter Portal</span>
                  <div className="w-1.5 h-1.5 bg-white rounded-full group-hover:animate-ping" />
                </>
              )}
            </button>
          </form>

          {/* Registration Prompt */}
          <div className="pt-4 text-center">
            <p className="text-zinc-500 text-sm font-medium">
              Don't have an account yet?
            </p>
            <Link to="/register" className="inline-block mt-2 text-white font-bold border-b-2 border-emerald-600 pb-1 hover:border-emerald-400 hover:text-emerald-400 transition-all duration-300 transform hover:-translate-y-0.5">
              Create student or owner account
            </Link>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes subtle-zoom {
          from { transform: scale(1.05); }
          to { transform: scale(1.15); }
        }
        .animate-subtle-zoom {
          animation: subtle-zoom 20s infinite alternate ease-in-out;
        }
        @keyframes fade-up {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-up {
          animation: fade-up 1s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default Login;