import React from 'react';
import ProductForm from './components/ProductForm.jsx';
import ProductList from './components/ProductList.jsx';
import './App.css';

function App() {
  return (
    <div className="container">
      <h1>Inventory App</h1>

      <div className="center-box">
        <ProductForm />
      </div>

      <div className="center-box">
        <ProductList />
      </div>
    </div>
  );
}

export default App;
