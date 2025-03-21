
// import React, { useState, useEffect } from "react";
// import axios from "axios";

// const PendingVendors = ({ setApprovedVendors }) => {
//   const [pendingVendors, setPendingVendors] = useState([]);

//   // Fetch pending vendors from backend
//   useEffect(() => {
//     axios
//       .get("http://127.0.0.1:8000/api/pending-vendors/")
//       .then((response) => setPendingVendors(response.data))
//       .catch((error) => console.error("Error fetching vendors:", error));
//   }, []);

//   const approveVendor = (vendorId) => {
//     axios.post(`http://127.0.0.1:8000/api/approve-vendor/${vendorId}/`)
//       .then(response => {
//         alert(response.data.message);
//         setPendingVendors(pendingVendors.filter(vendor => vendor.id !== vendorId));
//         setApprovedVendors(prev => [...prev, response.data]);  // Move vendor to approved list
//       })
//       .catch(error => console.error("Error approving vendor:", error));
//   };

//   return (
//     <div>
//       <h2 className="text-2xl font-semibold mb-4">Pending Vendor Inquiries</h2>
//       <table className="w-full border-collapse border border-gray-300">
//         <thead>
//           <tr className="bg-gray-200">
//             <th className="border p-2">Vendor Name</th>
//             <th className="border p-2">Business Name</th>
//             <th className="border p-2">Email</th>
//             <th className="border p-2">Phone</th>
//             <th className="border p-2">Message</th>
//             <th className="border p-2">Action</th>
//           </tr>
//         </thead>
//         <tbody>
//           {pendingVendors.length > 0 ? (
//             pendingVendors.map((vendor) => (
//               <tr key={vendor.id}>
//                 <td className="border p-2">{vendor.name || "N/A"}</td>
//                 <td className="border p-2">{vendor.business_name}</td>
//                 <td className="border p-2">{vendor.email}</td>
//                 <td className="border p-2">{vendor.phone}</td>
//                 <td className="border p-2">{vendor.message}</td>
//                 <td className="border p-2 flex gap-2">
//                   <button
//                     onClick={() => approveVendor(vendor.id)}
//                     className="px-3 py-1 bg-green-500 text-white rounded"
//                   >
//                     Approve
//                   </button>
//                 </td>
//               </tr>
//             ))
//           ) : (
//             <tr>
//               <td colSpan="6" className="border p-2 text-center text-gray-500">
//                 No pending inquiries
//               </td>
//             </tr>
//           )}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default PendingVendors;











// import React, { useState, useEffect } from "react";
// import axios from "axios";

// const PendingVendors = ({ setApprovedVendors }) => {
//   const [pendingVendors, setPendingVendors] = useState([]);

//   useEffect(() => {
//     axios.get("http://127.0.0.1:8000/api/pending-vendors/")
//       .then(response => {
//         console.log("Fetched Data:", response.data);  // Debugging
//         setPendingVendors(response.data);
//       })
//       .catch(error => console.error("Error fetching vendors:", error));
//   }, []);

//   const approveVendor = (vendorId) => {
//     axios.post(`http://127.0.0.1:8000/api/approve-vendor/${vendorId}/`)
//       .then(response => {
//         alert(response.data.message);
//         setPendingVendors(prevVendors => prevVendors.filter(v => v.id !== vendorId));
//         setApprovedVendors(prev => [...prev, response.data]);
//       })
//       .catch(error => console.error("Error approving vendor:", error));
//   };

//   return (
//     <div>
//       <h2>Pending Vendor Inquiries</h2>
//       <table>
//         <thead>
//           <tr>
//             <th>Vendor Name</th>
//             <th>Business Name</th>
//             <th>Email</th>
//             <th>Phone</th>
//             <th>Action</th>
//           </tr>
//         </thead>
//         <tbody>
//           {pendingVendors.length > 0 ? (
//             pendingVendors.map((vendor) => (
//               <tr key={vendor.id}>
//                 <td>{vendor.user?.username || "N/A"}</td>
//                 <td>{vendor.business_name}</td>
//                 <td>{vendor.user?.email || "N/A"}</td>
//                 <td>{vendor.phone}</td>
//                 <td>
//                   <button onClick={() => approveVendor(vendor.id)}>Approve</button>
//                 </td>
//               </tr>
//             ))
//           ) : (
//             <tr>
//               <td colSpan="5">No Pending Vendors</td>
//             </tr>
//           )}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default PendingVendors;






















// import React, { useState, useEffect } from "react";
// import axios from "axios";

