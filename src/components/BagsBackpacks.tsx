// src/components/BagsBackpacks.tsx
const BagsBackpacks = () => {
  return (
    <div>
      <div className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white p-10 rounded-2xl shadow-md mb-8">
        <h1 className="text-3xl font-bold">Bags & Backpacks</h1>
        <p className="text-lg mt-2">Carry your essentials in style.</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white shadow rounded-xl p-4 hover:shadow-lg transition">
          <img src="https://via.placeholder.com/200x250" alt="Handbag" className="rounded-md mb-3" />
          <h2 className="text-lg font-semibold">Handbag</h2>
          <p className="text-gray-600">$45.99</p>
        </div>

        <div className="bg-white shadow rounded-xl p-4 hover:shadow-lg transition">
          <img src="https://via.placeholder.com/200x250" alt="Backpack" className="rounded-md mb-3" />
          <h2 className="text-lg font-semibold">Backpack</h2>
          <p className="text-gray-600">$55.99</p>
        </div>

        <div className="bg-white shadow rounded-xl p-4 hover:shadow-lg transition">
          <img src="https://via.placeholder.com/200x250" alt="Shoulder Bag" className="rounded-md mb-3" />
          <h2 className="text-lg font-semibold">Shoulder Bag</h2>
          <p className="text-gray-600">$35.99</p>
        </div>

        <div className="bg-white shadow rounded-xl p-4 hover:shadow-lg transition">
          <img src="https://via.placeholder.com/200x250" alt="Laptop Bag" className="rounded-md mb-3" />
          <h2 className="text-lg font-semibold">Laptop Bag</h2>
          <p className="text-gray-600">$65.99</p>
        </div>
      </div>
    </div>
  );
};

export default BagsBackpacks;
