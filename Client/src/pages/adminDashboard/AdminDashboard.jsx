import React from 'react'

const AdminDashboard = () => {
  return (
      <div className="min-h-screen bg-gray-50 p-8">
    <div className="max-w-7xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Admin Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white p-6 rounded-xl shadow">
          <h3 className="font-semibold">Total Users</h3>
          <p className="text-3xl font-bold text-green-600 mt-2">1,234</p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow">
          <h3 className="font-semibold">Total Hostels</h3>
          <p className="text-3xl font-bold text-green-600 mt-2">89</p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow">
          <h3 className="font-semibold">Pending Verifications</h3>
          <p className="text-3xl font-bold text-orange-600 mt-2">12</p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow">
          <h3 className="font-semibold">Revenue (NPR)</h3>
          <p className="text-3xl font-bold text-green-600 mt-2">₨ 450,000</p>
        </div>
      </div>
    </div>
  </div>
  )
}

export default AdminDashboard
