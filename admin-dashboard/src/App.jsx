// import React, { useState } from "react";
// import { Routes, Route } from "react-router-dom";  // ❌ Remove BrowserRouter from here
// import Sidebar from "./components/Sidebar";
// import Dashboard from "./pages/Dashboard";
// import PendingVendors from "./pages/Vendor/PendingVendors";
// import ApprovedVendors from "./pages/Vendor/ApprovedVendors";
// import AllVendors from "./pages/Vendor/AllVendors";
// import VendorDetails from "./pages/Vendor/VendorDetails";
// import Products from "./pages/Products";
// import Orders from "./pages/Orders";
// import Users from "./pages/Users";

// const NotFound = () => (
//   <div className="flex justify-center items-center h-screen">
//     <h1 className="text-3xl text-red-500">404 - Page Not Found</h1>
//   </div>
// );

// const App = () => {

//   const [approvedVendors, setApprovedVendors] = useState([]); // ✅ Store Approved Vendors

//   return (
//     <div className="flex h-screen bg-gray-100">
//       <Sidebar />
//       <div className="flex-1 p-6 overflow-auto">
//         <Routes> {/* ✅ Only use Routes here */}
//           <Route path="/" element={<Dashboard />} />
//           {/* <Route path="/pending-vendors" element={<PendingVendors />} />
//           <Route path="/approved-vendors" element={<ApprovedVendors />} /> */}
//           <Route path="/pending-vendors" element={<PendingVendors setApprovedVendors={setApprovedVendors} />} />
//           <Route path="/approved-vendors" element={<ApprovedVendors approvedVendors={approvedVendors} />} />
//           <Route path="/all-vendors" element={<AllVendors />} />
//           <Route path="/vendor/:id" element={<VendorDetails vendors={registeredVendors} />} />
//           <Route path="/products" element={<Products />} />
//           <Route path="/orders" element={<Orders />} />
//           <Route path="/users" element={<Users />} />
//           <Route path="*" element={<NotFound />} />
//         </Routes>
//       </div>
//     </div>
//   );
// };

// export default App;




import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";  
import Sidebar from "./components/Sidebar";
import Dashboard from "./pages/Dashboard";
import PendingVendors from "./pages/Vendor/PendingVendors";
import ApprovedVendors from "./pages/Vendor/ApprovedVendors";
import AllVendors from "./pages/Vendor/AllVendors";
import VendorDetails from "./pages/Vendor/VendorDetails";
import Products from "./pages/Products";
import Orders from "./pages/Orders";
import Users from "./pages/Users";

const App = () => {
  const [approvedVendors, setApprovedVendors] = useState([]);
  const [registeredVendors, setRegisteredVendors] = useState([  // ✅ Vendors List
    {
      id: 101,
      name: "Vendor C",
      email: "vendorC@example.com",
      phone: "5555555555",
      businessName: "C Bakery",
      products: [
        { id: 201, name: "Chocolate Cake", category: "Bakery", price: "$15" },
        { id: 202, name: "Almonds", category: "Dry Fruits", price: "$10" }
      ]
    }
  ]);

  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar />
      <div className="flex-1 p-6 overflow-auto">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/pending-vendors" element={<PendingVendors setApprovedVendors={setApprovedVendors} />} />
          <Route path="/approved-vendors" element={<ApprovedVendors approvedVendors={approvedVendors} />} />
          <Route path="/all-vendors" element={<AllVendors />} />
          <Route path="/vendor/:id" element={<VendorDetails vendors={registeredVendors} />} />
          <Route path="/products" element={<Products />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/users" element={<Users />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
