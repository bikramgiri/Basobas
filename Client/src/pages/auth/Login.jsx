import React, { useEffect, useState } from "react";
import AuthForm from "./components/AuthForm";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "../../utils/toast";
import { loginUser, resetAuthStatus } from "../../store/authSlice";
import { STATUSES } from "../../global/status";


const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {status, token} = useSelector((state) => state.auth);

  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    email: "",
    password: "",
    general: "",
  });

    const [passwordStrength, setPasswordStrength] = useState({
      score: 0,
      label: "",
      color: "bg-gray-200",
    });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "", general: "" }));

    if (name === "password") {
      calculatePasswordStrength(value);
    }
  };

    // Password strength calculation function
  const calculatePasswordStrength = (password) => {
    if (!password) {
      setPasswordStrength({ score: 0, label: "", color: "bg-gray-200" });
      return;
    }

    let score = 0;

    if (password.length >= 8) score += 1;
    if (password.length >= 12) score += 1;

    if (/[A-Z]/.test(password)) score += 1;
    if (/[a-z]/.test(password)) score += 1;
    if (/\d/.test(password)) score += 1;
    if (/[^A-Za-z0-9]/.test(password)) score += 1;

    let label = "";
    let color = "";

    switch (true) {
      case score <= 2:
        label = "Weak";
        color = "bg-red-500";
        break;
      case score === 3:
        label = "Fair";
        color = "bg-orange-500";
        break;
      case score === 4:
        label = "Good";
        color = "bg-yellow-500";
        break;
      case score === 5:
        label = "Strong";
        color = "bg-green-500";
        break;
      case score >= 6:
        label = "Very Strong";
        color = "bg-indigo-600";
        break;
      default:
        label = "";
        color = "bg-gray-200";
    }

    setPasswordStrength({ score, label, color });
  };

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors({ email: "", password: "", general: "" });

    let hasError = false;
    const newErrors = { username: "", email: "", password: "", general: "" };

    if (!userData.email) {
      newErrors.email = "Email is required";
      hasError = true;
      toast(newErrors.email, 'error');
    }
    if (!userData.password) {
      newErrors.password = "Password is required";
      hasError = true;
      toast(newErrors.password, 'error');
    }

    if (hasError) {
      setErrors(newErrors);
      return;
    }

    if (!validateEmail(userData.email)) {
      setErrors((prev) => ({ ...prev, email: "Invalid email format" }));
      toast("Invalid email format", 'error');
      return;
    }

    dispatch(loginUser(userData))
      .catch((error) => {
        const errData = error?.response?.data || error?.data;

        if (
          errData &&
          error?.response?.status >= 400 &&
          error?.response?.status < 500
        ) {
          const field = errData.field;
          const msg = errData.message || "Login failed";

          if (field && ["email", "password", "general"].includes(field)) {
            setTimeout(() => {
              setErrors((prev) => ({ ...prev, [field]: msg }));
              toast(msg, 'error');
            }, 2000);
          } else {
            setTimeout(() => {
              setErrors((prev) => ({ ...prev, general: msg }));
              toast(msg, 'error');
            }, 2000);
          }
        } else {
          setTimeout(() => {
            setErrors((prev) => ({
            ...prev,
            general: "Something went wrong.",
          }));
          toast("Something went wrong.", 'error');
          }, 2000);
        }
      });
  };

  useEffect(() => {
    if (status === STATUSES.SUCCESS && token) {
      setTimeout(() => {
      toast("Login successful");
      setTimeout(() => {
        navigate("/");
      }, 2000);
      }, 0);
      dispatch(resetAuthStatus());
    } else if (status === STATUSES.ERROR) {
      if (!errors.general) {
        setTimeout(() => {
          setErrors((prev) => ({
            ...prev,
            general: "Login failed!",
          }));
        }, 0);
      }
    }

    const queryParams = new URLSearchParams(window.location.search);
    if (queryParams.get("logout") === "true") {
      setTimeout(() => {
        // toast("Logout successful");
        setTimeout(() => {
          navigate("/login", { replace: true });
        }, 1000);
      }, 0); 
      dispatch(resetAuthStatus());
    }
  }, [navigate, status, errors, token, dispatch]);

  return (
    <>
      <AuthForm
        type="login"
        onSubmit={handleSubmit}
        onChange={handleChange}
        values={userData}
        errors={errors}
        message={toast}
        passwordStrength={passwordStrength}
      />
    </>
  );
};

export default Login;
