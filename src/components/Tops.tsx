// src/components/Tops.tsx
const Tops = () => {
  return (
    <div>
      <div className="bg-gradient-to-r from-pink-500 to-red-500 text-white p-10 rounded-2xl shadow-md mb-8">
        <h1 className="text-3xl font-bold">Trendy Tops</h1>
        <p className="text-lg mt-2">Stylish tops for casual and formal looks.</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white shadow rounded-xl p-4 hover:shadow-lg transition">
          <img src="https://via.placeholder.com/200x250" alt="Casual Top" className="rounded-md mb-3" />
          <h2 className="text-lg font-semibold">Casual Top</h2>
          <p className="text-gray-600">$29.99</p>
        </div>

        <div className="bg-white shadow rounded-xl p-4 hover:shadow-lg transition">
          <img src="https://via.placeholder.com/200x250" alt="Blouse" className="rounded-md mb-3" />
          <h2 className="text-lg font-semibold">Blouse</h2>
          <p className="text-gray-600">$39.99</p>
        </div>

        <div className="bg-white shadow rounded-xl p-4 hover:shadow-lg transition">
          <img src="https://via.placeholder.com/200x250" alt="Crop Top" className="rounded-md mb-3" />
          <h2 className="text-lg font-semibold">Crop Top</h2>
          <p className="text-gray-600">$24.99</p>
        </div>

        <div className="bg-white shadow rounded-xl p-4 hover:shadow-lg transition">
          <img src="https://via.placeholder.com/200x250" alt="Tank Top" className="rounded-md mb-3" />
          <h2 className="text-lg font-semibold">Tank Top</h2>
          <p className="text-gray-600">$19.99</p>
        </div>
      </div>
    </div>
  );
};

export default Tops;
