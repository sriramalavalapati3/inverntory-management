import React, { useState } from 'react';
import './OrderForm.css';

export default function OrderForm() {
  const [formData, setFormData] = useState({
    customerName: 'John Doe',
    contactEmail: 'john.doe@example.com',
    contactPhone: '+1 (555) 123-4567',
    product: '',
    quantity: '1',
    deliveryAddress: '123 Main St, Anytown, CA 90210'
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = () => {
    console.log('Order submitted:', formData);
    alert('Order placed successfully!');
  };

  return (
    <div className="order-form-container">
      <div className="order-form-wrapper">
        <h1 className="form-title">
          Place Your New Order
        </h1>
        <p className="form-subtitle">
          Fill out the form below to place your order. All fields are required.
        </p>

        <div className="form-content">
          {/* First Row - Customer Info */}
          <div className="form-row three-columns">
            <div className="form-group">
              <label className="form-label">
                Customer Name
              </label>
              <input
                type="text"
                name="customerName"
                value={formData.customerName}
                onChange={handleInputChange}
                className="form-input"
                required
              />
            </div>
            
            <div className="form-group">
              <label className="form-label">
                Contact Email
              </label>
              <input
                type="email"
                name="contactEmail"
                value={formData.contactEmail}
                onChange={handleInputChange}
                className="form-input"
                required
              />
            </div>
            
            <div className="form-group">
              <label className="form-label">
                Contact Phone
              </label>
              <input
                type="tel"
                name="contactPhone"
                value={formData.contactPhone}
                onChange={handleInputChange}
                className="form-input"
                required
              />
            </div>
          </div>

          {/* Second Row - Product and Quantity */}
          <div className="form-row two-columns">
            <div className="form-group">
              <label className="form-label">
                Product
              </label>
              <select
                name="product"
                value={formData.product}
                onChange={handleInputChange}
                className="form-select"
                required
              >
                <option value="">Select a product</option>
                <option value="laptop">Laptop</option>
                <option value="smartphone">Smartphone</option>
                <option value="tablet">Tablet</option>
                <option value="headphones">Headphones</option>
                <option value="camera">Camera</option>
              </select>
            </div>
            
            <div className="form-group">
              <label className="form-label">
                Quantity
              </label>
              <input
                type="number"
                name="quantity"
                value={formData.quantity}
                onChange={handleInputChange}
                min="1"
                className="form-input"
                required
              />
            </div>

            <div className="form-group">
              <label className="form-label">
                Price
              </label>
              <input
                type="number"
                name="price"
                value={formData.price || ''}
                onChange={handleInputChange}
                className="form-input"
                required
              />
            </div>
          </div>

          {/* Third Row - Delivery Address */}
          <div className="form-row">
            <div className="form-group full-width">
              <label className="form-label">
                Delivery Address
              </label>
              <textarea
                name="deliveryAddress"
                value={formData.deliveryAddress}
                onChange={handleInputChange}
                rows="3"
                className="form-textarea"
                required
              />
            </div>
          </div>

          {/* Submit Button */}
          <div className="form-actions">
            <button
              type="button"
              onClick={handleSubmit}
              className="submit-button"
            >
              Place Order
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}