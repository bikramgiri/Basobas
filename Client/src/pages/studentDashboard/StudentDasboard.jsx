import React from 'react'

const StudentDashboard = () => {
  return (
    <div className="min-h-screen bg-gray-50 p-8">
    <div className="max-w-7xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Student Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-xl shadow">
          <h3 className="font-semibold">Applied Hostels</h3>
          <p className="text-3xl font-bold text-green-600 mt-2">3</p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow">
          <h3 className="font-semibold">Saved Hostels</h3>
          <p className="text-3xl font-bold text-green-600 mt-2">12</p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow">
          <h3 className="font-semibold">Payments Due</h3>
          <p className="text-3xl font-bold text-red-600 mt-2">1</p>
        </div>
      </div>
    </div>
  </div>
  )
}

export default StudentDashboard
