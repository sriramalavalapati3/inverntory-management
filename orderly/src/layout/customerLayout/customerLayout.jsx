import React from 'react';
import CustomerNavbar from '../../components/customerNavbar/customerNavbar.jsx';
import { Outlet } from 'react-router-dom';
import './CustomerLayout.css';

const CustomerLayout = () => {
  return (
    <div className="customer-layout">
      <CustomerNavbar />
      <main className="customer-content">
        <Outlet />
      </main>
    </div>
  );
};

export default CustomerLayout;
