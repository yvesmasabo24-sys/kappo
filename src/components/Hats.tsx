 const Hats = () => {
  const products = [
    { id: 1, name: "Classic Baseball Cap", price: "$20", img: "https://via.placeholder.com/200" },
    { id: 2, name: "Wool Winter Hat", price: "$25", img: "https://via.placeholder.com/200" },
    { id: 3, name: "Straw Beach Hat", price: "$30", img: "https://via.placeholder.com/200" },
    { id: 4, name: "Fedora Hat", price: "$35", img: "https://via.placeholder.com/200" },
  ];

  return (
    <div className="p-6">
      <div className="bg-gradient-to-r from-indigo-400 to-indigo-600 text-white p-8 rounded-2xl shadow-lg mb-8 text-center">
        <h1 className="text-4xl font-extrabold">Hats Collection</h1>
        <p className="mt-2 text-lg">Style your look with trendy hats.</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((item) => (
          <div key={item.id} className="bg-white rounded-xl shadow-md hover:shadow-xl transition transform hover:scale-105">
            <img src={item.img} alt={item.name} className="w-full h-56 object-cover rounded-t-xl" />
            <div className="p-4">
              <h2 className="text-lg font-semibold">{item.name}</h2>
              <p className="text-indigo-600 font-bold mt-2">{item.price}</p>
              <button className="mt-4 bg-indigo-500 hover:bg-indigo-600 text-white py-2 px-4 rounded-lg w-full transition">
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Hats;
