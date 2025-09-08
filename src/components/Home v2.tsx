// src/components/HomeV2.tsx
const HomeV2 = () => {
  return (
    <div className="p-6 space-y-8">
      {/* Header */}
      <header>
        <h1 className="text-3xl font-bold mb-4">Home Version 2</h1>
        <p className="text-gray-600">This is the second homepage layout.</p>
      </header>

      {/* Highlight Section */}
      <section className="bg-blue-500 text-white p-8 rounded-lg shadow">
        <h2 className="text-2xl font-bold mb-2">Latest Arrivals</h2>
        <p className="mb-4">Check out our brand new collection.</p>
        <button className="bg-white text-blue-600 px-4 py-2 rounded hover:bg-gray-100">
          Explore Now
        </button>
      </section>

      {/* Categories */}
      <section>
        <h2 className="text-xl font-bold mb-4">Shop by Category</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          <div className="border p-6 rounded-lg shadow text-center">📱 Mobiles</div>
          <div className="border p-6 rounded-lg shadow text-center">🎧 Accessories</div>
          <div className="border p-6 rounded-lg shadow text-center">👟 Fashion</div>
        </div>
      </section>
    </div>
  );
};

export default HomeV2;
