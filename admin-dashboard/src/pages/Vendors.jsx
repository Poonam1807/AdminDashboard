// import React from "react";

// const Vendors = () => {
//   return (
//     <div>
//       <h1 className="text-3xl font-semibold mb-4">Vendors</h1>
//       <p>List of all vendors...</p>
//     </div>
//   );
// };

// export default Vendors;

import React, { useState } from "react";

const Vendor = () => {
  const [activeTab, setActiveTab] = useState("view"); // State to switch between "view" and "add"
  const [vendors, setVendors] = useState([
    { id: 1, name: "Vendor 1", email: "vendor1@example.com", status: "enabled" },
    { id: 2, name: "Vendor 2", email: "vendor2@example.com", status: "disabled" },
  ]);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    document: null,
  });

  // Toggle Enable/Disable Vendor
  const toggleStatus = (id) => {
    setVendors((prevVendors) =>
      prevVendors.map((vendor) =>
        vendor.id === id
          ? { ...vendor, status: vendor.status === "enabled" ? "disabled" : "enabled" }
          : vendor
      )
    );
  };

  // Handle Form Input Change
  const handleChange = (e) => {
    if (e.target.name === "document") {
      setFormData({ ...formData, document: e.target.files[0] });
    } else {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    }
  };

  // Handle Form Submission
  const handleSubmit = (e) => {
    e.preventDefault();
    const newVendor = { ...formData, id: vendors.length + 1, status: "enabled" };
    setVendors([...vendors, newVendor]); // Add new vendor
    alert("Vendor Added Successfully!");
    setActiveTab("view"); // Switch to view mode after adding vendor
  };

  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <h1 className="text-3xl font-semibold mb-4">Vendor Management</h1>

      {/* Tabs for Switching Between View and Add Vendor */}
      <div className="flex gap-4 mb-6">
        <button
          onClick={() => setActiveTab("view")}
          className={`px-4 py-2 rounded-lg ${
            activeTab === "view" ? "bg-blue-600 text-white" : "bg-gray-200"
          }`}
        >
          View Vendors
        </button>
        <button
          onClick={() => setActiveTab("add")}
          className={`px-4 py-2 rounded-lg ${
            activeTab === "add" ? "bg-green-600 text-white" : "bg-gray-200"
          }`}
        >
          Add Vendor
        </button>
      </div>

      {/* View Vendors Section */}
      {activeTab === "view" && (
        <div>
          <h2 className="text-2xl font-semibold mb-4">Vendor List</h2>
          <table className="w-full border-collapse border border-gray-300">
            <thead>
              <tr className="bg-gray-200">
                <th className="border p-2">ID</th>
                <th className="border p-2">Name</th>
                <th className="border p-2">Email</th>
                <th className="border p-2">Status</th>
                <th className="border p-2">Actions</th>
              </tr>
            </thead>
            <tbody>
              {vendors.map((vendor) => (
                <tr key={vendor.id} className="text-center">
                  <td className="border p-2">{vendor.id}</td>
                  <td className="border p-2">{vendor.name}</td>
                  <td className="border p-2">{vendor.email}</td>
                  <td className="border p-2">{vendor.status}</td>
                  <td className="border p-2">
                    <button className="px-3 py-1 bg-yellow-500 text-white rounded mr-2">
                      Edit
                    </button>
                    <button
                      onClick={() => toggleStatus(vendor.id)}
                      className={`px-3 py-1 ${
                        vendor.status === "enabled" ? "bg-red-600" : "bg-green-600"
                      } text-white rounded`}
                    >
                      {vendor.status === "enabled" ? "Disable" : "Enable"}
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* Add Vendor Section */}
      {activeTab === "add" && (
        <div>
          <h2 className="text-2xl font-semibold mb-4">Add Vendor</h2>
          <form onSubmit={handleSubmit} className="grid gap-4">
            <input
              type="text"
              name="name"
              placeholder="Vendor Name"
              className="p-2 border rounded"
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Vendor Email"
              className="p-2 border rounded"
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="phone"
              placeholder="Phone Number"
              className="p-2 border rounded"
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="address"
              placeholder="Address"
              className="p-2 border rounded"
              onChange={handleChange}
              required
            />
            <input
              type="file"
              name="document"
              className="p-2 border rounded"
              onChange={handleChange}
              required
            />
            <button
              type="submit"
              className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
            >
              Add Vendor
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default Vendor;










// import React, { useState } from "react";

// const Vendor = () => {
//   const [activeTab, setActiveTab] = useState("view"); // "view", "add", "products"
//   const [selectedVendor, setSelectedVendor] = useState(null);
//   const [vendors, setVendors] = useState([
//     { id: 1, name: "Vendor 1", email: "vendor1@example.com", status: "enabled", products: ["Laptop", "Phone", "Headphones"] },
//     { id: 2, name: "Vendor 2", email: "vendor2@example.com", status: "disabled", products: ["Shoes", "T-shirts", "Bags"] },
//   ]);

//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     address: "",
//     document: null,
//   });

//   // Toggle Enable/Disable Vendor
//   const toggleStatus = (id) => {
//     setVendors((prevVendors) =>
//       prevVendors.map((vendor) =>
//         vendor.id === id
//           ? { ...vendor, status: vendor.status === "enabled" ? "disabled" : "enabled" }
//           : vendor
//       )
//     );
//   };

//   // Handle Form Input Change
//   const handleChange = (e) => {
//     if (e.target.name === "document") {
//       setFormData({ ...formData, document: e.target.files[0] });
//     } else {
//       setFormData({ ...formData, [e.target.name]: e.target.value });
//     }
//   };

//   // Handle Form Submission
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const newVendor = { ...formData, id: vendors.length + 1, status: "enabled", products: [] };
//     setVendors([...vendors, newVendor]);
//     alert("Vendor Added Successfully!");
//     setActiveTab("view");
//   };

//   return (
//     <div className="p-6 bg-white rounded-lg shadow-md">
//       <h1 className="text-3xl font-semibold mb-4">Vendor Management</h1>

//       {/* Tabs for Switching Between View and Add Vendor */}
//       <div className="flex gap-4 mb-6">
//         <button
//           onClick={() => setActiveTab("view")}
//           className={`px-4 py-2 rounded-lg ${activeTab === "view" ? "bg-blue-600 text-white" : "bg-gray-200"}`}
//         >
//           View Vendors
//         </button>
//         <button
//           onClick={() => setActiveTab("add")}
//           className={`px-4 py-2 rounded-lg ${activeTab === "add" ? "bg-green-600 text-white" : "bg-gray-200"}`}
//         >
//           Add Vendor
//         </button>
//       </div>

//       {/* View Vendors Section */}
//       {activeTab === "view" && (
//         <div>
//           <h2 className="text-2xl font-semibold mb-4">Vendor List</h2>
//           <table className="w-full border-collapse border border-gray-300">
//             <thead>
//               <tr className="bg-gray-200">
//                 <th className="border p-2">ID</th>
//                 <th className="border p-2">Name</th>
//                 <th className="border p-2">Email</th>
//                 <th className="border p-2">Status</th>
//                 <th className="border p-2">Actions</th>
//               </tr>
//             </thead>
//             <tbody>
//               {vendors.map((vendor) => (
//                 <tr key={vendor.id} className="text-center">
//                   <td className="border p-2">{vendor.id}</td>
//                   <td className="border p-2">{vendor.name}</td>
//                   <td className="border p-2">{vendor.email}</td>
//                   <td className="border p-2">{vendor.status}</td>
//                   <td className="border p-2">
//                     <button onClick={() => setActiveTab("products") || setSelectedVendor(vendor)} className="px-3 py-1 bg-blue-500 text-white rounded mr-2">
//                       View Products
//                     </button>
//                     <button onClick={() => toggleStatus(vendor.id)} className={`px-3 py-1 ${vendor.status === "enabled" ? "bg-red-600" : "bg-green-600"} text-white rounded`}>
//                       {vendor.status === "enabled" ? "Disable" : "Enable"}
//                     </button>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       )}

//       {/* View Vendor Products Section */}
//       {activeTab === "products" && selectedVendor && (
//         <div>
//           <h2 className="text-2xl font-semibold mb-4">Products Sold by {selectedVendor.name}</h2>
//           <ul className="list-disc pl-6">
//             {selectedVendor.products.length > 0 ? (
//               selectedVendor.products.map((product, index) => (
//                 <li key={index} className="text-lg">{product}</li>
//               ))
//             ) : (
//               <li className="text-red-500">No products listed by this vendor.</li>
//             )}
//           </ul>
//           <button onClick={() => setActiveTab("view")} className="mt-4 px-4 py-2 bg-gray-600 text-white rounded-lg">
//             Back to Vendors
//           </button>
//         </div>
//       )}

//       {/* Add Vendor Section */}
//       {activeTab === "add" && (
//         <div>
//           <h2 className="text-2xl font-semibold mb-4">Add Vendor</h2>
//           <form onSubmit={handleSubmit} className="grid gap-4">
//             <input type="text" name="name" placeholder="Vendor Name" className="p-2 border rounded" onChange={handleChange} required />
//             <input type="email" name="email" placeholder="Vendor Email" className="p-2 border rounded" onChange={handleChange} required />
//             <input type="text" name="phone" placeholder="Phone Number" className="p-2 border rounded" onChange={handleChange} required />
//             <input type="text" name="address" placeholder="Address" className="p-2 border rounded" onChange={handleChange} required />
//             <input type="file" name="document" className="p-2 border rounded" onChange={handleChange} required />
//             <button type="submit" className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700">
//               Add Vendor
//             </button>
//           </form>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Vendor;







// import React, { useState } from "react";

// const Vendor = () => {
//   const [activeTab, setActiveTab] = useState("view");
//   const [selectedVendor, setSelectedVendor] = useState(null);

//   const [vendors, setVendors] = useState([
//     {
//       id: 1,
//       name: "Vendor A",
//       email: "vendorA@example.com",
//       status: "enabled",
//       products: [
//         { id: 101, category: "Bakery", name: "Chocolate Cake", image: "https://via.placeholder.com/100", price: "$15", enabled: true },
//         { id: 102, category: "Dry Fruits", name: "Almonds", image: "https://via.placeholder.com/100", price: "$10", enabled: false },
//       ],
//       users: [
//         { id: 1, name: "John Doe", email: "john@example.com", purchases: ["Chocolate Cake"] },
//       ],
//     },
//   ]);

//   const [newVendor, setNewVendor] = useState({
//     name: "",
//     email: "",
//     document: null,
//   });

//   // Toggle vendor enable/disable
//   const toggleVendorStatus = (id) => {
//     setVendors((prevVendors) =>
//       prevVendors.map((vendor) =>
//         vendor.id === id
//           ? { ...vendor, status: vendor.status === "enabled" ? "disabled" : "enabled" }
//           : vendor
//       )
//     );
//   };

//   // Toggle product enable/disable dynamically
//   const toggleProductStatus = (vendorId, productId) => {
//     setVendors((prevVendors) =>
//       prevVendors.map((vendor) =>
//         vendor.id === vendorId
//           ? {
//               ...vendor,
//               products: vendor.products.map((product) =>
//                 product.id === productId ? { ...product, enabled: !product.enabled } : product
//               ),
//             }
//           : vendor
//       )
//     );
//   };

//     // Add a new product
//     const handleAddProduct = (e) => {
//         e.preventDefault();
//         if (!selectedVendor) return;
//         setVendors((prev) => prev.map((vendor) =>
//           vendor.id === selectedVendor.id ? {
//             ...vendor,
//             products: [...vendor.products, { id: vendor.products.length + 1, name: newProduct.name, category: newProduct.category, price: newProduct.price, image: newProduct.image || "https://via.placeholder.com/100", enabled: true }],
//           } : vendor
//         ));
//         setNewProduct({ name: "", category: "", price: "", image: "" });
//       };
    
//       return (
//         <div className="p-6 bg-white rounded-lg shadow-md">
//           <h1 className="text-3xl font-semibold mb-4">Vendor Management</h1>
//           <div className="flex gap-4 mb-6">
//             <button onClick={() => setActiveTab("view")} className={`px-4 py-2 rounded-lg ${activeTab === "view" ? "bg-blue-600 text-white" : "bg-gray-200"}`}>View Vendors</button>
//             <button onClick={() => setActiveTab("add")} className={`px-4 py-2 rounded-lg ${activeTab === "add" ? "bg-green-600 text-white" : "bg-gray-200"}`}>Add Vendor</button>
//           </div>
    
//           {activeTab === "view" && (
//             <div>
//               <h2 className="text-2xl font-semibold mb-4">Vendor List</h2>
//               {vendors.map((vendor) => (
//                 <div key={vendor.id} className="border p-4 mb-4 rounded-lg">
//                   <p className="font-semibold">{vendor.name} ({vendor.email})</p>
//                   <button onClick={() => toggleVendorStatus(vendor.id)} className={`px-3 py-1 ${vendor.status === "enabled" ? "bg-red-600" : "bg-green-600"} text-white rounded`}>{vendor.status === "enabled" ? "Disable" : "Enable"}</button>
//                   <button onClick={() => { setActiveTab("products"); setSelectedVendor(vendor); }} className="ml-4 px-3 py-1 bg-blue-500 text-white rounded">View Products</button>
//                 </div>
//               ))}
//             </div>
//           )}
    
//           {activeTab === "add" && (
//             <form onSubmit={handleAddVendor} className="space-y-4">
//               <h2 className="text-2xl font-semibold">Add Vendor</h2>
//               <input type="text" placeholder="Vendor Name" className="p-2 border w-full" onChange={(e) => setNewVendor({ ...newVendor, name: e.target.value })} required />
//               <input type="email" placeholder="Email" className="p-2 border w-full" onChange={(e) => setNewVendor({ ...newVendor, email: e.target.value })} required />
//               <button type="submit" className="px-4 py-2 bg-green-500 text-white rounded-lg">Add Vendor</button>
//             </form>
//           )}
    
//           {activeTab === "products" && selectedVendor && (
//             <div>
//               <h2 className="text-2xl font-semibold">Products by {selectedVendor.name}</h2>
//               <div className="grid grid-cols-3 gap-4">
//                 {selectedVendor.products.map((product) => (
//                   <div key={product.id} className="border p-4 rounded-lg shadow-lg">
//                     <img src={product.image} alt={product.name} className="w-full h-24 object-cover rounded-lg" />
//                     <h3 className="text-lg font-semibold">{product.name}</h3>
//                     <label className="flex items-center gap-2">
//                       <input type="checkbox" checked={product.enabled} onChange={() => toggleProductStatus(selectedVendor.id, product.id)} /> Show Product
//                     </label>
//                     <button onClick={() => deleteProduct(selectedVendor.id, product.id)} className="px-2 py-1 bg-red-500 text-white rounded">Delete</button>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           )}
//         </div>
//       );
        

//   // Delete product
//   const deleteProduct = (vendorId, productId) => {
//     setVendors((prev) => prev.map((vendor) =>
//       vendor.id === vendorId ? {
//         ...vendor,
//         products: vendor.products.filter((product) => product.id !== productId),
//       } : vendor
//     ));
//   };

//   // Handle adding a new vendor
//   const handleAddVendor = (e) => {
//     e.preventDefault();
//     const newVendorData = {
//       id: vendors.length + 1,
//       name: newVendor.name,
//       email: newVendor.email,
//       status: "enabled",
//       products: [],
//       users: [],
//     };

//     setVendors([...vendors, newVendorData]);
//     setNewVendor({ name: "", email: "", document: null });
//     setActiveTab("view");
//   };

//   return (
//     <div className="p-6 bg-white rounded-lg shadow-md">
//       <h1 className="text-3xl font-semibold mb-4">Vendor Management</h1>

//       {/* Navigation Tabs */}
//       <div className="flex gap-4 mb-6">
//         <button
//           onClick={() => setActiveTab("view")}
//           className={`px-4 py-2 rounded-lg ${activeTab === "view" ? "bg-blue-600 text-white" : "bg-gray-200"}`}
//         >
//           View Vendors
//         </button>
//         <button
//           onClick={() => setActiveTab("add")}
//           className={`px-4 py-2 rounded-lg ${activeTab === "add" ? "bg-green-600 text-white" : "bg-gray-200"}`}
//         >
//           Add Vendor
//         </button>
//       </div>

//       {/* View Vendors Section */}
//       {activeTab === "view" && (
//         <div>
//           <h2 className="text-2xl font-semibold mb-4">Vendor List</h2>
//           <table className="w-full border-collapse border border-gray-300">
//             <thead>
//               <tr className="bg-gray-200">
//                 <th className="border p-2">ID</th>
//                 <th className="border p-2">Name</th>
//                 <th className="border p-2">Email</th>
//                 <th className="border p-2">Status</th>
//                 <th className="border p-2">Users</th>
//                 <th className="border p-2">Actions</th>
//               </tr>
//             </thead>
//             <tbody>
//               {vendors.map((vendor) => (
//                 <tr key={vendor.id} className="text-center">
//                   <td className="border p-2">{vendor.id}</td>
//                   <td className="border p-2">{vendor.name}</td>
//                   <td className="border p-2">{vendor.email}</td>
//                   <td className="border p-2">{vendor.status}</td>
//                   <td className="border p-2">{vendor.users.length} Users</td>
//                   <td className="border p-2">
//                     <button
//                       onClick={() => {
//                         setActiveTab("products");
//                         setSelectedVendor(vendor);
//                       }}
//                       className="px-3 py-1 bg-blue-500 text-white rounded mr-2"
//                     >
//                       View Products
//                     </button>
//                     <button
//                       onClick={() => toggleVendorStatus(vendor.id)}
//                       className={`px-3 py-1 ${
//                         vendor.status === "enabled" ? "bg-red-600" : "bg-green-600"
//                       } text-white rounded`}
//                     >
//                       {vendor.status === "enabled" ? "Disable" : "Enable"}
//                     </button>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       )}

//       {/* Add Vendor Section */}
//       {activeTab === "add" && (
//         <div>
//           <h2 className="text-2xl font-semibold mb-4">Add Vendor</h2>
//           <form onSubmit={handleAddVendor} className="space-y-4">
//             <div>
//               <label className="block text-gray-700">Vendor Name</label>
//               <input
//                 type="text"
//                 value={newVendor.name}
//                 onChange={(e) => setNewVendor({ ...newVendor, name: e.target.value })}
//                 required
//                 className="w-full p-2 border border-gray-300 rounded-lg"
//               />
//             </div>
//             <div>
//               <label className="block text-gray-700">Vendor Email</label>
//               <input
//                 type="email"
//                 value={newVendor.email}
//                 onChange={(e) => setNewVendor({ ...newVendor, email: e.target.value })}
//                 required
//                 className="w-full p-2 border border-gray-300 rounded-lg"
//               />
//             </div>
//             <div>
//               <label className="block text-gray-700">Upload Documents</label>
//               <input
//                 type="file"
//                 onChange={(e) => setNewVendor({ ...newVendor, document: e.target.files[0] })}
//                 className="w-full p-2 border border-gray-300 rounded-lg"
//               />
//             </div>
//             <button
//               type="submit"
//               className="px-4 py-2 bg-green-500 text-white rounded-lg"
//             >
//               Add Vendor
//             </button>
//           </form>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Vendor;




// import React, { useState } from "react";

// const Vendor = () => {
//   const [activeTab, setActiveTab] = useState("view");
//   const [selectedVendor, setSelectedVendor] = useState(null);

//   const [vendors, setVendors] = useState([
//     {
//       id: 1,
//       name: "Vendor A",
//       email: "vendorA@example.com",
//       status: "enabled",
//       products: [
//         { id: 101, category: "Bakery", name: "Chocolate Cake", image: "https://via.placeholder.com/100", price: "$15", enabled: true },
//         { id: 102, category: "Dry Fruits", name: "Almonds", image: "https://via.placeholder.com/100", price: "$10", enabled: false },
//       ],
//       users: [
//         { id: 1, name: "John Doe", email: "john@example.com", purchases: ["Chocolate Cake"] },
//       ],
//     },
//   ]);

//   const [newVendor, setNewVendor] = useState({ name: "", email: "", document: null });
//   const [newProduct, setNewProduct] = useState({ name: "", category: "", price: "", image: "" });

//   // Toggle vendor enable/disable
//   const toggleVendorStatus = (id) => {
//     setVendors((prevVendors) =>
//       prevVendors.map((vendor) =>
//         vendor.id === id
//           ? { ...vendor, status: vendor.status === "enabled" ? "disabled" : "enabled" }
//           : vendor
//       )
//     );
//   };

//   // Toggle product enable/disable dynamically
//   const toggleProductStatus = (vendorId, productId) => {
//     setVendors((prevVendors) =>
//       prevVendors.map((vendor) =>
//         vendor.id === vendorId
//           ? {
//               ...vendor,
//               products: vendor.products.map((product) =>
//                 product.id === productId ? { ...product, enabled: !product.enabled } : product
//               ),
//             }
//           : vendor
//       )
//     );
//   };

//   // Add a new vendor
//   const handleAddVendor = (e) => {
//     e.preventDefault();
//     const newVendorData = {
//       id: vendors.length + 1,
//       name: newVendor.name,
//       email: newVendor.email,
//       status: "enabled",
//       products: [],
//       users: [],
//     };

//     setVendors([...vendors, newVendorData]);
//     setNewVendor({ name: "", email: "", document: null });
//     setActiveTab("view");
//   };

//   // Add a new product to selected vendor
//   const handleAddProduct = (e) => {
//     e.preventDefault();
//     if (!selectedVendor) return;

//     const updatedVendors = vendors.map((vendor) =>
//       vendor.id === selectedVendor.id
//         ? {
//             ...vendor,
//             products: [
//               ...vendor.products,
//               {
//                 id: vendor.products.length + 1,
//                 name: newProduct.name,
//                 category: newProduct.category,
//                 price: newProduct.price,
//                 image: newProduct.image || "https://via.placeholder.com/100",
//                 enabled: true,
//               },
//             ],
//           }
//         : vendor
//     );

//     setVendors(updatedVendors);
//     setNewProduct({ name: "", category: "", price: "", image: "" });
//   };

//   return (
//     <div className="p-6 bg-white rounded-lg shadow-md">
//       <h1 className="text-3xl font-semibold mb-4">Vendor Management</h1>

//       {/* Navigation Tabs */}
//       <div className="flex gap-4 mb-6">
//         <button
//           onClick={() => setActiveTab("view")}
//           className={`px-4 py-2 rounded-lg ${activeTab === "view" ? "bg-blue-600 text-white" : "bg-gray-200"}`}
//         >
//           View Vendors
//         </button>
//         <button
//           onClick={() => setActiveTab("add")}
//           className={`px-4 py-2 rounded-lg ${activeTab === "add" ? "bg-green-600 text-white" : "bg-gray-200"}`}
//         >
//           Add Vendor
//         </button>
//       </div>

//       {/* View Vendors Section */}
//       {activeTab === "view" && (
//         <div>
//           <h2 className="text-2xl font-semibold mb-4">Vendor List</h2>
//           <table className="w-full border-collapse border border-gray-300">
//             <thead>
//               <tr className="bg-gray-200">
//                 <th className="border p-2">Name</th>
//                 <th className="border p-2">Email</th>
//                 <th className="border p-2">Status</th>
//                 <th className="border p-2">Actions</th>
//               </tr>
//             </thead>
//             <tbody>
//               {vendors.map((vendor) => (
//                 <tr key={vendor.id} className="text-center">
//                   <td className="border p-2">{vendor.name}</td>
//                   <td className="border p-2">{vendor.email}</td>
//                   <td className="border p-2">{vendor.status}</td>
//                   <td className="border p-2">
//                     <button
//                       onClick={() => {
//                         setActiveTab("products");
//                         setSelectedVendor(vendor);
//                       }}
//                       className="px-3 py-1 bg-blue-500 text-white rounded mr-2"
//                     >
//                       View Products
//                     </button>
//                     <button
//                       onClick={() => toggleVendorStatus(vendor.id)}
//                       className={`px-3 py-1 ${
//                         vendor.status === "enabled" ? "bg-red-600" : "bg-green-600"
//                       } text-white rounded`}
//                     >
//                       {vendor.status === "enabled" ? "Disable" : "Enable"}
//                     </button>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       )}

//       {/* View & Add Products */}
//       {activeTab === "products" && selectedVendor && (
//         <div>
//           <h2 className="text-2xl font-semibold mb-4">Products by {selectedVendor.name}</h2>
//           <div className="grid grid-cols-3 gap-4">
//             {selectedVendor.products.map((product) => (
//               <div key={product.id} className="border p-4 rounded-lg shadow-lg">
//                 <img src={product.image} alt={product.name} className="w-full h-24 object-cover rounded-lg" />
//                 <h3 className="text-lg font-semibold">{product.name}</h3>
//                 <p className="text-gray-500">{product.category}</p>
//                 <p className="text-lg font-bold">{product.price}</p>
//                 <label className="flex items-center gap-2">
//                   <input
//                     type="checkbox"
//                     checked={product.enabled}
//                     onChange={() => toggleProductStatus(selectedVendor.id, product.id)}
//                   />
//                   Show Product
//                 </label>
//               </div>
//             ))}
//           </div>

//           {/* Add New Product */}
//           <form onSubmit={handleAddProduct} className="mt-6 space-y-4">
//             <h2 className="text-2xl font-semibold">Add Product</h2>
//             <input type="text" placeholder="Product Name" className="p-2 border w-full" onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })} />
//             <input type="text" placeholder="Category" className="p-2 border w-full" onChange={(e) => setNewProduct({ ...newProduct, category: e.target.value })} />
//             <input type="text" placeholder="Price" className="p-2 border w-full" onChange={(e) => setNewProduct({ ...newProduct, price: e.target.value })} />
//             <button type="submit" className="px-4 py-2 bg-green-500 text-white rounded-lg">Add Product</button>
//           </form>
//         </div>

//         //* Add New Vendor Form 
//       {activeTab === "add" && (
//         <form onSubmit={handleAddVendor} className="space-y-4">
//           <h2 className="text-2xl font-semibold">Add Vendor</h2>
//           <input type="text" placeholder="Vendor Name" className="p-2 border w-full" onChange={(e) => setNewVendor({ ...newVendor, name: e.target.value })} />
//           <input type="email" placeholder="Email" className="p-2 border w-full" onChange={(e) => setNewVendor({ ...newVendor, email: e.target.value })} />
//           <button type="submit" className="px-4 py-2 bg-green-500 text-white rounded-lg">Add Vendor</button>
//         </form>
      

//       )}
//     </div>
//   );
// };

// export default Vendor;







// import React, { useState } from "react";

// const Vendor = () => {
//   const [activeTab, setActiveTab] = useState("view");
//   const [selectedVendor, setSelectedVendor] = useState(null);
  
//   const [vendors, setVendors] = useState([
//     {
//       id: 1,
//       name: "Vendor A",
//       email: "vendorA@example.com",
//       status: "enabled",
//       products: [
//         { id: 101, category: "Bakery", name: "Chocolate Cake", image: "https://via.placeholder.com/100", price: "$15", enabled: true },
//         { id: 102, category: "Dry Fruits", name: "Almonds", image: "https://via.placeholder.com/100", price: "$10", enabled: false },
//       ],
//       users: [
//         { id: 1, name: "John Doe", email: "john@example.com", purchases: ["Chocolate Cake"] },
//       ],
//     },
//   ]);

//   const [newVendor, setNewVendor] = useState({ name: "", email: "" });
//   const [newProduct, setNewProduct] = useState({ name: "", category: "", price: "", image: "" });

//   // Toggle vendor enable/disable
//   const toggleVendorStatus = (id) => {
//     setVendors((prev) => prev.map((v) => v.id === id ? { ...v, status: v.status === "enabled" ? "disabled" : "enabled" } : v));
//   };

//   // Toggle product enable/disable dynamically
//   const toggleProductStatus = (vendorId, productId) => {
//     setVendors((prev) => prev.map((vendor) =>
//       vendor.id === vendorId ? {
//         ...vendor,
//         products: vendor.products.map((product) => product.id === productId ? { ...product, enabled: !product.enabled } : product),
//       } : vendor
//     ));
//   };

//   // Delete product
//   const deleteProduct = (vendorId, productId) => {
//     setVendors((prev) => prev.map((vendor) =>
//       vendor.id === vendorId ? {
//         ...vendor,
//         products: vendor.products.filter((product) => product.id !== productId),
//       } : vendor
//     ));
//   };

//   // Add a new vendor
//   const handleAddVendor = (e) => {
//     e.preventDefault();
//     setVendors([...vendors, { id: vendors.length + 1, name: newVendor.name, email: newVendor.email, status: "enabled", products: [], users: [] }]);
//     setNewVendor({ name: "", email: "" });
//     setActiveTab("view");
//   };

//   // Add a new product
//   const handleAddProduct = (e) => {
//     e.preventDefault();
//     if (!selectedVendor) return;
//     setVendors((prev) => prev.map((vendor) =>
//       vendor.id === selectedVendor.id ? {
//         ...vendor,
//         products: [...vendor.products, { id: vendor.products.length + 1, name: newProduct.name, category: newProduct.category, price: newProduct.price, image: newProduct.image || "https://via.placeholder.com/100", enabled: true }],
//       } : vendor
//     ));
//     setNewProduct({ name: "", category: "", price: "", image: "" });
//   };

//   return (
//     <div className="p-6 bg-white rounded-lg shadow-md">
//       <h1 className="text-3xl font-semibold mb-4">Vendor Management</h1>
//       <div className="flex gap-4 mb-6">
//         <button onClick={() => setActiveTab("view")} className={`px-4 py-2 rounded-lg ${activeTab === "view" ? "bg-blue-600 text-white" : "bg-gray-200"}`}>View Vendors</button>
//         <button onClick={() => setActiveTab("add")} className={`px-4 py-2 rounded-lg ${activeTab === "add" ? "bg-green-600 text-white" : "bg-gray-200"}`}>Add Vendor</button>
//       </div>

//       {activeTab === "view" && (
//         <div>
//           <h2 className="text-2xl font-semibold mb-4">Vendor List</h2>
//           {vendors.map((vendor) => (
//             <div key={vendor.id} className="border p-4 mb-4 rounded-lg">
//               <p className="font-semibold">{vendor.name} ({vendor.email})</p>
//               <button onClick={() => toggleVendorStatus(vendor.id)} className={`px-3 py-1 ${vendor.status === "enabled" ? "bg-red-600" : "bg-green-600"} text-white rounded`}>{vendor.status === "enabled" ? "Disable" : "Enable"}</button>
//               <button onClick={() => { setActiveTab("products"); setSelectedVendor(vendor); }} className="ml-4 px-3 py-1 bg-blue-500 text-white rounded">View Products</button>
//             </div>
//           ))}
//         </div>
//       )}

//       {activeTab === "add" && (
//         <form onSubmit={handleAddVendor} className="space-y-4">
//           <h2 className="text-2xl font-semibold">Add Vendor</h2>
//           <input type="text" placeholder="Vendor Name" className="p-2 border w-full" onChange={(e) => setNewVendor({ ...newVendor, name: e.target.value })} required />
//           <input type="email" placeholder="Email" className="p-2 border w-full" onChange={(e) => setNewVendor({ ...newVendor, email: e.target.value })} required />
//           <button type="submit" className="px-4 py-2 bg-green-500 text-white rounded-lg">Add Vendor</button>
//         </form>
//       )}

//       {activeTab === "products" && selectedVendor && (
//         <div>
//           <h2 className="text-2xl font-semibold">Products by {selectedVendor.name}</h2>
//           <div className="grid grid-cols-3 gap-4">
//             {selectedVendor.products.map((product) => (
//               <div key={product.id} className="border p-4 rounded-lg shadow-lg">
//                 <img src={product.image} alt={product.name} className="w-full h-24 object-cover rounded-lg" />
//                 <h3 className="text-lg font-semibold">{product.name}</h3>
//                 <label className="flex items-center gap-2">
//                   <input type="checkbox" checked={product.enabled} onChange={() => toggleProductStatus(selectedVendor.id, product.id)} /> Show Product
//                 </label>
//                 <button onClick={() => deleteProduct(selectedVendor.id, product.id)} className="px-2 py-1 bg-red-500 text-white rounded">Delete</button>
//               </div>
//             ))}
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Vendor;












// import React, { useState } from "react";

// const Vendor = () => {
//   const [activeTab, setActiveTab] = useState("view");
//   const [selectedVendor, setSelectedVendor] = useState(null);

//   const [vendors, setVendors] = useState([
//     {
//       id: 1,
//       name: "Vendor A",
//       phone: "9876543210",
//       email: "vendorA@example.com",
//       shopName: "A's Bakery",
//       address: "123 Street, City",
//       image: "https://via.placeholder.com/100",
//       status: "enabled",
//       products: [
//         { id: 101, category: "Bakery", name: "Chocolate Cake", image: "https://via.placeholder.com/100", price: "$15", enabled: true },
//         { id: 102, category: "Dry Fruits", name: "Almonds", image: "https://via.placeholder.com/100", price: "$10", enabled: false },
//       ],
//     },
//   ]);

//   const [newVendor, setNewVendor] = useState({ name: "", phone: "", email: "", shopName: "", address: "", image: null });
//   const [newProduct, setNewProduct] = useState({ name: "", category: "", price: "", image: "" });

//   const handleAddVendor = (e) => {
//     e.preventDefault();
//     const newVendorData = {
//       id: vendors.length + 1,
//       ...newVendor,
//       status: "enabled",
//       products: [],
//     };
//     setVendors([...vendors, newVendorData]);
//     setNewVendor({ name: "", phone: "", email: "", shopName: "", address: "", image: null });
//     setActiveTab("view");
//   };

//   return (
//     <div className="p-6 bg-white rounded-lg shadow-md">
//       <h1 className="text-3xl font-semibold mb-4">Vendor Management</h1>
//       <div className="flex gap-4 mb-6">
//         <button onClick={() => setActiveTab("view")} className={`px-4 py-2 rounded-lg ${activeTab === "view" ? "bg-blue-600 text-white" : "bg-gray-200"}`}>View Vendors</button>
//         <button onClick={() => setActiveTab("add")} className={`px-4 py-2 rounded-lg ${activeTab === "add" ? "bg-green-600 text-white" : "bg-gray-200"}`}>Add Vendor</button>
//       </div>
//       {activeTab === "view" && (
//         <div>
//           <h2 className="text-2xl font-semibold mb-4">Vendor List</h2>
//           <table className="w-full border-collapse border border-gray-300">
//             <thead>
//               <tr className="bg-gray-200">
//                 <th className="border p-2">Image</th>
//                 <th className="border p-2">Name</th>
//                 <th className="border p-2">Phone</th>
//                 <th className="border p-2">Email</th>
//                 <th className="border p-2">Shop</th>
//                 <th className="border p-2">Address</th>
//                 <th className="border p-2">Status</th>
//               </tr>
//             </thead>
//             <tbody>
//               {vendors.map((vendor) => (
//                 <tr key={vendor.id} className="text-center">
//                   <td className="border p-2"><img src={vendor.image} alt={vendor.name} className="w-10 h-10 rounded" /></td>
//                   <td className="border p-2">{vendor.name}</td>
//                   <td className="border p-2">{vendor.phone}</td>
//                   <td className="border p-2">{vendor.email}</td>
//                   <td className="border p-2">{vendor.shopName}</td>
//                   <td className="border p-2">{vendor.address}</td>
//                   <td className="border p-2">{vendor.status}</td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       )}
//       {activeTab === "add" && (
//         <form onSubmit={handleAddVendor} className="space-y-4">
//           <h2 className="text-2xl font-semibold">Add Vendor</h2>
//           <label>Name</label><input type="text" className="p-2 border w-full" onChange={(e) => setNewVendor({ ...newVendor, name: e.target.value })} />
//           <label>Phone</label><input type="text" className="p-2 border w-full" onChange={(e) => setNewVendor({ ...newVendor, phone: e.target.value })} />
//           <label>Email</label><input type="email" className="p-2 border w-full" onChange={(e) => setNewVendor({ ...newVendor, email: e.target.value })} />
//           <label>Shop Name</label><input type="text" className="p-2 border w-full" onChange={(e) => setNewVendor({ ...newVendor, shopName: e.target.value })} />
//           <label>Address</label><input type="text" className="p-2 border w-full" onChange={(e) => setNewVendor({ ...newVendor, address: e.target.value })} />
//           <label>Upload Image</label><input type="file" className="p-2 border w-full" onChange={(e) => setNewVendor({ ...newVendor, image: URL.createObjectURL(e.target.files[0]) })} />
//           <button type="submit" className="px-4 py-2 bg-green-500 text-white rounded-lg">Add Vendor</button>
//         </form>
//       )}
//     </div>
//   );
// };

// export default Vendor;
