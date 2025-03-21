// import React from "react";
// import { useParams } from "react-router-dom";

// const VendorDetails = ({ vendors }) => {
//   const { id } = useParams();  // ✅ Get the vendor ID from the URL
//   const vendor = vendors?.find(v => v.id.toString() === id);  // ✅ Find the vendor by ID

//   if (!vendor) {
//     return <h2 className="text-red-500 text-center text-2xl mt-10">❌ Vendor not found!</h2>;
//   }

//   return (
//     <div className="p-6 bg-white shadow-lg rounded-lg">
//       <h1 className="text-3xl font-bold">{vendor.name}'s Details</h1>
//       <p><strong>Email:</strong> {vendor.email}</p>
//       <p><strong>Phone:</strong> {vendor.phone}</p>
//       <p><strong>Business Name:</strong> {vendor.businessName}</p>

//       <h2 className="text-xl font-semibold mt-4">Products</h2>
//       {vendor.products.length > 0 ? (
//         <ul>
//           {vendor.products.map(product => (
//             <li key={product.id} className="border p-2 my-2">
//               <strong>{product.name}</strong> - {product.category} - {product.price}
//             </li>
//           ))}
//         </ul>
//       ) : (
//         <p>No products available</p>
//       )}
//     </div>
//   );
// };

// export default VendorDetails;














import React from "react";
import { useParams, Link } from "react-router-dom";

const VendorDetails = ({ vendors }) => {
  const { id } = useParams(); // ✅ Get vendor ID from URL
  const vendor = vendors?.find((v) => v.id.toString() === id); // ✅ Find vendor safely

  if (!vendor) {
    return (
      <div className="text-center mt-10">
        <h2 className="text-red-500 text-2xl">❌ Vendor not found!</h2>
        <Link to="/vendors" className="text-blue-500 underline mt-4 block">
          🔙 Go Back to Vendor List
        </Link>
      </div>
    );
  }

  return (
    <div className="p-6 bg-white shadow-lg rounded-lg max-w-3xl mx-auto mt-6">
      <h1 className="text-3xl font-bold text-gray-800">{vendor.name}'s Details</h1>
      <div className="border-b my-4"></div>
      
      <p className="text-lg"><strong>Email:</strong> {vendor.email}</p>
      <p className="text-lg"><strong>Phone:</strong> {vendor.phone}</p>
      <p className="text-lg"><strong>Business Name:</strong> {vendor.businessName}</p>

      <h2 className="text-xl font-semibold mt-6">Products</h2>
      {vendor.products?.length > 0 ? (
        <ul className="mt-2">
          {vendor.products.map((product) => (
            <li key={product.id} className="border p-3 my-2 rounded-lg bg-gray-100">
              <strong>{product.name}</strong> - {product.category} - 💲{product.price}
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-gray-600">No products available.</p>
      )}

      <Link to="/vendors" className="text-blue-500 underline mt-6 block">
        🔙 Go Back to Vendor List
      </Link>
    </div>
  );
};

export default VendorDetails;
