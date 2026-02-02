import React, { useEffect, useState } from 'react'
import AuthForm from './components/AuthForm'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { registerUser, resetAuthStatus } from '../../store/authSlice'
import { toast } from '../../utils/toast'
import { STATUSES } from '../../global/status'

const Register = () => {
      const navigate = useNavigate()
      const dispatch = useDispatch()
      const [searchParams] = useSearchParams();
      const defaultRole = searchParams.get('role') || 'user';
      const {status} = useSelector((state) => state.auth)

      const[userData, setUserData] = useState({
            username: "",
            email: "",
            password: "",
            role: defaultRole
      })

      const [errors, setErrors] = useState({
            username: "",
            email: "",
            password: "",
            general: ""
      })

    const [passwordStrength, setPasswordStrength] = useState({
      score: 0,
      label: "",
      color: "bg-gray-200",
    });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({
      ...userData,
      [name]: value,
    });
    setErrors({
      ...errors,
      [name]: "",
      general: "",
    });

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

    // Length
    if (password.length >= 8) score += 1;
    if (password.length >= 12) score += 1;

    // Character variety
    if (/[A-Z]/.test(password)) score += 1;
    if (/[a-z]/.test(password)) score += 1;
    if (/\d/.test(password)) score += 1;
    if (/[^A-Za-z0-9]/.test(password)) score += 1;

    // Final strength level
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
  }

  const validatePassword = (password) => {
      return password.length >= 8;
  }

    const handleSubmit = (e) => {
    e.preventDefault();
    setErrors({ username: "", email: "", password: "", general: "" });

    let hasError = false;
    const newErrors = { username: "", email: "", password: "", general: "" };

    if (!userData.username) {
      newErrors.username = "Username is required";
      hasError = true;
      toast(newErrors.username, 'error');
    }
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
      setErrors({ ...errors, email: "Invalid email format" });
      toast("Invalid email format", 'error');
      return;
    }

    if (!validatePassword(userData.password)) {
      setErrors({
        ...errors,
        password: "Password must be at least 8 characters long",
      });
      toast("Password must be at least 8 characters long", 'error');
      return;
    }

    dispatch(registerUser(userData))
      .then(() => {
        toast("Registration successful!");
        setUserData({ username: "", email: "", password: "" });
        setErrors({ username: "", email: "", password: "", general: "" });

        setTimeout(() => {
          navigate("/login"); // or keep commented
        }, 2000);
        dispatch(resetAuthStatus());
      })
      .catch((error) => {
        const errData = error?.response?.data || error?.data;

        if (
          errData &&
          error?.response?.status >= 400 &&
          error?.response?.status < 500
        ) {
          const field = errData.field;
          const msg = errData.message || "Validation error";

          if (
            field &&
            ["username", "email", "password", "general"].includes(field)
          ) {
            setErrors((prev) => ({ ...prev, [field]: msg }));
            toast(msg, 'error');
          } else {
            setErrors((prev) => ({ ...prev, general: msg }));
            toast(msg, 'error');
          }
        } else {
          setErrors((prev) => ({
            ...prev,
            general: "Something went wrong.",
          }));
            toast("Something went wrong.", 'error');
        }
      });
  };


  useEffect(() => {
    if (status === STATUSES.ERROR && !errors.general) {
      setErrors((prev) => ({
        ...prev,
        general: "Registration failed!",
      }));
    }
  }, [status, errors.general]);

  return (
      <>
      <AuthForm 
      type="register" 
        onSubmit={handleSubmit}
        onChange={handleChange}
        values={userData}
        value={setUserData}
        errors={errors}
        message={toast}
        passwordStrength={passwordStrength}
      />
      </>

  )
}

export default Register
