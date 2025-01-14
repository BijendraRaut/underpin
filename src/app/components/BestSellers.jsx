'use client'

export default function BestSellers () {
    return (
      <section className="py-16">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">Best Sellers</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Example Product */}
            <div className="bg-white shadow-md rounded-lg overflow-hidden">
              <img
                src="https://i.ytimg.com/vi/EiHBI9Cci2Y/maxresdefault.jpg"
                alt="Best Seller"
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-l font-bold">HARVEST GOLD WHITE BREAD</h3>
                <p className="text-gray-600">350.00 G</p>
                <p className="text-green-500 font-bold">₹40</p>
                <a
                  href="/products/1"
                  className="mt-4 inline-block bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600"
                >
                  Add to Cart
                </a>
              </div>
            </div>
            <div className="bg-white shadow-md rounded-lg overflow-hidden">
              <img
                src="https://i.ytimg.com/vi/EiHBI9Cci2Y/maxresdefault.jpg"
                alt="Best Seller"
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-l font-bold">HARVEST GOLD WHITE BREAD</h3>
                <p className="text-gray-600">350.00 G</p>
                <p className="text-green-500 font-bold">₹40</p>
                <a
                  href="/products/1"
                  className="mt-4 inline-block bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600"
                >
                  Add to Cart
                </a>
              </div>
            </div>
            <div className="bg-white shadow-md rounded-lg overflow-hidden">
              <img
                src="https://i.ytimg.com/vi/EiHBI9Cci2Y/maxresdefault.jpg"
                alt="Best Seller"
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-l font-bold">HARVEST GOLD WHITE BREAD</h3>
                <p className="text-gray-600">350.00 G</p>
                <p className="text-green-500 font-bold">₹40</p>
                <a
                  href="/products/1"
                  className="mt-4 inline-block bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600"
                >
                  Add to Cart
                </a>
              </div>
            </div>
            <div className="bg-white shadow-md rounded-lg overflow-hidden">
              <img
                src="https://i.ytimg.com/vi/EiHBI9Cci2Y/maxresdefault.jpg"
                alt="Best Seller"
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-l font-bold">HARVEST GOLD WHITE BREAD</h3>
                <p className="text-gray-600">350.00 G</p>
                <p className="text-green-500 font-bold">₹40</p>
                <a
                  href="/products/1"
                  className="mt-4 inline-block bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600"
                >
                  Add to Cart
                </a>
              </div>
            </div>
            {/* Repeat for other products */}
          </div>
        </div>
      </section>
    )
}