'use client';

import Link from 'next/link';

const categories = [
  {
    name: 'Bakery',
    description: 'Fresh bread, pastries, and cakes',
    imageSrc: '/images/bakery.jpg',
    href: '/products/bakery',
  },
  {
    name: 'Dairy',
    description: 'Fresh milk, cheese, and dairy products',
    imageSrc: '/images/dairy.jpg',
    href: '/products/dairy',
  },
  {
    name: 'Flowers',
    description: 'Fresh flowers for all occasions',
    imageSrc: '/images/flowers.jpg',
    href: '/products/flowers',
  },
  {
    name: 'Pooja Items',
    description: 'Traditional items for your spiritual needs',
    imageSrc: '/images/pooja.jpg',
    href: '/products/pooja-items',
  },
];

export default function ProductCategories() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Shop by Category</h2>
          <p className="mt-4 text-lg leading-8 text-gray-600">
            Explore our wide range of products across different categories
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl auto-rows-fr grid-cols-1 gap-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-4">
          {categories.map((category) => (
            <Link
              key={category.name}
              href={category.href}
              className="relative isolate flex flex-col justify-end overflow-hidden rounded-2xl bg-gray-900 px-8 pb-8 pt-80 sm:pt-48 lg:pt-80 transform transition duration-300 hover:scale-105"
            >
              <img src={category.imageSrc} alt={category.name} className="absolute inset-0 -z-10 h-full w-full object-cover" />
              <div className="absolute inset-0 -z-10 bg-gradient-to-t from-gray-900 via-gray-900/40" />
              <div className="absolute inset-0 -z-10 rounded-2xl ring-1 ring-inset ring-gray-900/10" />

              <div className="flex flex-wrap items-center gap-y-1 overflow-hidden text-sm leading-6 text-gray-300">
                <div className="mr-2">{category.description}</div>
              </div>
              <h3 className="mt-3 text-lg font-semibold leading-6 text-white">
                <span className="absolute inset-0" />
                {category.name}
              </h3>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
