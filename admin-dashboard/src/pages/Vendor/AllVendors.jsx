import React, { useState } from "react";
import { Link } from "react-router-dom";

const AllVendors = () => {
  // Sample registered vendors
  const [vendors] = useState([
    { id: 1, name: "Vendor A", email: "vendorA@example.com", phone: "9876543210" },
    { id: 2, name: "Vendor B", email: "vendorB@example.com", phone: "8411988255" },
    { id: 3, name: "Vendor C", email: "vendorC@example.com", phone: "9123456789" },
    // Add more vendors here...
  ]);

  const [currentPage, setCurrentPage] = useState(1);
  const vendorsPerPage = 15;

  // Pagination Logic
  const indexOfLastVendor = currentPage * vendorsPerPage;
  const indexOfFirstVendor = indexOfLastVendor - vendorsPerPage;
  const currentVendors = vendors.slice(indexOfFirstVendor, indexOfLastVendor);

  const nextPage = () => {
    if (currentPage < Math.ceil(vendors.length / vendorsPerPage)) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <div className="max-w-5xl mx-auto bg-white shadow-lg rounded-lg p-6">
        <h1 className="text-3xl font-bold text-center mb-6">All Vendors</h1>

        {/* Vendors Table */}
        <table className="w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-200">
              <th className="border p-2">Vendor Name</th>
              <th className="border p-2">Email</th>
              <th className="border p-2">Phone</th>
            </tr>
          </thead>
          <tbody>
            {currentVendors.map((vendor) => (
              <tr key={vendor.id} className="text-center">
                {/* <td className="border p-2">
                  <Link to={`/vendor-details/${vendor.id}`} className="text-blue-600 underline">
                    {vendor.name}
                  </Link>
                </td> */}
                <td className="border p-2">
                  <Link to={`/vendor/${vendor.id}`} className="text-blue-600 underline">
                    {vendor.name}
                  </Link>
                </td>
                <td className="border p-2">{vendor.email}</td>
                <td className="border p-2">{vendor.phone}</td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Pagination Controls */}
        <div className="flex justify-between mt-4">
          <button onClick={prevPage} className="px-4 py-2 bg-gray-300 rounded disabled:opacity-50" disabled={currentPage === 1}>
            Previous
          </button>
          <span className="font-semibold">{currentPage}</span>
          <button onClick={nextPage} className="px-4 py-2 bg-gray-300 rounded disabled:opacity-50" disabled={currentPage === Math.ceil(vendors.length / vendorsPerPage)}>
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default AllVendors;
