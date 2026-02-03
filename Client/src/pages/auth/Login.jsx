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
  const {status, token, data: user} = useSelector((state) => state.auth);

  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    email: "",
    password: "",
    general: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "", general: "" }));
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
    if (status === STATUSES.SUCCESS && token && user) {
      toast("Login successful!", "success");
      setTimeout(() => {
        if (user.role === 'user') {
          navigate("/");
        } else if (user.role === 'hosteler') {
          navigate("/hosteler-dashboard");
        } else if (user.role === 'admin') {
          navigate("/admin-dashboard");
        }
      }, 2000);
      dispatch(resetAuthStatus());
    } else if (status === STATUSES.ERROR) {
      toast("Login failed. Please check your credentials.", "error");
      dispatch(resetAuthStatus());
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
  }, [navigate, status, errors, token, user,  dispatch]);

  return (
    <>
      <AuthForm
        type="login"
        onSubmit={handleSubmit}
        onChange={handleChange}
        values={userData}
        errors={errors}
        message={toast}
      />
    </>
  );
};

export default Login;
