"use client";

import React, { useState } from "react";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-green-600 text-white">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        {/* Logo */}
        <div className="text-2xl font-bold flex items-center">
          <a href="/" className="hover:text-gray-200">
            {/* <img src="/images/logo.png" alt="Logo" className="h-8 w-8 mr-2" /> */}
            Daily Essentials
          </a>
        </div>

        {/* Search Bar (Hidden on Mobile) */}
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

        {/* Navigation Links (Hidden on Mobile) */}
        <div className="hidden md:flex items-center space-x-6">
          <a href="/" className="hover:text-gray-200">
            Home
          </a>
          <a href="/about" className="hover:text-gray-200">
            About
          </a>
          <a href="/products" className="hover:text-gray-200">
            Products
          </a>
          <a href="/contact" className="hover:text-gray-200">
            Contact
          </a>
        </div>

        {/* Cart & User Icons */}
        <div className="flex items-center space-x-6">
          {/* Cart Icon */}
          <a href="/cart" className="relative hover:text-gray-200 ml-2">
            <svg
              className="w-6 h-6 text-gray-800 dark:text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 4h1.5L9 16m0 0h8m-8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm-8.5-3h9.25L19 7H7.312"
              />
            </svg>

            <span className="absolute -top-2 -right-3 bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
              3
            </span>
          </a>

          {/* User Icon */}
          <div className="relative group">
            <button className="flex items-center space-x-2 hover:text-gray-200 focus:outline-none">
              <svg
                className="w-6 h-6 text-gray-800 dark:text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Zm0 0a8.949 8.949 0 0 0 4.951-1.488A3.987 3.987 0 0 0 13 16h-2a3.987 3.987 0 0 0-3.951 3.512A8.948 8.948 0 0 0 12 21Zm3-11a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
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

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMobileMenu}
          className="md:hidden focus:outline-none"
        >
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
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>
      </div>

      {/* Mobile Navigation Links */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-green-700">
          <div className="flex flex-col space-y-2 py-4 px-6">
            <a href="/" className="hover:text-gray-200">
              Home
            </a>
            <a href="/about" className="hover:text-gray-200">
              About
            </a>
            <a href="/products" className="hover:text-gray-200">
              Products
            </a>
            <a href="/contact" className="hover:text-gray-200">
              Contact
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
