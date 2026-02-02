import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { verifyOTP } from "../../store/authSlice";
import { Key, Loader2, Mail } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "../../utils/toast";
import { STATUSES } from "../../global/statuses";

const VerifyOTP = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { status } = useSelector((state) => state.auth);
  
  const [userData, setUserData] = useState({
    email: "",
    otp: "",
  });

    const [errors, setErrors] = useState({
      email: "",
      otp: "",
      general: "",
    });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "", general: "" }));
  };

  const validateEmail = (email) => {
    const emailRegex = /^[a-zA-Z0-9._-]+@gmail\.com$/;
    return emailRegex.test(email);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors((prev) => ({ ...prev, email: "", otp: "", general: "" }));

    let hasError = false;
    const newErrors = { email: "", otp: "", general: "" };

    if (!userData.email) {
      newErrors.email = "Email is required";
      hasError = true;
      toast(newErrors.email, "error");
    }

    if (!userData.otp) {
      newErrors.otp = "OTP is required";
      hasError = true;
      toast(newErrors.otp, "error");
    }

    if (hasError) return;

    if (!validateEmail(userData.email)) {
      newErrors.email = "Invalid email format.";
      toast(newErrors.email, "error");
      setErrors(newErrors);
      return;
    }

    const otpRegex = /^\d{6}$/;
    if (!otpRegex.test(userData.otp)) {
      newErrors.otp = "OTP must be a 6-digit number";
      toast(newErrors.otp, "error");
      setErrors(newErrors);
      return;
    }

    dispatch(verifyOTP(userData))
      .then(() => {
        toast("OTP verified successfully!", "success");
        setUserData({ email: "", otp: "" });
        setErrors({ email: "", otp: "", general: "" });

        setTimeout(() => {
          navigate("/resetpassword");
        }, 2000);
      })
      .catch((error) => {
        const errMsg =
          error?.response?.data?.message ||
          "Failed to verify OTP.";

        if (
          errMsg &&
          error?.response?.status >= 400 &&
          error?.response?.status < 500
        ) {
          const field = errMsg.field;
          const msg = errMsg || "OTP verification failed";

          if (field && ["email", "otp", "general"].includes(field)) {
              setErrors((prev) => ({ ...prev, [field]: msg }));
            toast(msg, "error");
          } else {
            setErrors((prev) => ({ ...prev, general: msg }));
            toast(msg, "error");
          }
        } else {
          setErrors((prev) => ({
            ...prev,
            general: "Something went wrong.",
          }));
          toast("Something went wrong.", "error");
        }
      });
  };

  return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4 sm:px-6 lg:px-8 py-10 md:py-14">
      <div className="bg-white p-6 sm:p-8 md:p-10 rounded-xl w-full max-w-md sm:max-w-lg lg:max-w-md border border-gray-200

                  shadow-[0_-4px_25px_-8px_rgba(0,0,0,0.6),0_3px_20px_-8px_rgba(0,0,0,0.04)]
            dark:shadow-[0_-2px_34px_-14px_rgba(0,0,0,0.2),0_2px_14px_-8px_rgba(0,0,0,0.20)]
  
            hover:shadow-[0_-6px_26px_-6px_rgba(0,0,0,0.6),0_8px_16px_-6px_rgba(0,0,0,0.1)]
            dark:hover:shadow-[0_-8px_36px_-6px_rgba(0,0,0,0.12),0_6px_12px_-2px_rgba(0,0,0,0.14)]
  
            transition-shadow duration-500
      ">

         <div className="text-center mb-6">
                  <Link to="/" className="inline-flex items-center gap-2 mb-1">
                    <div className="w-9 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                      <span className="text-white font-bold text-2xl">B</span>
                    </div>
                    <span className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                      Basobas
                    </span>
                  </Link>
                  <p className="text-lg sm:text-lg font-bold text-gray-700 mb-1.5">
                    Verify OTP
                  </p>
                </div>

                      <p>
        {errors.general && (
          <p className="text-center text-red-600 font-medium mb-6 bg-red-50 py-3 rounded-lg">
            {errors.general}
          </p>
        )}
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">
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
              value={userData.email}
              onChange={handleChange}
              className="block w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-lg shadow-sm focus:ring-1 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all placeholder-gray-400 text-gray-900"
              placeholder="username@gmail.com"
            />
          </div>

              <div className="relative">
            <label htmlFor="otp" className="block text-sm font-medium text-gray-700 mb-1.5">
              OTP
            </label>
            <Key className="absolute left-3 top-12 -translate-y-1/2 size-5 text-gray-400 pointer-events-none" />
            <input
              type="text"
              id="otp"
              name="otp"
              value={userData.otp}
              onChange={handleChange}
              className="block w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-lg shadow-sm focus:ring-1 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all placeholder-gray-400 text-gray-900"
              placeholder="Enter the OTP sent to your email"
            />
          </div>

          <button
            type="submit"
            disabled={status === STATUSES.LOADING}
            className="cursor-pointer w-full py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-lg font-semibold transition-all flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {status === STATUSES.LOADING ? (
              <div className="flex items-center justify-center gap-3">
                <Loader2 className="w-5 h-5 animate-spin" />
                Verifying OTP...
              </div>
            ) : (
              "Verify OTP"
            )}
          </button>
        </form>

        <div className="mt-6 text-center text-sm text-gray-600">
          Remember your password?{" "}
          <button
            onClick={() => navigate("/login")}
            className="cursor-pointer text-blue-600 font-medium hover:text-blue-800 hover:underline transition"
          >
            Back to Login
          </button>
        </div>

      </div>
    </div>
  );
};

export default VerifyOTP;