import React, { useState, useEffect } from 'react';
import { Search, Package, Clock, CheckCircle, XCircle, Truck, Calendar, User, CreditCard } from 'lucide-react';
import './orderHistory.css';

const OrderManagement = () => {
  const [searchId, setSearchId] = useState('');
  const [searchResult, setSearchResult] = useState(null);
  const [orderHistory, setOrderHistory] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  // Mock order data
  const mockOrders = [
    {
      id: 'ORD001',
      customerName: 'John Doe',
      items: ['Laptop', 'Mouse', 'Keyboard'],
      total: 1299.99,
      status: 'delivered',
      orderDate: '2024-01-15',
      deliveryDate: '2024-01-18',
      address: '123 Main St, New York, NY 10001',
      paymentMethod: 'Credit Card',
      trackingNumber: 'TRK123456789'
    },
    {
      id: 'ORD002',
      customerName: 'Jane Smith',
      items: ['Smartphone', 'Case', 'Charger'],
      total: 899.99,
      status: 'shipped',
      orderDate: '2024-01-20',
      estimatedDelivery: '2024-01-25',
      address: '456 Oak Ave, Los Angeles, CA 90001',
      paymentMethod: 'PayPal',
      trackingNumber: 'TRK987654321'
    },
    {
      id: 'ORD003',
      customerName: 'Mike Johnson',
      items: ['Headphones', 'Speaker'],
      total: 299.99,
      status: 'processing',
      orderDate: '2024-01-22',
      estimatedDelivery: '2024-01-28',
      address: '789 Pine St, Chicago, IL 60601',
      paymentMethod: 'Credit Card',
      trackingNumber: null
    },
    {
      id: 'ORD004',
      customerName: 'Sarah Wilson',
      items: ['Tablet', 'Stylus'],
      total: 599.99,
      status: 'cancelled',
      orderDate: '2024-01-18',
      cancelledDate: '2024-01-19',
      address: '321 Elm St, Houston, TX 77001',
      paymentMethod: 'Credit Card',
      refundStatus: 'processed'
    },
    {
      id: 'ORD005',
      customerName: 'David Brown',
      items: ['Monitor', 'HDMI Cable'],
      total: 449.99,
      status: 'pending',
      orderDate: '2024-01-25',
      address: '654 Maple Dr, Phoenix, AZ 85001',
      paymentMethod: 'Bank Transfer',
      trackingNumber: null
    }
  ];

  useEffect(() => {
    // Load order history on component mount
    setOrderHistory(mockOrders);
  }, []);

  const getStatusIcon = (status) => {
    switch (status.toLowerCase()) {
      case 'delivered':
        return <CheckCircle className="status-icon delivered" />;
      case 'shipped':
        return <Truck className="status-icon shipped" />;
      case 'processing':
        return <Clock className="status-icon processing" />;
      case 'cancelled':
        return <XCircle className="status-icon cancelled" />;
      case 'pending':
        return <Package className="status-icon pending" />;
      default:
        return <Package className="status-icon pending" />;
    }
  };

  const handleSearch = () => {
    if (!searchId.trim()) {
      setError('Please enter an order ID');
      return;
    }

    setLoading(true);
    setError('');

    // Simulate API call
    setTimeout(() => {
      const foundOrder = mockOrders.find(order => 
        order.id.toLowerCase() === searchId.toLowerCase()
      );

      if (foundOrder) {
        setSearchResult(foundOrder);
        setError('');
      } else {
        setSearchResult(null);
        setError('Order not found. Please check the order ID and try again.');
      }
      setLoading(false);
    }, 1000);
  };

  const OrderStatusCard = ({ order }) => (
    <div className="order-status-card">
      <div className="order-header">
        <div className="order-title">
          {getStatusIcon(order.status)}
          <h3>Order {order.id}</h3>
        </div>
        <span className={`status-badge ${order.status}`}>
          {order.status.charAt(0).toUpperCase() + order.status.slice(1)}
        </span>
      </div>

      <div className="order-details">
        <div className="order-info-section">
          <div className="info-item">
            <User className="info-icon" />
            <span className="info-label">Customer:</span>
            <span className="info-value">{order.customerName}</span>
          </div>
          
          <div className="info-item">
            <Calendar className="info-icon" />
            <span className="info-label">Order Date:</span>
            <span className="info-value">{new Date(order.orderDate).toLocaleDateString()}</span>
          </div>

          <div className="info-item">
            <CreditCard className="info-icon" />
            <span className="info-label">Payment:</span>
            <span className="info-value">{order.paymentMethod}</span>
          </div>

          {order.trackingNumber && (
            <div className="info-item">
              <Truck className="info-icon" />
              <span className="info-label">Tracking:</span>
              <span className="info-value tracking-number">{order.trackingNumber}</span>
            </div>
          )}
        </div>

        <div className="order-info-section">
          <div className="items-section">
            <span className="info-label">Items:</span>
            <ul className="items-list">
              {order.items.map((item, index) => (
                <li key={index} className="item">{item}</li>
              ))}
            </ul>
          </div>

          <div className="total-section">
            <span className="info-label">Total:</span>
            <span className="total-amount">${order.total}</span>
          </div>

          <div className="address-section">
            <span className="info-label">Address:</span>
            <p className="address">{order.address}</p>
          </div>
        </div>
      </div>

      {order.status === 'delivered' && order.deliveryDate && (
        <div className="status-message delivered">
          <p>✅ Delivered on {new Date(order.deliveryDate).toLocaleDateString()}</p>
        </div>
      )}

      {order.status === 'shipped' && order.estimatedDelivery && (
        <div className="status-message shipped">
          <p>🚚 Estimated delivery: {new Date(order.estimatedDelivery).toLocaleDateString()}</p>
        </div>
      )}

      {order.status === 'cancelled' && (
        <div className="status-message cancelled">
          <p>
            ❌ Order cancelled on {new Date(order.cancelledDate).toLocaleDateString()}
            {order.refundStatus === 'processed' && ' - Refund processed'}
          </p>
        </div>
      )}
    </div>
  );

  const OrderHistoryTable = ({ orders }) => (
    <div className="order-history-table">
      <div className="table-header">
        <h3>Order History</h3>
      </div>
      
      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>Order ID</th>
              <th>Customer</th>
              <th>Status</th>
              <th>Date</th>
              <th>Total</th>
              <th>Items</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr key={order.id}>
                <td>
                  <span className="order-id">{order.id}</span>
                </td>
                <td>
                  <span className="customer-name">{order.customerName}</span>
                </td>
                <td>
                  <div className="status-cell">
                    {getStatusIcon(order.status)}
                    <span className={`status-badge ${order.status}`}>
                      {order.status.charAt(0).toUpperCase() + order.status.slice(1)}
                    </span>
                  </div>
                </td>
                <td className="order-date">
                  {new Date(order.orderDate).toLocaleDateString()}
                </td>
                <td className="order-total">
                  ${order.total}
                </td>
                <td>
                  <div className="items-preview">
                    {order.items.slice(0, 2).join(', ')}
                    {order.items.length > 2 && ` +${order.items.length - 2} more`}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );

  return (
    <div className="order-management">
      <div className="container">
        <div className="page-header">
          <h1>Order Management</h1>
          <p>Track order status and view order history</p>
        </div>

        {/* Search Section */}
        <div className="search-section">
          <h2>Search Order Status</h2>
          <div className="search-form">
            <div className="input-group">
              <label htmlFor="orderId">Order ID</label>
              <input
                id="orderId"
                type="text"
                value={searchId}
                onChange={(e) => setSearchId(e.target.value)}
                placeholder="Enter order ID (e.g., ORD001)"
                onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
              />
            </div>
            <button
              onClick={handleSearch}
              disabled={loading}
              className="search-button"
            >
              {loading ? (
                <div className="loading-spinner"></div>
              ) : (
                <Search className="search-icon" />
              )}
              <span>{loading ? 'Searching...' : 'Search'}</span>
            </button>
          </div>

          {error && (
            <div className="error-message">
              <p>{error}</p>
            </div>
          )}
        </div>

        {/* Search Result */}
        {searchResult && (
          <div className="search-result-section">
            <h2>Order Status</h2>
            <OrderStatusCard order={searchResult} />
          </div>
        )}

        {/* Order History */}
        <div className="history-section">
          <OrderHistoryTable orders={orderHistory} />
        </div>
      </div>
    </div>
  );
};

export default OrderManagement;