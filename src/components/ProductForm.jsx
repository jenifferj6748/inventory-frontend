import React, { useState } from "react";
import "./ProductForm.css";

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

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddProduct(formData);
    setFormData({ name: "", price: "", quantity: "", description: "" });
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
