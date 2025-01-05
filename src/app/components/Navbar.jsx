'use client';

import React from 'react';

export default function Navbar() {
  return (
    <nav className="bg-green-600 text-white">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        {/* Logo */}
        <div className="text-2xl font-bold flex items-center">
          <a href="/" className="hover:text-gray-200">
            {/* <img src="/images/logo.png" alt="Logo" className="h-8 w-8 mr-2" /> */}
            DIVINE ESSENTIALS
          </a>
        </div>

        {/* Search Bar */}
        <div className="hidden md:flex flex-1 mx-4">
          <input
            type="text"
            placeholder="Search for products..."
            className="w-full px-4 py-2 rounded-l-md text-gray-700 focus:outline-none"
          />
          <button className="bg-gray-900 px-4 py-2 rounded-r-md text-white hover:bg-gray-700">
            Search
          </button>
        </div>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center space-x-6">
          <a href="/" className="hover:text-gray-200">Home</a>
          <a href="/about" className="hover:text-gray-200">About</a>
          <a href="/products" className="hover:text-gray-200">Products</a>
          <a href="/contact" className="hover:text-gray-200">Contact</a>
        </div>

        {/* Icons Section */}
        <div className="flex items-center space-x-6">
          {/* Cart Icon */}
          <a href="/cart" className="relative hover:text-gray-200">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2 9m5-9V7a2 2 0 114 0v6m-4 0h4"
              />
            </svg>
            {/* Cart Item Count */}
            <span className="absolute -top-2 -right-3 bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
              3
            </span>
          </a>

          {/* User Icon / Dropdown */}
          <div className="relative group">
            <button className="flex items-center space-x-2 hover:text-gray-200 focus:outline-none">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5.121 17.804A10.963 10.963 0 0112 16c2.216 0 4.287.642 6.121 1.804M12 16v1m0-1c-1.133 0-2.202.307-3.121.804M8.879 17.804A10.963 10.963 0 015.121 17.804m8.758 0A10.963 10.963 0 0112 17m0 0v1m0 0c1.133 0 2.202-.307 3.121-.804m0-11.196A10.963 10.963 0 0112 7m0 0V6m0 0c1.133 0 2.202-.307 3.121-.804"
                />
              </svg>
              <span>Account</span>
            </button>
            <div className="absolute hidden group-hover:block bg-white text-gray-700 mt-2 rounded-md shadow-lg w-40 right-0">
              <a href="/profile" className="block px-4 py-2 hover:bg-gray-200">
                Profile
              </a>
              <a href="/orders" className="block px-4 py-2 hover:bg-gray-200">
                Orders
              </a>
              <a href="/logout" className="block px-4 py-2 hover:bg-gray-200">
                Logout
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className="md:hidden bg-green-700">
        <div className="flex flex-col space-y-2 py-4 px-6">
          <a href="/" className="hover:text-gray-200">Home</a>
          <a href="/about" className="hover:text-gray-200">About</a>
          <a href="/products" className="hover:text-gray-200">Products</a>
          <a href="/contact" className="hover:text-gray-200">Contact</a>
        </div>
      </div>
    </nav>
  );
}
