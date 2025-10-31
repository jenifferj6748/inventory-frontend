import React, { useEffect, useState } from "react";
import axios from "axios";
import ProductForm from "./ProductForm";
import "./ProductList.css";

const API_URL = "http://127.0.0.1:8000/api/products/";

function ProductList() {
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    const response = await axios.get(API_URL);
    setProducts(response.data);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const handleDelete = async (id) => {
    await axios.delete(`${API_URL}${id}/`);
    fetchProducts();
  };

  return (
    <div className="product-list">
      <h2>Manage Products</h2>
      {/* <ProductForm onSaved={fetchProducts} /> */}

      <table className="product-table">
        <thead>
          <tr>
            <th>S.No</th>
            <th>Name</th>
            <th>Price ($)</th>
            <th>Quantity</th>
            <th>Description</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.length > 0 ? (
            products.map((p, index) => (
              <tr key={p.id}>
                <td>{index + 1}</td>
                <td>{p.name}</td>
                <td>{p.price}</td>
                <td>{p.quantity}</td>
                <td>{p.description}</td>
                <td>
                  <button className="edit-btn">Edit</button>
                  <button
                    className="delete-btn"
                    onClick={() => handleDelete(p.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="6" style={{ textAlign: "center" }}>
                No products found
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default ProductList;
