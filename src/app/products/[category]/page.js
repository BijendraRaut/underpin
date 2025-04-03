"use client";

import { useParams } from "next/navigation";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

export default function ProductCategoryPage() {
  const params = useParams();
  const categories = ["Bakery", "Dairy", "Flowers", "Pooja Items"];
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        setError(null);

        const normalizedCategory = params.category?.replace(/-/g, " ");
        const url = normalizedCategory
          ? `/api/products?category=${encodeURIComponent(normalizedCategory)}`
          : "/api/products";

        const response = await fetch(url);
        const data = await response.json();

        if (!response.ok) {
          throw new Error(data.error || "Failed to fetch products");
        }

        if (data.success) {
          setProducts(data.products);
          if (data.products.length === 0) {
            setError(
              `No products found in ${normalizedCategory || "any"} category`
            );
          }
        }
      } catch (error) {
        console.error("Error fetching products:", error);
        setError("Failed to load products. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [params.category]);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  const selectedCategory = params.category?.replace(/-/g, " ");

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Category Navigation */}
      <div className="mb-8">
        <div className="flex flex-wrap gap-4">
          <Link
            href="/products"
            className={`px-4 py-2 rounded-full ${
              !selectedCategory
                ? "bg-blue-600 text-white"
                : "bg-gray-100 hover:bg-gray-200"
            }`}
          >
            All Products
          </Link>
          {categories.map((category) => (
            <Link
              key={category}
              href={`/products/${category.toLowerCase().replace(/ /g, "-")}`}
              className={`px-4 py-2 rounded-full ${
                selectedCategory === category
                  ? "bg-blue-600 text-white"
                  : "bg-gray-100 hover:bg-gray-200"
              }`}
            >
              {category}
            </Link>
          ))}
        </div>
      </div>

      <h1 className="text-3xl font-bold mb-8">
        {selectedCategory
          ? `${
              selectedCategory.charAt(0).toUpperCase() +
              selectedCategory.slice(1)
            } Products`
          : "All Products"}
      </h1>

      {error && (
        <div className="mb-8 p-4 bg-red-50 border-l-4 border-red-400 text-red-700">
          {error}
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {products.map((product) => (
          <div
            key={product._id}
            className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
          >
            <div className="relative h-48">
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-cover"
              />
            </div>
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2">{product.name}</h2>
              <p className="text-gray-600 mb-2">
                {product.weight || product.volume}
              </p>
              <p className="text-lg font-bold mb-4">₹{product.price}</p>
              <button className="w-full py-2 px-4 rounded bg-blue-600 hover:bg-blue-700 text-white font-semibold transition-colors">
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
