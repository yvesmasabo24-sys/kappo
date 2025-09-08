// src/components/Accessories.tsx
const Accessories = () => {
  return (
    <div>
      <div className="bg-gradient-to-r from-green-500 to-teal-500 text-white p-10 rounded-2xl shadow-md mb-8">
        <h1 className="text-3xl font-bold">Accessories Collection</h1>
        <p className="text-lg mt-2">Complete your style with our trendy accessories.</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white shadow rounded-xl p-4 hover:shadow-lg transition">
          <img src="https://via.placeholder.com/200x250" alt="Sunglasses" className="rounded-md mb-3" />
          <h2 className="text-lg font-semibold">Sunglasses</h2>
          <p className="text-gray-600">$15.99</p>
        </div>

        <div className="bg-white shadow rounded-xl p-4 hover:shadow-lg transition">
          <img src="https://via.placeholder.com/200x250" alt="Belt" className="rounded-md mb-3" />
          <h2 className="text-lg font-semibold">Leather Belt</h2>
          <p className="text-gray-600">$25.99</p>
        </div>

        <div className="bg-white shadow rounded-xl p-4 hover:shadow-lg transition">
          <img src="https://via.placeholder.com/200x250" alt="Scarf" className="rounded-md mb-3" />
          <h2 className="text-lg font-semibold">Silk Scarf</h2>
          <p className="text-gray-600">$35.99</p>
        </div>

        <div className="bg-white shadow rounded-xl p-4 hover:shadow-lg transition">
          <img src="https://via.placeholder.com/200x250" alt="Bracelet" className="rounded-md mb-3" />
          <h2 className="text-lg font-semibold">Bracelet</h2>
          <p className="text-gray-600">$18.99</p>
        </div>
      </div>
    </div>
  );
};

export default Accessories;
