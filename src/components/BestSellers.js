"use client";

const products = [
  {
    id: 1,
    name: "Fresh Milk",
    category: "Dairy",
    price: 60,
    imageSrc: "/images/products/milk.jpg",
    imageAlt: "Fresh milk packet",
  },
  {
    id: 2,
    name: "Whole Wheat Bread",
    category: "Bakery",
    price: 40,
    imageSrc: "/images/products/bread.jpg",
    imageAlt: "Whole wheat bread loaf",
  },
  {
    id: 3,
    name: "Rose Bouquet",
    category: "Flowers",
    price: 299,
    imageSrc: "/images/products/roses.jpg",
    imageAlt: "Fresh rose bouquet",
  },
  {
    id: 4,
    name: "Camphor",
    category: "Pooja Items",
    price: 45,
    imageSrc: "/images/products/camphor.jpg",
    imageAlt: "Camphor for pooja",
  },
];

export default function BestSellers() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl text-center mb-12">
          Best Sellers
        </h2>

        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {products.map((product) => (
            <div key={product.id} className="group relative">
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none lg:h-80">
                <img
                  src={product.imageSrc}
                  alt={product.imageAlt}
                  className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                />
              </div>
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-sm text-gray-700">
                    <span aria-hidden="true" className="absolute inset-0" />
                    {product.name}
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">
                    {product.category}
                  </p>
                </div>
                <p className="text-sm font-medium text-gray-900">
                  ₹{product.price}
                </p>
              </div>
              <button
                onClick={() => handleAddToCart(product)}
                className="mt-4 w-full rounded-md bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 disabled:opacity-50"
              >
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
