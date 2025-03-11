import React from "react";

const ApprovedVendors = ({ approvedVendors = [] }) => {
  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">Approved Vendors</h2>
      <table className="w-full border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-200">
            <th className="border p-2">Vendor Name</th>
            <th className="border p-2">Business Name</th>
            <th className="border p-2">Email</th>
            <th className="border p-2">Phone</th>
            <th className="border p-2">Message</th>
          </tr>
        </thead>
        <tbody>
          {approvedVendors.length > 0 ? (
            approvedVendors.map((vendor) => (
              <tr key={vendor.id}>
                <td className="border p-2">{vendor.name}</td>
                <td className="border p-2">{vendor.businessName}</td>
                <td className="border p-2">{vendor.email}</td>
                <td className="border p-2">{vendor.phone}</td>
                <td className="border p-2">{vendor.message}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="5" className="border p-2 text-center text-gray-500">
                No approved vendors
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default ApprovedVendors;
