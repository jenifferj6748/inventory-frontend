// import React, { useState } from "react";
// import "./ProductForm.css";

// function ProductForm({ onAddProduct }) {
//   const [formData, setFormData] = useState({
//     name: "",
//     price: "",
//     quantity: "",
//     description: "",
//   });

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     onAddProduct(formData);
//     setFormData({ name: "", price: "", quantity: "", description: "" });
//   };

//   return (
//     <div className="product-form-container">
//       <h3>Add New Product</h3>
//       <form onSubmit={handleSubmit} className="product-form">
//         <div className="form-row">
//           <input
//             name="name"
//             type="text"
//             placeholder="Product Name"
//             value={formData.name}
//             onChange={handleChange}
//             required
//           />
//           <input
//             name="price"
//             type="number"
//             placeholder="Price"
//             value={formData.price}
//             onChange={handleChange}
//             required
//           />
//           <input
//             name="quantity"
//             type="number"
//             placeholder="Quantity"
//             value={formData.quantity}
//             onChange={handleChange}
//             required
//           />
//         </div>
//         <textarea
//           name="description"
//           placeholder="Product Description"
//           value={formData.description}
//           onChange={handleChange}
//         ></textarea>
//         <button type="submit">Create</button>
//       </form>
//     </div>
//   );
// }

// export default ProductForm;



import React, { useState } from "react";
import axios from "axios";
import "./ProductForm.css";

// ✅ Backend API endpoint
const API_URL = "https://inventory-backend-5wo6.onrender.com/api/products/";

function ProductForm({ onAddProduct }) {
  const [formData, setFormData] = useState({
    name: "",
    price: "",
    quantity: "",
    description: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // ✅ Send POST request to backend
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(API_URL, formData);
      console.log("✅ Product created:", response.data);

      // Refresh product list in parent
      if (onAddProduct) onAddProduct();

      // Reset form
      setFormData({ name: "", price: "", quantity: "", description: "" });
    } catch (error) {
      console.error("❌ Error creating product:", error);
      alert("Failed to create product. Please try again.");
    }
  };

  return (
    <div className="product-form-container">
      <h3>Add New Product</h3>
      <form onSubmit={handleSubmit} className="product-form">
        <div className="form-row">
          <input
            name="name"
            type="text"
            placeholder="Product Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            name="price"
            type="number"
            placeholder="Price"
            value={formData.price}
            onChange={handleChange}
            required
          />
          <input
            name="quantity"
            type="number"
            placeholder="Quantity"
            value={formData.quantity}
            onChange={handleChange}
            required
          />
        </div>
        <textarea
          name="description"
          placeholder="Product Description"
          value={formData.description}
          onChange={handleChange}
        ></textarea>
        <button type="submit">Create</button>
      </form>
    </div>
  );
}

export default ProductForm;
