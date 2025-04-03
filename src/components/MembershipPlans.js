"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

const plans = [
  {
    name: "Basic",
    id: "basic",
    price: 499,
    duration: "3 months",
    description: "Perfect for occasional shoppers",
    features: [
      "Free delivery on orders above ₹500",
      "5% discount on all products",
      "Early access to sales",
      "Basic customer support",
    ],
  },
  {
    name: "Premium",
    id: "premium",
    price: 999,
    duration: "6 months",
    description: "Best value for regular customers",
    features: [
      "Free delivery on all orders",
      "10% discount on all products",
      "Priority access to new products",
      "Premium customer support",
      "Special festival offers",
    ],
  },
  {
    name: "Gold",
    id: "gold",
    price: 1499,
    duration: "12 months",
    description: "Ultimate shopping experience",
    features: [
      "Free delivery on all orders",
      "15% discount on all products",
      "VIP access to new products",
      "24/7 priority support",
      "Exclusive member-only events",
      "Double rewards points",
    ],
  },
];

export default function MembershipPlans() {
  const router = useRouter();
  const [selectedPlan, setSelectedPlan] = useState(null);

  const handlePlanSelect = async (plan) => {
    if (!isAuthenticated) {
      router.push("/login?redirect=/membership");
      return;
    }

    setSelectedPlan(plan.id);
    try {
      const response = await fetch("/api/membership/subscribe", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          planId: plan.id,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to subscribe to plan");
      }

      // Redirect to checkout or confirmation page
      router.push("/checkout/membership");
    } catch (error) {
      console.error("Error subscribing to plan:", error);
    } finally {
      setSelectedPlan(null);
    }
  };

  return (
    <div className="bg-gray-50 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Membership Plans
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Choose a plan that works best for you. All plans include exclusive
            member benefits.
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-lg grid-cols-1 gap-y-6 sm:mt-20 lg:max-w-none lg:grid-cols-3 lg:gap-y-0 lg:gap-x-8">
          {plans.map((plan) => (
            <div
              key={plan.id}
              className="flex flex-col rounded-3xl bg-white p-8 shadow-xl ring-1 ring-gray-900/10 sm:p-10"
            >
              <h3 className="text-base font-semibold leading-7 text-blue-600">
                {plan.name}
              </h3>
              <p className="mt-4 flex items-baseline gap-x-2">
                <span className="text-5xl font-bold tracking-tight text-gray-900">
                  ₹{plan.price}
                </span>
                <span className="text-base text-gray-500">
                  /{plan.duration}
                </span>
              </p>
              <p className="mt-6 text-base leading-7 text-gray-600">
                {plan.description}
              </p>
              <ul
                role="list"
                className="mt-8 space-y-3 text-sm leading-6 text-gray-600"
              >
                {plan.features.map((feature) => (
                  <li key={feature} className="flex gap-x-3">
                    <svg
                      className="h-6 w-5 flex-none text-blue-600"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                        clipRule="evenodd"
                      />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
              <button
                onClick={() => handlePlanSelect(plan)}
                disabled={selectedPlan === plan.id}
                className="mt-8 block rounded-md bg-blue-600 px-3.5 py-2 text-center text-sm font-semibold leading-6 text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 disabled:opacity-50"
              >
                {selectedPlan === plan.id ? "Processing..." : "Get started"}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
