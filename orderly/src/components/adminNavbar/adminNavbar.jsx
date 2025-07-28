import React, { useState, useRef, useEffect } from 'react';
import { FaBell, FaCog, FaUserCircle } from 'react-icons/fa';

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <img src="/images/mainLogo.svg" alt="OrderManager Logo" />
          <div className="flex items-center">
            <div className="bg-indigo-600 w-8 h-8 rounded-md"></div>
            <span className="ml-2 text-xl font-bold text-gray-800">OrderManager</span>
          </div>
          
          {/* Navigation Links */}
          <div className="hidden md:flex space-x-8">
            <a href="#" className="text-indigo-600 font-medium border-b-2 border-indigo-600">Orders</a>
            <a href="#" className="text-gray-500 hover:text-gray-700 font-medium">Products</a>
            <a href="#" className="text-gray-500 hover:text-gray-700 font-medium">Customers</a>
            <a href="#" className="text-gray-500 hover:text-gray-700 font-medium">Analytics</a>
          </div>
          
          {/* Right side icons and profile */}
          <div className="flex items-center space-x-4">
            <button className="p-2 text-gray-500 hover:text-gray-700">
              <FaBell className="text-xl" />
            </button>
            <button className="p-2 text-gray-500 hover:text-gray-700">
              <FaCog className="text-xl" />
            </button>
            
            {/* Profile dropdown */}
            <div className="relative" ref={dropdownRef}>
              <button 
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="flex items-center text-gray-700 hover:text-gray-900 focus:outline-none"
              >
                <FaUserCircle className="text-2xl" />
              </button>
              
              {isDropdownOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50 border border-gray-200">
                  <div className="px-4 py-3 border-b border-gray-200">
                    <p className="text-sm font-medium text-gray-900">John Doe</p>
                    <p className="text-xs text-gray-500">admin@example.com</p>
                  </div>
                  
                  <a 
                    href="#" 
                    className="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-50"
                  >
                    My Profile
                  </a>
                  
                  <a 
                    href="#" 
                    className="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-50"
                  >
                    Account Settings
                  </a>
                  
                  <a 
                    href="#" 
                    className="block px-4 py-3 text-sm text-gray-700 hover:bg-red-50 hover:text-red-500 border-t border-gray-200"
                  >
                    Logout
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;