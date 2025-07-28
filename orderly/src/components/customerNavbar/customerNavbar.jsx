import React from 'react';
import { NavLink } from 'react-router-dom';
import './CustomerNavbar.css';

const CustomerNavbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const dropdownRef = React.useRef(null);
  const handleLogout = () => {
    // Implement logout functionality here
    console.log('User logged out');
  };
  return (
    <nav className="customer-navbar">
      {/* Left: Logo and Name */}
      <div className="navbar-logo">
        <img src="/images/mainLogo.svg" alt="Orderly Logo" />
        <span>Orderly</span>
      </div>

      {/* Center: Navigation Links */}
      <div className="navbar-links">
        <NavLink to="/dashboard" className="nav-link">
          Dashboard
        </NavLink>
        <NavLink to="/orderHistory" className="nav-link">
          Orders
        </NavLink>
        {/* Add more NavLinks as needed */}
      </div>

      {/* Right: User Image */}
       <div className="navbar-user" ref={dropdownRef}>
        <div 
          className="profile-icon" 
          onClick={() => setIsOpen(!isOpen)}
        >
        <img src="/images/kalabhairava.jpg" alt="User" />
        </div>

        {isOpen && (
          <div className="dropdown-menu">
            <div className="dropdown-item">Profile</div>
            <div className="dropdown-item">Update</div>
            <div 
              className="dropdown-item"
              onClick={handleLogout}
            >
              Logout
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default CustomerNavbar;
