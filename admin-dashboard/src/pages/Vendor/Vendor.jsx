import React, { useState } from "react";
import PendingVendors from "./PendingVendors";  // Pending Inquiries Component
import ApprovedVendors from "./ApprovedVendors";  // Approved Vendors Component
// import VendorRegistration from "./VendorRegistration";  // Registration Form Component
import AllVendors from "./AllVendors";  // All Vendors Component

const Vendor = () => {
  const [activeTab, setActiveTab] = useState("inquiry"); // Default tab: Pending Inquiries

  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="max-w-6xl mx-auto bg-white shadow-lg rounded-lg p-6">
        <h1 className="text-3xl font-bold text-center mb-6">Vendor Management</h1>

        {/* 📌 4 Main Buttons for Tabs */}
        <div className="flex justify-center gap-6 mb-6">
          <button onClick={() => setActiveTab("inquiry")} className={`px-6 py-2 rounded-lg ${activeTab === "inquiry" ? "bg-yellow-600 text-white" : "bg-gray-300"}`}>
            Pending Vendor Inquiries
          </button>
          <button onClick={() => setActiveTab("approved")} className={`px-6 py-2 rounded-lg ${activeTab === "approved" ? "bg-green-600 text-white" : "bg-gray-300"}`}>
            Approved Vendors
          </button>
          {/* <button onClick={() => setActiveTab("register")} className={`px-6 py-2 rounded-lg ${activeTab === "register" ? "bg-purple-600 text-white" : "bg-gray-300"}`}>
            Vendor Registration
          </button> */}
          <button onClick={() => setActiveTab("allVendors")} className={`px-6 py-2 rounded-lg ${activeTab === "allVendors" ? "bg-blue-600 text-white" : "bg-gray-300"}`}>
            All Vendors
          </button>
        </div>

        {/* 📌 Dynamic Component Rendering Below */}
        <div className="bg-gray-100 p-6 rounded-lg">
          {activeTab === "inquiry" && <PendingVendors />}
          {activeTab === "approved" && <ApprovedVendors />}
          {/* {activeTab === "register" && <VendorRegistration />} */}
          {activeTab === "allVendors" && <AllVendors />}
        </div>
      </div>
    </div>
  );
};

export default Vendor;
