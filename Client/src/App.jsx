import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Register from './pages/auth/Register'
import Home from './pages/home/Home'
import Login from './pages/auth/Login'
import ForgotPassword from './pages/auth/ForgetPassword'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/forgetpassword" element={<ForgotPassword />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App