"use client";

import React from "react";

export default function AboutPage() {
  return (
    <div className="container mx-auto py-16 px-4">
      <h1 className="text-4xl font-bold text-center mb-8">About Us</h1>
      <div className="text-lg text-gray-600 space-y-6">
        <p>
          Welcome to the{" "}
          <span className="text-green-600 font-bold">
            Divine Essential Shop
          </span>
          , where beauty and spirituality come together to enrich your life. Our
          mission is to provide you with the freshest flowers and the finest
          spiritual items to brighten your day and enhance your spiritual
          journey.
        </p>
        <p>
          Our shop is built on the principles of love, care, and connection. We
          believe that flowers are more than just decorations; they are symbols
          of emotions, celebrations, and memories. Similarly, our carefully
          curated spiritual items are designed to help you find peace and
          serenity in your daily life.
        </p>
        <h2 className="text-2xl font-semibold">Our Story</h2>
        <p>
          Founded in 2024, we started as a small family-run business with a
          passion for flowers and spirituality. Over the years, our commitment
          to quality and customer satisfaction has helped us grow into a trusted
          name in the community. Whether you’re celebrating a special occasion,
          seeking spiritual guidance, or simply looking to add beauty to your
          home, we are here for you.
        </p>
        <h2 className="text-2xl font-semibold">Why Choose Us?</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>
            Fresh, high-quality flowers sourced directly from trusted farms.
          </li>
          <li>A wide range of spiritual products to suit your needs.</li>
          <li>Dedicated customer service to ensure your satisfaction.</li>
          <li>Convenient online shopping and timely delivery services.</li>
        </ul>
        <h2 className="text-2xl font-semibold">Our Vision</h2>
        <p>
          To be a leading provider of flowers and spiritual essentials,
          spreading happiness, beauty, and tranquility to every corner of the
          world. We aim to create a space where people can connect with nature,
          celebrate life’s moments, and nurture their spiritual well-being.
        </p>
        <p>
          Thank you for choosing the{" "}
          <span className="text-green-600 font-bold">
            Divine Essential Shop
          </span>
          . We look forward to serving you and being a part of your journey.
        </p>
      </div>
    </div>
  );
}
