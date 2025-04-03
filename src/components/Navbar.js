"use client";

import Link from "next/link";
// import { useAuth } from "@/contexts/AuthContext";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function Navbar() {
  // const { user, guestCart, isAuthenticated } = useAuth();
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const categories = ["Bakery", "Dairy", "Flowers", "Pooja Items"];

  // Get cart items count (either from guest cart or user cart)
  // const cartItemsCount = guestCart.items.length;

  return (
    <nav className="bg-white shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="text-xl font-bold text-blue-600">
            Daily Essentials
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {categories.map((category) => (
              <Link
                key={category}
                href={`/products/${category.toLowerCase()}`}
                className={`text-gray-600 hover:text-blue-600 ${
                  pathname.includes(category.toLowerCase())
                    ? "text-blue-600"
                    : ""
                }`}
              >
                {category}
              </Link>
            ))}
          </div>

          {/* Desktop Auth Links */}
          <div className="hidden md:flex items-center space-x-4">
            <Link
              href="/cart"
              className={`text-gray-600 hover:text-blue-600 relative ${
                pathname === "/cart" ? "text-blue-600" : ""
              }`}
            >
              Cart
              {/* {cartItemsCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-blue-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {cartItemsCount}
                </span>
              )} */}
            </Link>
            {/* {isAuthenticated ? (
              <Link
                href="/profile"
                className={`text-gray-600 hover:text-blue-600 ${
                  pathname === "/profile" ? "text-blue-600" : ""
                }`}
              >
                Profile
              </Link>
            ) : ( */}
            <>
              <Link
                href="/login"
                className={`text-gray-600 hover:text-blue-600 ${
                  pathname === "/login" ? "text-blue-600" : ""
                }`}
              >
                Login
              </Link>
              <Link
                href="/signup"
                className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
              >
                Sign Up
              </Link>
            </>
            {/* )} */}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-600 hover:text-blue-600 focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMobileMenuOpen ? (
                  <path d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <div className="flex flex-col space-y-3">
              {categories.map((category) => (
                <Link
                  key={category}
                  href={`/products/${category.toLowerCase()}`}
                  className={`text-gray-600 hover:text-blue-600 ${
                    pathname.includes(category.toLowerCase())
                      ? "text-blue-600"
                      : ""
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {category}
                </Link>
              ))}
              <Link
                href="/cart"
                className={`text-gray-600 hover:text-blue-600 relative inline-block ${
                  pathname === "/cart" ? "text-blue-600" : ""
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Cart
                {cartItemsCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-blue-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                    {cartItemsCount}
                  </span>
                )}
              </Link>
              {/* {isAuthenticated ? (
                <Link
                  href="/profile"
                  className={`text-gray-600 hover:text-blue-600 ${
                    pathname === "/profile" ? "text-blue-600" : ""
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Profile
                </Link>
              ) : ( */}
              <>
                <Link
                  href="/login"
                  className={`text-gray-600 hover:text-blue-600 ${
                    pathname === "/login" ? "text-blue-600" : ""
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Login
                </Link>
                <Link
                  href="/signup"
                  className="text-blue-600 hover:text-blue-700"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Sign Up
                </Link>
              </>
              {/* )} */}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
