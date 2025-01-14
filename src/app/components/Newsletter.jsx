'use client'

export default function Newsletter () {
    return (
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
    )
}