"use client";

import React from "react";

export default function ExtraSection() {
  return (
    <>
      {/* Featured Products */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">Featured Products</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {/* Loop through featured products */}
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">What Our Customers Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="p-6 bg-gray-100 rounded-md shadow-md">
              <p>
                "The flowers were fresh and beautifully arranged. Highly
                recommend!"
              </p>
              <h4 className="mt-4 font-bold">- Jane Doe</h4>
            </div>
            <div className="p-6 bg-gray-100 rounded-md shadow-md">
              <p>
                "The spiritual items are authentic and enhanced my rituals."
              </p>
              <h4 className="mt-4 font-bold">- John Smith</h4>
            </div>
            <div className="p-6 bg-gray-100 rounded-md shadow-md">
              <p>"Amazing membership plans. I receive fresh flowers weekly!"</p>
              <h4 className="mt-4 font-bold">- Sarah Lee</h4>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Subscription */}
      <section className="py-12 bg-green-500 text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
          <p className="mb-6">
            Subscribe to our newsletter for exclusive offers and updates.
          </p>
          <form className="flex justify-center">
            <input
              type="email"
              placeholder="Enter your email"
              className="p-2 rounded-l-md w-1/2"
            />
            <button className="px-6 py-2 bg-gray-900 text-white rounded-r-md hover:bg-gray-700">
              Subscribe
            </button>
          </form>
        </div>
      </section>

      {/* Promotional Banners */}
      {/* <section className="py-8 bg-yellow-300">
        <div className="container mx-auto text-center">
          <h2 className="text-2xl font-bold">Limited Time Offer</h2>
          <p className="text-lg mt-2">Get 20% off on all spiritual items!</p>
          <a
            href="/products"
            className="inline-block mt-4 bg-red-500 text-white px-6 py-2 rounded-md hover:bg-red-600"
          >
            Shop Now
          </a>
        </div>
      </section> */}

      {/* Video Background in Hero Section */}
      <header className="relative h-screen">
        <video
          autoPlay
          muted
          loop
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/path-to-video.mp4" type="video/mp4" />
        </video>
        <div className="relative z-10 flex items-center justify-center h-full bg-black bg-opacity-50">
          <h1 className="text-white text-5xl font-bold">Welcome to Our Shop</h1>
        </div>
      </header>

      {/* Blog/Articles Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">Latest Articles</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="p-4 bg-white rounded-md shadow-md">
              <img
                src="https://www.fnp.com/assets/images/custom/articles/hub-26-03-2024.jpg"
                alt="Article 1"
                className="rounded-t-md"
              />
              <h3 className="text-xl font-bold mt-4">
                Caring for Fresh Flowers
              </h3>
              <p className="mt-2 text-gray-600">
                Learn how to keep your flowers fresh for longer.
              </p>
              <a href="#" className="text-green-500 mt-4 inline-block">
                Read More
              </a>
            </div>
            <div className="p-4 bg-white rounded-md shadow-md">
              <img
                src="https://www.fnp.com/assets/images/custom/articles/hub-28-03-2024.jpg"
                alt="Article 1"
                className="rounded-t-md"
              />
              <h3 className="text-xl font-bold mt-4">
                Caring for Fresh Flowers
              </h3>
              <p className="mt-2 text-gray-600">
                Learn how to keep your flowers fresh for longer.
              </p>
              <a href="#" className="text-green-500 mt-4 inline-block">
                Read More
              </a>
            </div>
            <div className="p-4 bg-white rounded-md shadow-md">
              <img
                src="https://www.fnp.com/assets/images/custom/articles/hub-20-03-2024.jpg"
                alt="Article 1"
                className="rounded-t-md"
              />
              <h3 className="text-xl font-bold mt-4">
                Caring for Fresh Flowers
              </h3>
              <p className="mt-2 text-gray-600">
                Learn how to keep your flowers fresh for longer.
              </p>
              <a href="#" className="text-green-500 mt-4 inline-block">
                Read More
              </a>
            </div>
            {/* Repeat for more articles */}
          </div>
        </div>
      </section>

      {/* Social Media Feed */}
      <section className="py-16 bg-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">Follow Us on Instagram</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {/* Embed Instagram posts */}
            <div className="aspect-w-1 aspect-h-1">
              <img
                src="/path-to-instagram-post.jpg"
                alt="Post 1"
                className="rounded-md"
              />
            </div>
          </div>
        </div>
      </section>

      {/* parallax section */}
      <section
        className="h-screen bg-fixed bg-center bg-cover"
        style={{
          backgroundImage:
            "url('https://www.samskarahome.com/cdn/shop/files/AKR51864.jpg?v=1732001320&width=1920')",
        }}
      >
        <div className="flex items-center justify-center h-full bg-black bg-opacity-50">
          <h2 className="text-white text-4xl font-bold">Experience Serenity</h2>
        </div>
      </section>

      {/* Faq section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4 text-left">
            <div className="p-4 bg-white rounded-md shadow-md">
              <h3 className="font-bold">How long does flower delivery take?</h3>
              <p className="text-gray-600">
                We deliver within 2-3 business days for most locations.
              </p>
            </div>
            <div className="p-4 bg-white rounded-md shadow-md">
              <h3 className="font-bold">What payment methods do you accept?</h3>
              <p className="text-gray-600">
                We accept credit cards, PayPal, and more.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