// const PendingVendors = ({ setApprovedVendors }) => {
//   const [pendingVendors, setPendingVendors] = useState([]);

//   // Fetch Pending Vendors from Backend
//   useEffect(() => {
//     axios
//       .get("http://127.0.0.1:8000/api/pending-vendors/")
//       .then((response) => setPendingVendors(response.data))
//       .catch((error) => console.error("Error fetching vendors:", error));
//   }, []);

//   // Approve Vendor & Move to Approved List
//   const approveVendor = (vendorId) => {
//     axios.post(`http://127.0.0.1:8000/api/approve-vendor/${vendorId}/`)
//       .then(response => {
//         alert(response.data.message);
//         setPendingVendors(pendingVendors.filter(vendor => vendor.id !== vendorId));
//         setApprovedVendors(prev => [...prev, pendingVendors.find(v => v.id === vendorId)]); 
//       })
//       .catch(error => console.error("Error approving vendor:", error));
//   };

//   return (
//     <div>
//       <h2 className="text-2xl font-semibold mb-4">Pending Vendor Inquiries</h2>
//       <table className="w-full border-collapse border border-gray-300">
//         <thead>
//           <tr className="bg-gray-200">
//             <th className="border p-2">Vendor Name</th>
//             <th className="border p-2">Business Name</th>
//             <th className="border p-2">Email</th>
//             <th className="border p-2">Phone</th>
//             <th className="border p-2">Action</th>
//           </tr>
//         </thead>
//         <tbody>
//           {pendingVendors.length > 0 ? (
//             pendingVendors.map((vendor) => (
//               <tr key={vendor.id}>
//                 <td className="border p-2">{vendor.user.username || "N/A"}</td>
//                 <td className="border p-2">{vendor.business_name}</td>
//                 <td className="border p-2">{vendor.user.email}</td>
//                 <td className="border p-2">{vendor.phone}</td>
//                 <td className="border p-2">
//                   <button
//                     onClick={() => approveVendor(vendor.id)}
//                     className="px-3 py-1 bg-green-500 text-white rounded"
//                   >
//                     Approve
//                   </button>
//                 </td>
//               </tr>
//             ))
//           ) : (
//             <tr>
//               <td colSpan="5" className="border p-2 text-center text-gray-500">
//                 No pending inquiries
//               </td>
//             </tr>
//           )}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default PendingVendors;













import React, { useState, useEffect } from "react";
import axios from "axios";

const PendingVendors = ({ setApprovedVendors }) => {
  const [pendingVendors, setPendingVendors] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // ✅ Fetch Pending Vendors from Backend
  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/api/vendors/pending/")
      .then((response) => {
        setPendingVendors(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching vendors:", error);
        setError("Failed to load pending vendors.");
        setLoading(false);
      });
  }, []);

  // ✅ Approve Vendor & Move to Approved List
  const approveVendor = (vendorId) => {
    const vendorToApprove = pendingVendors.find((v) => v.id === vendorId);

    if (!vendorToApprove) return; // Prevents errors if vendor is already removed

    axios
      .post(`http://127.0.0.1:8000/api/approve-vendor/${vendorId}/`)
      .then((response) => {
        alert(response.data.message);
        setPendingVendors((prev) => prev.filter((vendor) => vendor.id !== vendorId));
        setApprovedVendors((prev) => [...prev, vendorToApprove]); // ✅ Fix undefined vendor issue
      })
      .catch((error) => console.error("Error approving vendor:", error));
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <div className="max-w-5xl mx-auto bg-white shadow-lg rounded-lg p-6">
        <h2 className="text-2xl font-semibold mb-4">Pending Vendor Inquiries</h2>

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
              <th className="border p-2">Action</th>
            </tr>
          </thead>
          <tbody>
            {pendingVendors.length > 0 ? (
              pendingVendors.map((vendor) => (
                <tr key={vendor.id} className="text-center">
                  <td className="border p-2">{vendor.user?.username || "N/A"}</td>
                  <td className="border p-2">{vendor.business_name}</td>
                  <td className="border p-2">{vendor.user?.email || "N/A"}</td>
                  <td className="border p-2">{vendor.phone || "N/A"}</td>
                  <td className="border p-2">
                    <button
                      onClick={() => approveVendor(vendor.id)}
                      className="px-3 py-1 bg-green-500 text-white rounded hover:bg-green-600"
                    >
                      Approve
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              !loading && (
                <tr>
                  <td colSpan="5" className="border p-2 text-center text-gray-500">
                    No pending inquiries
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

export default PendingVendors;
