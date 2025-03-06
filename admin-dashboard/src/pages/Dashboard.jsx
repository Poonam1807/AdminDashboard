import React from "react";

const Dashboard = () => {
  return (
    <div>
      <h1 className="text-3xl font-semibold mb-4">Dashboard</h1>
      <div className="grid grid-cols-4 gap-6">
        <div className="bg-white p-5 shadow-md shadow-orange-300 rounded-lg">
          <h2 className="text-xl font-bold">Total Vendors</h2>
          <p className="text-gray-600 text-lg">120</p>
        </div>
        <div className="bg-white p-5 shadow-md shadow-orange-300 rounded-lg">
          <h2 className="text-xl font-bold">Total Products</h2>
          <p className="text-gray-600 text-lg">450</p>
        </div>
        <div className="bg-white p-5 shadow-md shadow-orange-300 rounded-lg">
          <h2 className="text-xl font-bold">Total Orders</h2>
          <p className="text-gray-600 text-lg">230</p>
        </div>
        <div className="bg-white p-5 shadow-md shadow-orange-300 rounded-lg">
          <h2 className="text-xl font-bold">Total Users</h2>
          <p className="text-gray-600 text-lg">900</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
