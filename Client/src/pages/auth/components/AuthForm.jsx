import React, { useEffect, useState } from 'react'
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import { Link } from "react-router-dom";
import { Eye, EyeOff, Lock, LogIn, Mail, UserIcon, UserPlus } from 'lucide-react';

const AuthForm = ({ type = "login || register", onSubmit, onChange, values, value, passwordStrength }) => {

const heroSlides = [
  {
    title: "Unforgettable Views",
    subtitle: "Relax on stunning rooftops with city skylines",
    image: "https://images.pexels.com/photos/27903662/pexels-photo-27903662.jpeg?auto=compress&cs=tinysrgb&w=1920",
  },
  {
    title: "Warm Welcome Awaits",
    subtitle: "Friendly check-in and helpful staff ready to assist",
    image: "https://images.pexels.com/photos/4907442/pexels-photo-4907442.jpeg?auto=compress&cs=tinysrgb&w=1920",
  },
  {
    title: "Global Community",
    subtitle: "Meet diverse travelers and make lifelong friends",
    image: "https://eastseven.de/wp-content/uploads/2024/04/40_LIUC_EastSeven_1054-1024x683.jpg",
  },
  {
    title: "Evening Social Gatherings",
    subtitle: "Join rooftop parties and unforgettable hostel events",
    image: "https://eastseven.de/wp-content/uploads/2023/10/backpacker-hostel-berlin-community-abend-1024x640.jpeg.webp",
  },
  {
    title: "Discover Your Ideal Hostel Haven",
    subtitle: "Budget-friendly comfort designed for adventurers and students",
    image: "https://images.pexels.com/photos/4907229/pexels-photo-4907229.jpeg?auto=compress&cs=tinysrgb&w=1920",
  },
  {
    title: "Vibrant Shared Spaces",
    subtitle: "Spark connections in cozy, welcoming common areas",
    image: "https://junglecampsindia.com/wp-content/uploads/2024/07/3-2.webp",
  },
  {
    title: "Breathtaking Rooftop Escapes", //
    subtitle: "Unwind with stunning city views and fresh air",
    image: "https://images.pexels.com/photos/27903662/pexels-photo-27903662.jpeg?auto=compress&cs=tinysrgb&w=1920",
  },
  {
    title: "Heartfelt Hospitality Awaits",
    subtitle: "Warm welcomes and dedicated support from day one",
    image: "https://images.pexels.com/photos/4907442/pexels-photo-4907442.jpeg?auto=compress&cs=tinysrgb&w=1920",
  },
  {
    title: "A Thriving Global Community",
    subtitle: "Forge lifelong friendships with travelers from everywhere",
    image: "https://eastseven.de/wp-content/uploads/2024/04/40_LIUC_EastSeven_1054-1024x683.jpg",
  },
  {
    title: "Electric Evening Vibes", //
    subtitle: "Dive into lively events and unforgettable rooftop nights",
    image: "https://eastseven.de/wp-content/uploads/2023/10/backpacker-hostel-berlin-community-abend-1024x640.jpeg.webp",
  },
  {
    title: "Instant & Easy Booking", //
    subtitle: "Reserve your perfect bed in seconds – hassle-free",
    image: "https://miro.medium.com/v2/resize:fit:1200/0*mBCLcIQVg-qmrsKu.jpg",
  },
  {
    title: "24/7 Friendly Support", //
    subtitle: "Our team is always here to make your stay perfect",
    image: "https://images.pexels.com/photos/5137969/pexels-photo-5137969.jpeg",
  }
];

  const [showPassword, setShowPassword] = useState(false)

  useEffect(() => {
    heroSlides.forEach(slide => {
      const img = new Image();
      img.src = slide.image;
    });
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-500 flex flex-col lg:flex-row">
      {/* Hero Section - Full width on mobile, side-by-side on lg+, with slideshow effect */}
      <div className="relative w-full lg:w-[60%] h-96 sm:h-screen overflow-hidden">
        {heroSlides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === 0 ? 'opacity-100' : 'opacity-0'
            }`}
            style={{ 
              animation: index === 0 
                ? 'none' 
                : `fadeSlide 70s infinite ${index * 4}s` 
            }}
          >
            <div
              className="h-full w-full bg-cover bg-center"
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              {/* Dark overlay for readability */}
              <div className="absolute inset-0 bg-black/50"></div>

              {/* Content */}
              <div className="absolute inset-0 flex items-center justify-center px-6">
                <div className="text-center text-white max-w-4xl">
                  <h1 className="text-4xl  sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 leading-tight">
                    {slide.title}
                  </h1>
                  <p className="text-lg sm:text-xl md:text-2xl text-white/90 mb-10 max-w-2xl mx-auto">
                    {slide.subtitle}
                  </p>

                  {/* CTA Buttons */}
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link
                      to="/hostels"
                      className="px-10 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold text-lg rounded-xl transition-all hover:shadow-xl"
                    >
                      Browse Hostels
                    </Link>
                    <a
                      href="#how-it-works"
                      className="px-10 py-4 bg-transparent border-2 border-white text-white font-bold text-lg rounded-xl hover:bg-white/10 transition-all"
                    >
                      How It Works
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Form Section - Full width on mobile, half on lg+, centered vertically */}
      <div className="w-full lg:w-[40%] flex items-center justify-center  py-10 lg:py-0 bg-green-100">
        <div className="bg-white p-6 sm:p-6 md:p-8 rounded-xl shadow-lg w-full max-w-md sm:max-w-md lg:max-w-md border border-gray-200">
          <div className="text-center">
            {/* {message && <p className="text-green-500 text-center mb-4">{message}</p>} */}
            {/* {errors?.general && <p className="text-red-500 text-center mb-4">{errors.general}</p>} */}
            <Link to="/" className="inline-flex items-center gap-2 mb-1">
            <div className="w-9 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-2xl">B</span>
            </div>
            <span className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Basobas
            </span>
          </Link>
            <p className="text-lg sm:text-lg font-bold text-gray-700 mb-1.5">
              {type === "login"
                ? "Welcome Back"
                : "Create Account"}
            </p>
            {/* <p className="text-sm sm:text-base text-gray-600">
              {type === "login"
                ? "Welcome back! Please enter your details."
                : "Join Basobas Hub and start your journey with us."}
            </p> */}
          </div>

          {/* Form */}
          <form onSubmit={onSubmit} className="space-y-2 mt-6">
            {type !== "login" && (
              <>
                {/* Role Selection */}
                <div>
                  <div className="grid grid-cols-2 gap-3 mb-4">
                    <button
                      type="button"
                      onClick={() => value({ ...values, role: "user" })}
                      className={`cursor-pointer p-2 border-2 rounded-lg font-medium transition-all ${
                        values.role === "user"
                          ? "border-blue-600 bg-blue-50 text-blue-700"
                          : "border-gray-300 text-gray-700 hover:border-gray-400"
                      }`}
                    >
                      Student
                    </button>
                    <button
                      type="button"
                      onClick={() => value({ ...values, role: "hosteler" })}
                      className={`cursor-pointer p-2 border-2 rounded-lg font-medium transition-all ${
                        values.role === "hosteler"
                          ? "border-purple-600 bg-purple-50 text-purple-700"
                          : "border-gray-300 text-gray-700 hover:border-gray-400"
                      }`}
                    >
                      Hostel Owner
                    </button>
                  </div>
                </div>

                <div className="relative">
                  <label
                    htmlFor="username"
                    className="block text-sm font-medium text-gray-700 mb-1.5"
                  >
                    Username
                  </label>
                  <UserIcon className="absolute left-3 mt-5 -translate-y-1/2 size-5 text-gray-400 pointer-events-none" />
                  <input
                    type="text"
                    id="username"
                    name="username"
                    value={values.username || ""}
                    onChange={onChange}
                    className="block w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-lg shadow-sm focus:ring-1 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all placeholder-gray-400 text-gray-900"
                    placeholder="John Doe"
                  />
                </div>
              </>
            )}
            <div className="relative">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 mb-1.5"
              >
                Email address
              </label>
              <Mail className="absolute left-3 mt-6 -translate-y-1/2 size-5 text-gray-400 pointer-events-none" />
              <input
                type="email"
                id="email"
                name="email"
                value={values.email}
                onChange={onChange}
                className="block w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-lg shadow-sm focus:ring-1 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all placeholder-gray-400 text-gray-900"
                placeholder="username@gmail.com"
              />
            </div>

            <div className="relative">
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700 mb-1.5"
              >
                Password
              </label>
              <Lock className="absolute left-3 mt-5 -translate-y-1/2 size-5 text-gray-400 pointer-events-none" />
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                name="password"
                value={values.password}
                onChange={onChange}
                className="block w-full pl-10 pr-12 py-2.5 border border-gray-300 rounded-lg shadow-sm focus:ring-1 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all placeholder-gray-400 text-gray-900"
                placeholder="••••••••"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="cursor-pointer absolute right-3 top-1/2 -translate-y-1/9 flex items-center text-gray-500 hover:text-green-600 focus:outline-none"
                // className="cursor-pointer absolute inset-y-0 right-0 mt-6 flex items-center pr-4 text-gray-500 hover:text-green-600 focus:outline-none"
              >
                {showPassword ? (
                  <Eye className="h-5 w-5" />
                ) : (
                  <EyeOff className="h-5 w-5" />
                )}
              </button>
              <div className="mt-2">
                {values.password && (
                  <div className="mt-2">
                    <div className="h-1 w-full bg-gray-200 rounded-full overflow-hidden">
                      <div
                        className={`h-full transition-all duration-300 ${passwordStrength.color}`}
                        style={{
                          width: `${(passwordStrength.score / 6) * 100}%`,
                        }}
                      />
                    </div>
                    <p
                      className={`text-sm ${
                        passwordStrength.label === "Weak"
                          ? "text-red-600"
                          : passwordStrength.label === "Fair"
                            ? "text-orange-600"
                            : passwordStrength.label === "Good"
                              ? "text-yellow-600"
                              : passwordStrength.label === "Strong"
                                ? "text-green-600"
                                : "text-indigo-600"
                      }`}
                    >
                      Password Strength:{" "}
                      {passwordStrength.label || "Enter password"}
                    </p>
                  </div>
                )}
              </div>
            </div>

            <div
              className={`${type === "login" ? "flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4" : "flex justify-start"}`}
            >
              <div className="flex items-start mb-1">
                <input
                  type="checkbox"
                  id="rememberandterms"
                  className="mt-1.5 h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded cursor-pointer"
                  required
                />
                <label
                  htmlFor="rememberandterms"
                  className="ml-2 block text-sm text-gray-600"
                >
                  {type === "login" ? (
                    <>Remember me</>
                  ) : (
                    <>
                      I agree to the
                      <Link
                        to="/terms"
                        className="text-blue-600 hover:text-blue-800 hover:underline font-medium"
                      >
                        {" "}
                        Terms of Services{" "}
                      </Link>
                      and{" "}
                      <Link
                        to="/privacy"
                        className="text-blue-600 hover:text-blue-800 hover:underline font-medium"
                      >
                        Privacy Policy
                      </Link>
                    </>
                  )}
                </label>
              </div>
              {type === "login" && (
                <Link
                  to="/forgotpassword"
                  className="text-sm font-medium text-blue-600 hover:text-blue-800"
                >
                  Forgot password?
                </Link>
              )}
            </div>

            <button
              type="submit"
                 className="cursor-pointer w-full py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-lg font-semibold transition-all flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {type === "login"? (<LogIn className="size-5" />): (<UserPlus className="size-5" />)}
              {type === "login" ? "Sign In" : "Create Account"}
            </button>
          </form>

          <p className="mt-2.5 text-center text-sm text-gray-600">
            {type === "login"
              ? "Don't have an account? "
              : "Already have an account? "}
            <Link
              to={type === "login" ? "/register" : "/login"}
              className="text-blue-600 font-medium hover:underline"
            >
              {type === "login" ? "Sign up" : "Sign in"}
            </Link>
          </p>

          {/* Social Signup */}
          <div className="mt-2.5">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300" />
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-4 bg-white text-gray-500">
                  Or {type === "login" ? "sign in" : "sign up"} with
                </span>
              </div>
            </div>

            {/* Responsive social buttons - stack on mobile, grid on sm+ */}
            <div className="mt-2.5 grid grid-cols-1 sm:grid-cols-3 gap-4">
              {/* Google */}
              <button
                onClick={() =>
                  window.open("http://localhost:4000/auth/google", "_self")
                }
                className="cursor-pointer flex items-center justify-center gap-3 bg-blue-100 border border-gray-300 rounded-lg py-3.5 px-4 shadow-sm hover:bg-blue-200 transition-colors text-sm font-medium text-gray-700"
              >
                <FcGoogle className="h-6 w-6 flex-shrink-0" />
                Google
              </button>

              {/* Facebook */}
              <button className="cursor-pointer flex items-center justify-center gap-3 bg-blue-100 border border-gray-300 rounded-lg py-3.5 px-4 shadow-sm hover:bg-blue-200 transition-colors text-sm font-medium text-gray-700">
                <FaFacebook className="h-6 w-6 text-blue-600 flex-shrink-0" />
                Facebook
              </button>

              {/* GitHub */}
              <button className="cursor-pointer flex items-center justify-center gap-3 bg-blue-100 border border-gray-300 rounded-lg py-3.5 px-4 shadow-sm hover:bg-blue-200 transition-colors text-sm font-medium text-gray-700">
                <svg
                  className="h-6 w-6 text-gray-900 flex-shrink-0"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 2C6.475 2 2 6.475 2 12c0 4.425 2.865 8.175 6.839 9.495.5.09.682-.218.682-.484 0-.237-.009-.866-.014-1.7-2.782.602-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.462-1.11-1.462-.908-.621.069-.609.069-.609 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.089 2.91.833.091-.647.35-1.089.636-1.34-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.03-2.682-.103-.253-.447-1.27.097-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.698 1.028 1.591 1.028 2.682 0 3.841-2.337 4.687-4.565 4.935.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12c0-5.525-4.475-10-10-10z" />
                </svg>
                GitHub
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AuthForm