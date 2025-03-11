// import React from "react";
// import { Link } from "react-router-dom";

// const Sidebar = () => {
//   return (
//     <div className="w-64 h-screen bg-orange-600 text-white p-5">
//       <h2 className="text-2xl font-bold mb-5">Super Admin Dashboard</h2>
//       <ul className="space-y-3">
//         <li><Link to="/" className="block p-2 hover:bg-orange-400 rounded">Dashboard</Link></li>
//         <li><Link to="/vendor" className="block p-2 hover:bg-orange-400 rounded">Vendors</Link></li>
//         <li><Link to="/products" className="block p-2 hover:bg-orange-400 rounded">Products</Link></li>
//         <li><Link to="/orders" className="block p-2 hover:bg-orange-400 rounded">Orders</Link></li>
//         <li><Link to="/users" className="block p-2 hover:bg-orange-400 rounded">Users</Link></li>
//       </ul>
//     </div>
//   );
// };

// export default Sidebar;




import React, { useState } from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const [isVendorOpen, setIsVendorOpen] = useState(false);

  return (
    <div className="w-64 bg-orange-600 text-white min-h-screen p-4">
      <h2 className="text-2xl font-bold mb-6">Super Admin Dashboard</h2>
      <nav>
        <ul className="space-y-3">
          <li>
            <Link to="/" className="block py-2 px-4 hover:bg-orange-400 rounded">
              Dashboard
            </Link>
          </li>

          {/* Vendors - Expandable Section */}
          <li>
            <button
              onClick={() => setIsVendorOpen(!isVendorOpen)}
              className="w-full text-left py-2 px-4 hover:bg-orange-400 rounded flex justify-between"
            >
              Vendors
              <span>{isVendorOpen ? "▲" : "▼"}</span>
            </button>
            {isVendorOpen && (
              <ul className="ml-4 mt-2 space-y-2">
                <li>
                  <Link to="/pending-vendors" className="block py-2 px-4 hover:bg-orange-400 rounded">
                    1) Pending Vendor Inquiries
                  </Link>
                </li>
                <li>
                  <Link to="/approved-vendors" className="block py-2 px-4 hover:bg-orange-400 rounded">
                    2) Approved Vendors
                  </Link>
                </li>
                <li>
                  <Link to="/all-vendors" className="block py-2 px-4 hover:bg-orange-400 rounded">
                    3) All Vendors
                  </Link>
                </li>
              </ul>
            )}
          </li>

          <li>
            <Link to="/products" className="block py-2 px-4 hover:bg-orange-400 rounded">
              Products
            </Link>
          </li>
          <li>
            <Link to="/orders" className="block py-2 px-4 hover:bg-orange-400 rounded">
              Orders
            </Link>
          </li>
          <li>
            <Link to="/users" className="block py-2 px-4 hover:bg-orange-400 rounded">
              Users
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};  

export default Sidebar;
