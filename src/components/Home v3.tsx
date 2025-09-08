// src/components/HomeV3.tsx
const HomeV3 = () => {
  return (
    <div className="p-6 space-y-8">
      <header>
        <h1 className="text-3xl font-bold mb-4">Home Version 3</h1>
        <p className="text-gray-600">This is the third homepage layout.</p>
      </header>

      <section className="bg-gray-800 text-white p-10 rounded-lg shadow text-center">
        <h2 className="text-2xl font-bold mb-2">Premium Deals</h2>
        <p className="mb-4">Exclusive discounts on top brands.</p>
        <button className="bg-yellow-500 text-black px-6 py-2 rounded hover:bg-yellow-600">
          Grab Offer
        </button>
      </section>

      <section>
        <h2 className="text-xl font-bold mb-4">Why Choose Us?</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div className="p-6 border rounded-lg shadow text-center">
            🚚 Free Delivery
          </div>
          <div className="p-6 border rounded-lg shadow text-center">
            ⭐ Quality Products
          </div>
          <div className="p-6 border rounded-lg shadow text-center">
            💳 Secure Payment
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomeV3;

