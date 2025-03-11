import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // ✅ Navigate to Approved Vendors

const PendingVendors = ({ setApprovedVendors }) => {
  const navigate = useNavigate();
  const [pendingVendors, setPendingVendors] = useState([
    {
      id: 1,
      name: "Example Vendor",
      businessName: "Example Business",
      email: "example@vendor.com",
      phone: "9876543210",
      message: "I am interested in selling organic products.",
    },
    {
      id: 2,
      name: "Aniket Tambe",
      businessName: "Signy",
      email: "aniket@gmail.com",
      phone: "8411988255",
      message: "I am interested in selling jewellery products.",
    }
  ]);

  // 📌 Approve vendor and move to Approved Vendors list
  const approveVendor = (vendorId) => {
    const vendorToApprove = pendingVendors.find(v => v.id === vendorId);
    if (!vendorToApprove) return;

    // ✅ Move vendor to Approved Vendors
    setApprovedVendors((prev) => [...prev, vendorToApprove]);

    // ✅ Remove from Pending Vendors
    setPendingVendors(pendingVendors.filter(v => v.id !== vendorId));

    alert(`Vendor "${vendorToApprove.name}" approved & moved to Approved Vendors!`);
  };

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">Pending Vendor Inquiries</h2>
      <table className="w-full border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-200">
            <th className="border p-2">Vendor Name</th>
            <th className="border p-2">Business Name</th>
            <th className="border p-2">Email</th>
            <th className="border p-2">Phone</th>
            <th className="border p-2">Message</th>
            <th className="border p-2">Action</th>
          </tr>
        </thead>
        <tbody>
          {pendingVendors.length > 0 ? (
            pendingVendors.map((vendor) => (
              <tr key={vendor.id}>
                <td className="border p-2">{vendor.name}</td>
                <td className="border p-2">{vendor.businessName}</td>
                <td className="border p-2">{vendor.email}</td>
                <td className="border p-2">{vendor.phone}</td>
                <td className="border p-2">{vendor.message}</td>
                <td className="border p-2 flex gap-2">
                  <button
                    onClick={() => approveVendor(vendor.id)}
                    className="px-3 py-1 bg-green-500 text-white rounded"
                  >
                    Approve
                  </button>
                  <button
                    onClick={() => setPendingVendors(pendingVendors.filter(v => v.id !== vendor.id))}
                    className="px-3 py-1 bg-red-500 text-white rounded"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="6" className="border p-2 text-center text-gray-500">
                No pending inquiries
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default PendingVendors;
