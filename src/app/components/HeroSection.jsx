'use client';

import React from 'react';

export default function HeroSection() {
  return (
    <header
      className="bg-cover bg-center h-screen"
      style={{ backgroundImage: "url('https://bhaktishop.com/cdn/shop/files/rollup_horizontal_A_02-x2-web.jpg?v=1696364023&width=1600')" }}
    >
      <div className="flex items-center justify-center h-full bg-black bg-opacity-50">
        <div className="text-center">
          <h1 className="text-white text-5xl font-bold mb-4">Welcome to Our Shop</h1>
          <a href="/products" className="mt-4 bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600">
            Shop Flowers
          </a>
        </div>
      </div>
    </header>
  );
}
