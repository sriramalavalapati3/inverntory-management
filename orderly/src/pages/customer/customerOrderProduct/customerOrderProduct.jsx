import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './CustomerOrderProduct.css';
import OrderForm from './orderForm';

const products = {
  'iPhone 14': 79999,
  'AirPods Pro': 24999,
  'MacBook Pro': 199999,
};

const CustomerOrder = () => {
  const [selectedProduct, setSelectedProduct] = useState('');
  const [price, setPrice] = useState(0);

  const handleProductChange = (e) => {
    const product = e.target.value;
    setSelectedProduct(product);
    setPrice(products[product] || 0);
  };

  return (
    <div className="page-container">
      <div className="hero-section">
        <h1>Place Your Order with Ease</h1>
        <p>
          Experience seamless ordering and tracking from start to finish. Our
          streamlined process ensures your products arrive quickly and reliably.
        </p>
      </div>

      <main className="form-section">
<OrderForm />
      </main>
    </div>
  );
};

export default CustomerOrder;
