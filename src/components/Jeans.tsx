// src/components/Jeans.tsx
const Jeans = () => {
  return (
    <div>
      <div className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white p-10 rounded-2xl shadow-md mb-8">
        <h1 className="text-3xl font-bold">Jeans Collection</h1>
        <p className="text-lg mt-2">Find the perfect jeans for every style and occasion.</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white shadow rounded-xl p-4 hover:shadow-lg transition">
          <img src="https://via.placeholder.com/200x250" alt="Skinny Jeans" className="rounded-md mb-3" />
          <h2 className="text-lg font-semibold">Skinny Jeans</h2>
          <p className="text-gray-600">$49.99</p>
        </div>

        <div className="bg-white shadow rounded-xl p-4 hover:shadow-lg transition">
          <img src="https://via.placeholder.com/200x250" alt="Straight Jeans" className="rounded-md mb-3" />
          <h2 className="text-lg font-semibold">Straight Jeans</h2>
          <p className="text-gray-600">$59.99</p>
        </div>

        <div className="bg-white shadow rounded-xl p-4 hover:shadow-lg transition">
          <img src="https://via.placeholder.com/200x250" alt="Ripped Jeans" className="rounded-md mb-3" />
          <h2 className="text-lg font-semibold">Ripped Jeans</h2>
          <p className="text-gray-600">$69.99</p>
        </div>

        <div className="bg-white shadow rounded-xl p-4 hover:shadow-lg transition">
          <img src="https://via.placeholder.com/200x250" alt="Bootcut Jeans" className="rounded-md mb-3" />
          <h2 className="text-lg font-semibold">Bootcut Jeans</h2>
          <p className="text-gray-600">$54.99</p>
        </div>
      </div>
    </div>
  );
};

export default Jeans;
