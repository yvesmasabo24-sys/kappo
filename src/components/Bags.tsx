const Bags = () => {
  const products = [
    { id: 1, name: "Leather Handbag", price: "$85", img: "https://via.placeholder.com/200" },
    { id: 2, name: "Casual Tote Bag", price: "$40", img: "https://via.placeholder.com/200" },
    { id: 3, name: "Evening Clutch", price: "$60", img: "https://via.placeholder.com/200" },
    { id: 4, name: "Travel Backpack", price: "$95", img: "https://via.placeholder.com/200" },
  ];

  return (
    <div className="p-6">
      <div className="bg-gradient-to-r from-red-400 to-red-600 text-white p-8 rounded-2xl shadow-lg mb-8 text-center">
        <h1 className="text-4xl font-extrabold">Women’s Bags</h1>
        <p className="mt-2 text-lg">Chic, trendy & practical bags for every style.</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((item) => (
          <div key={item.id} className="bg-white rounded-xl shadow-md hover:shadow-xl transition transform hover:scale-105">
            <img src={item.img} alt={item.name} className="w-full h-56 object-cover rounded-t-xl" />
            <div className="p-4">
              <h2 className="text-lg font-semibold">{item.name}</h2>
              <p className="text-red-600 font-bold mt-2">{item.price}</p>
              <button className="mt-4 bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded-lg w-full transition">
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Bags;
