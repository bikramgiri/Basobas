import React from 'react'

const HostlerDashboard = () => {
  return (
     <div className="min-h-screen bg-gray-50 p-8">
    <div className="max-w-7xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Hostel Owner Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-xl shadow">
          <h3 className="font-semibold">Total Beds</h3>
          <p className="text-3xl font-bold text-green-600 mt-2">48</p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow">
          <h3 className="font-semibold">Occupied</h3>
          <p className="text-3xl font-bold text-green-600 mt-2">42</p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow">
          <h3 className="font-semibold">New Applications</h3>
          <p className="text-3xl font-bold text-blue-600 mt-2">5</p>
        </div>
      </div>
    </div>
  </div>
  )
}

export default HostlerDashboard
