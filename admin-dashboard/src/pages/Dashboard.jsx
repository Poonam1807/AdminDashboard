import React from "react";

const Dashboard = () => {
  // Sample Data for Stats
  const stats = [
    { name: "Total Vendors", count: 25, color: "bg-blue-500" },
    { name: "Total Products", count: 320, color: "bg-green-500" },
    { name: "Total Orders", count: 1200, color: "bg-yellow-500" },
    { name: "Total Users", count: 500, color: "bg-purple-500" },
  ];

  // Sample Recent Orders
  const recentOrders = [
    { id: "#001", vendor: "Vendor A", amount: "$150", status: "Completed" },
    { id: "#002", vendor: "Vendor B", amount: "$200", status: "Pending" },
    { id: "#003", vendor: "Vendor C", amount: "$50", status: "Cancelled" },
    { id: "#004", vendor: "Vendor D", amount: "$120", status: "Completed" },
  ];

  // Sample Latest Vendors
  const latestVendors = [
    { name: "Vendor A", email: "vendorA@example.com" },
    { name: "Vendor B", email: "vendorB@example.com" },
    { name: "Vendor C", email: "vendorC@example.com" },
  ];

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-6">Admin Dashboard</h1>

      {/* Statistics Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <div key={index} className={`p-5 rounded-lg shadow-md text-white ${stat.color}`}>
            <h2 className="text-xl font-bold">{stat.name}</h2>
            <p className="text-2xl">{stat.count}</p>
          </div>
        ))}
      </div>

      {/* Recent Orders & Latest Vendors */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
        {/* Recent Orders */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-4">Recent Orders</h2>
          <table className="w-full border-collapse border border-gray-300">
            <thead>
              <tr className="bg-gray-200">
                <th className="border p-2">Order ID</th>
                <th className="border p-2">Vendor</th>
                <th className="border p-2">Amount</th>
                <th className="border p-2">Status</th>
              </tr>
            </thead>
            <tbody>
              {recentOrders.map((order) => (
                <tr key={order.id} className="text-center">
                  <td className="border p-2">{order.id}</td>
                  <td className="border p-2">{order.vendor}</td>
                  <td className="border p-2">{order.amount}</td>
                  <td className="border p-2 font-bold text-gray-700">{order.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Latest Vendors */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-4">Latest Vendors</h2>
          <ul className="divide-y divide-gray-300">
            {latestVendors.map((vendor, index) => (
              <li key={index} className="py-3">
                <p className="text-lg font-semibold">{vendor.name}</p>
                <p className="text-gray-600">{vendor.email}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;