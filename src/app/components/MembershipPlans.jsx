'use client';

export default function MembershipPlans() {
  const plans = [
    { title: '1 Month Plan', price: '$49.99', description: 'Receive fresh flowers every week for a month.' },
    { title: '3 Month Plan', price: '$139.99', description: 'Receive fresh flowers every week for three months.' },
    { title: '6 Month Plan', price: '$249.99', description: 'Receive fresh flowers every week for six months.' },
    { title: '1 Year Plan', price: '$499.99', description: 'Receive fresh flowers every week for a year.' },
  ];

  return (
    <section className="py-16 bg-gray-200">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-semibold mb-8">Flower Delivery Membership Plans</h2>
        <p className="mb-6">Choose a plan that suits your needs and enjoy fresh flowers delivered to your door!</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {plans.map((plan, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-6 transition-transform transform hover:scale-105">
              <h3 className="text-xl font-bold mb-4">{plan.title}</h3>
              <p className="text-gray-600">{plan.price}</p>
              <p>{plan.description}</p>
              <a
                href="#"
                className="mt-4 inline-block bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition duration-200"
              >
                Choose Plan
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
