// import React from "react";

// const Products = () => {
//   return (
//     <div>
//       <h1 className="text-3xl font-semibold mb-4">Products</h1>
//       <p>List of all products...</p>
//     </div>
//   );
// };

// export default Products;



import React, { useState } from "react";

const Product = () => {
  const [categories, setCategories] = useState([
    {
      name: "Dry Fruits",
      products: [
        { id: 1, name: "Almonds", price: "$10", vendor: "Vendor A", image: "https://via.placeholder.com/100" },
        { id: 2, name: "Cashews", price: "$12", vendor: "Vendor B", image: "https://via.placeholder.com/100" }
      ]
    },
    {
      name: "Bakery Products",
      products: [
        { id: 3, name: "Chocolate Cake", price: "$15", vendor: "Vendor A", image: "https://via.placeholder.com/100" },
        { id: 4, name: "Cookies", price: "$8", vendor: "Vendor C", image: "https://via.placeholder.com/100" }
      ]
    },
    {
      name: "Masala",
      products: [
        { id: 5, name: "Turmeric Powder", price: "$5", vendor: "Vendor D", image: "https://via.placeholder.com/100" },
        { id: 6, name: "Chili Powder", price: "$6", vendor: "Vendor E", image: "https://via.placeholder.com/100" }
      ]
    }
  ]);

  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <h1 className="text-3xl font-semibold mb-4">Product Management</h1>
      {categories.map((category, index) => (
        <div key={index} className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">{category.name}</h2>
          <table className="w-full border-collapse border border-gray-300">
            <thead>
              <tr className="bg-gray-200">
                <th className="border p-2">Image</th>
                <th className="border p-2">Product Name</th>
                <th className="border p-2">Price</th>
                <th className="border p-2">Vendor</th>
                <th className="border p-2">Actions</th>
              </tr>
            </thead>
            <tbody>
              {category.products.map((product) => (
                <tr key={product.id} className="text-center">
                  <td className="border p-2"><img src={product.image} alt={product.name} className="w-16 h-16 object-cover" /></td>
                  <td className="border p-2">{product.name}</td>
                  <td className="border p-2">{product.price}</td>
                  <td className="border p-2">{product.vendor}</td>
                  <td className="border p-2">
                    <button className="px-3 py-1 bg-red-500 text-white rounded mr-2">Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ))}
    </div>
  );
};

export default Product;
