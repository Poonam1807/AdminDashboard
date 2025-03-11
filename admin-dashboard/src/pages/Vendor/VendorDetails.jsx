import React from "react";
import { useParams } from "react-router-dom";

const VendorDetails = ({ vendors }) => {
  const { id } = useParams();  // ✅ Get the vendor ID from the URL
  const vendor = vendors?.find(v => v.id.toString() === id);  // ✅ Find the vendor by ID

  if (!vendor) {
    return <h2 className="text-red-500 text-center text-2xl mt-10">❌ Vendor not found!</h2>;
  }

  return (
    <div className="p-6 bg-white shadow-lg rounded-lg">
      <h1 className="text-3xl font-bold">{vendor.name}'s Details</h1>
      <p><strong>Email:</strong> {vendor.email}</p>
      <p><strong>Phone:</strong> {vendor.phone}</p>
      <p><strong>Business Name:</strong> {vendor.businessName}</p>

      <h2 className="text-xl font-semibold mt-4">Products</h2>
      {vendor.products.length > 0 ? (
        <ul>
          {vendor.products.map(product => (
            <li key={product.id} className="border p-2 my-2">
              <strong>{product.name}</strong> - {product.category} - {product.price}
            </li>
          ))}
        </ul>
      ) : (
        <p>No products available</p>
      )}
    </div>
  );
};

export default VendorDetails;
