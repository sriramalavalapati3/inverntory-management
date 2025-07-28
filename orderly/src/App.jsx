import React from 'react';
import { Routes, Route } from 'react-router-dom';
import SignUp from './pages/auth/signup';
import Login from './pages/auth/login';
import CustomerOrder from './pages/customer/customerOrderProduct/customerOrderProduct';
import CustomerLayout from './layout/customerLayout/customerLayout';
import OrderHistory from './pages/customer/customerOrders/orderHistory';
import AdminLayout from './layout/adminLayout/adminLayout';
// import CustomerDashboard from './pages/customer/customerDashboard/customerDashboard'; // <-- Import this!

function App() {
  return (
    <div className="App"> {/* className instead of class */}
      <Routes>
        {/* Unprotected routes like login/signup */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />

        {/* Protected routes for customers */}
        {/* <Route path="/" element={<CustomerLayout />}>
          <Route path="/dashboard" element={<CustomerOrder />} />
          <Route path="/orderHistory" element={<OrderHistory />} />
        </Route> */}

        <Route path = "/" element = {<AdminLayout />}>

          </Route>
      </Routes>
    </div>
  );
}

export default App;
