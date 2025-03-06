import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="w-64 bg-orange-500 text-white h-screen p-5">
      <h2 className="text-2xl font-bold mb-6">GBA Super Admin Panel</h2>
      <ul>
        <li className="mb-3">
          <Link to="/" className="block py-2 px-4 rounded hover:bg-gray-200 hover:text-black">Dashboard</Link>
        </li>
        <li className="mb-3">
          <Link to="/vendors" className="block py-2 px-4 rounded hover:bg-gray-200 hover:text-black">Vendors</Link>
        </li>
        <li className="mb-3">
          <Link to="/products" className="block py-2 px-4 rounded hover:bg-gray-200 hover:text-black">Products</Link>
        </li>
        <li className="mb-3">
          <Link to="/orders" className="block py-2 px-4 rounded hover:bg-gray-200 hover:text-black">Orders</Link>
        </li>
        <li>
          <Link to="/users" className="block py-2 px-4 rounded hover:bg-gray-200 hover:text-black">Users</Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
