"use client";

import { useSelector, useDispatch } from "react-redux";
import {
  removeFromCart,
  clearCart,
  incrementQuantity,
  decrementQuantity,
} from "@/store/cartSlice";

export default function CartPage() {
  const cart = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="p-8 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-center">🛒 Your Cart</h1>

      {cart.length === 0 ? (
        <div className="text-center text-gray-600">
          <p>Your cart is empty.</p>
        </div>
      ) : (
        <>
          <ul className="divide-y divide-gray-200 mb-6">
            {cart.map((item) => (
              <li
                key={item.id}
                className="py-6 flex justify-between items-center"
              >
                <div className="flex items-center gap-4">
                  <img
                    src={item.imageSrc}
                    alt={item.imageAlt}
                    className="w-16 h-16 object-cover rounded-md"
                  />
                  <div>
                    <p className="text-lg font-medium">{item.name}</p>
                    <div className="flex items-center mt-1">
                      <button
                        onClick={() => dispatch(decrementQuantity(item.id))}
                        className="bg-gray-200 px-2 py-1 rounded text-sm"
                      >
                        −
                      </button>
                      <span className="px-3 text-sm">{item.quantity}</span>
                      <button
                        onClick={() => dispatch(incrementQuantity(item.id))}
                        className="bg-gray-200 px-2 py-1 rounded text-sm"
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-md font-semibold">
                    ₹{item.price * item.quantity}
                  </p>
                  <button
                    onClick={() => dispatch(removeFromCart(item.id))}
                    className="mt-2 text-sm text-red-600 hover:underline"
                  >
                    Remove
                  </button>
                </div>
              </li>
            ))}
          </ul>

          <div className="text-right">
            <p className="text-xl font-bold mb-4">Total: ₹{total}</p>
            <button
              onClick={() => dispatch(clearCart())}
              className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
            >
              Clear Cart
            </button>
          </div>
          <a
            href="/checkout"
            className="mt-4 inline-block bg-green-600 text-white px-6 py-3 rounded-md hover:bg-green-700"
          >
            Proceed to Checkout
          </a>
        </>
      )}
    </div>
  );
}
