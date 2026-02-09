import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Register from './pages/auth/Register'
import Home from './pages/home/Home'
import SearchPage from './pages/search/SearchPage'
import Login from './pages/auth/Login'
import ForgotPassword from './pages/auth/ForgotPassword'
import VerifyOTP from './pages/auth/VerifyOTP'
import ResetPassword from './pages/auth/ResetPassword'
import Layout from './components/Layout'
import { ToastContainer } from './components/ToastContainer'
import StudentDashboard from './pages/studentDashboard/StudentDasboard'
import HostelerDashboard from './pages/hostelerDashboard/HostelerDashboard'
import AdminDashboard from './pages/adminDashboard/AdminDashboard'
import NotFound from './components/NotFound'
import ProtectedRoute from './components/ProjectedRoute'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/forgotpassword" element={<ForgotPassword />} />
        <Route path="/verifyotp" element={<VerifyOTP />} />
        <Route path="/resetpassword" element={<ResetPassword />} />
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/explore-hostel" element={<SearchPage />} />
          <Route
            path="/student-dashboard"
            element={
              <ProtectedRoute allowedRoles={['user']}>
                <StudentDashboard />
              </ProtectedRoute>
            }
          />
          <Route
            path="/hosteler-dashboard"
            element={
              <ProtectedRoute allowedRoles={['hosteler']}>
                <HostelerDashboard />
              </ProtectedRoute>
            }
          />
          <Route
            path="/admin-dashboard"
            element={
              <ProtectedRoute allowedRoles={['admin']}>
                <AdminDashboard />
              </ProtectedRoute >
            }
          />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
      <ToastContainer />
    </BrowserRouter>
  )
}

export default App