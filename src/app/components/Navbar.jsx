'use client';

import React from 'react';

export default function Navbar() {
  return (
    <nav className="bg-green-600 text-white">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        <div className="text-2xl font-bold">
          <a href="/" className="hover:text-gray-200">DIVINE ESSENTIALS</a>
        </div>
        <div className="hidden md:flex space-x-6">
          <a href="/" className="hover:text-gray-200">Home</a>
          <a href="/about" className="hover:text-gray-200">About</a>
          <a href="/products" className="hover:text-gray-200">Products</a>
          <a href="/contact" className="hover:text-gray-200">Contact</a>
        </div>
      </div>
    </nav>
  );
}
