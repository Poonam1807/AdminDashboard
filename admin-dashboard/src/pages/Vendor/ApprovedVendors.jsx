// import React from "react";

// const ApprovedVendors = ({ approvedVendors = [] }) => {
//   return (
//     <div>
//       <h2 className="text-2xl font-semibold mb-4">Approved Vendors</h2>
//       <table className="w-full border-collapse border border-gray-300">
//         <thead>
//           <tr className="bg-gray-200">
//             <th className="border p-2">Vendor Name</th>
//             <th className="border p-2">Business Name</th>
//             <th className="border p-2">Email</th>
//             {/* <th className="border p-2">Phone</th> */}
//             <th className="border p-2">Message</th>
//           </tr>
//         </thead>
//         <tbody>
//           {approvedVendors.length > 0 ? (
//             approvedVendors.map((vendor) => (
//               <tr key={vendor.id}>
//                 <td className="border p-2">{vendor.name}</td>
//                 <td className="border p-2">{vendor.businessName}</td>
//                 <td className="border p-2">{vendor.email}</td>
//                 <td className="border p-2">{vendor.phone}</td>
//                 <td className="border p-2">{vendor.message}</td>
//               </tr>
//             ))
//           ) : (
//             <tr>
//               <td colSpan="5" className="border p-2 text-center text-gray-500">
//                 No approved vendors
//               </td>
//             </tr>
//           )}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default ApprovedVendors;














// import React, { useState, useEffect } from "react";
// import axios from "axios";

// const ApprovedVendors = () => {
//   const [approvedVendors, setApprovedVendors] = useState([]);

//   // Fetch Approved Vendors from Backend
//   useEffect(() => {
//     axios
//       .get("http://127.0.0.1:8000/api/approved-vendors/")
//       .then((response) => setApprovedVendors(response.data))
//       .catch((error) => console.error("Error fetching vendors:", error));
//   }, []);

//   return (
//     <div>
//       <h2 className="text-2xl font-semibold mb-4">Approved Vendors</h2>
//       <table className="w-full border-collapse border border-gray-300">
//         <thead>
//           <tr className="bg-gray-200">
//             <th className="border p-2">Vendor Name</th>
//             <th className="border p-2">Business Name</th>
//             <th className="border p-2">Email</th>
//             <th className="border p-2">Phone</th>
//           </tr>
//         </thead>
//         <tbody>
//           {approvedVendors.length > 0 ? (
//             approvedVendors.map((vendor) => (
//               <tr key={vendor.id}>
//                 <td className="border p-2">{vendor.user.username || "N/A"}</td>
//                 <td className="border p-2">{vendor.business_name}</td>
//                 <td className="border p-2">{vendor.user.email}</td>
//                 <td className="border p-2">{vendor.phone}</td>
//               </tr>
//             ))
//           ) : (
//             <tr>
//               <td colSpan="4" className="border p-2 text-center text-gray-500">
//                 No approved vendors yet
//               </td>
//             </tr>
//           )}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default ApprovedVendors;
























import React, { useState, useEffect } from "react";
import axios from "axios";

const ApprovedVendors = () => {
  const [approvedVendors, setApprovedVendors] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // ✅ Fetch Approved Vendors from Backend
  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/api/approved-vendors/")
      .then((response) => {
        setApprovedVendors(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching vendors:", error);
        setError("Failed to load approved vendors.");
        setLoading(false);
      });
  }, []);

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <div className="max-w-5xl mx-auto bg-white shadow-lg rounded-lg p-6">
        <h2 className="text-2xl font-semibold mb-4">Approved Vendors</h2>

        {/* ✅ Show loading state */}
        {loading && <p className="text-center text-gray-500">Loading...</p>}

        {/* ❌ Show error message if API fails */}
        {error && <p className="text-red-500 text-center">{error}</p>}

        {/* ✅ Vendors Table */}
        <table className="w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-200">
              <th className="border p-2">Vendor Name</th>
              <th className="border p-2">Business Name</th>
              <th className="border p-2">Email</th>
              <th className="border p-2">Phone</th>
            </tr>
          </thead>
          <tbody>
            {approvedVendors.length > 0 ? (
              approvedVendors.map((vendor) => (
                <tr key={vendor.id} className="text-center">
                  <td className="border p-2">{vendor.user?.username || "N/A"}</td>
                  <td className="border p-2">{vendor.business_name}</td>
                  <td className="border p-2">{vendor.user?.email || "N/A"}</td>
                  <td className="border p-2">{vendor.phone || "N/A"}</td>
                </tr>
              ))
            ) : (
              !loading && (
                <tr>
                  <td colSpan="4" className="border p-2 text-center text-gray-500">
                    No approved vendors yet
                  </td>
                </tr>
              )
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ApprovedVendors;
