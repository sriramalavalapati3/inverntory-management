import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../../components/adminNavbar/adminNavbar.jsx';

const AdminLayout = () => {
  return (
    <div className="customer-layout">
      <Navbar />
      <main className="customer-content">
        <Outlet />
      </main>
    </div>
  );
};

export default AdminLayout;
