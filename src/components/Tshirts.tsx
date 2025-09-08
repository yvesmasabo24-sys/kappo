const TShirts = () => {
  const products = [
    { id: 1, name: "Casual Cotton T-Shirt", price: "$25", img: "https://via.placeholder.com/200" },
    { id: 2, name: "Graphic Print Tee", price: "$30", img: "https://via.placeholder.com/200" },
    { id: 3, name: "Slim Fit Polo", price: "$35", img: "https://via.placeholder.com/200" },
    { id: 4, name: "Oversized Streetwear Tee", price: "$28", img: "https://via.placeholder.com/200" },
  ];

  return (
    <div className="p-6">
     
      <div className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-white p-8 rounded-2xl shadow-lg mb-8 text-center">
        <h1 className="text-4xl font-extrabold">Men’s T-Shirts</h1>
        <p className="mt-2 text-lg">Stylish, comfy & perfect for every occasion.</p>
      </div>

    
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((item) => (
          <div key={item.id} className="bg-white rounded-xl shadow-md hover:shadow-xl transition transform hover:scale-105">
            <img src={item.img} alt={item.name} className="w-full h-56 object-cover rounded-t-xl" />
            <div className="p-4">
              <h2 className="text-lg font-semibold">{item.name}</h2>
              <p className="text-yellow-600 font-bold mt-2">{item.price}</p>
              <button className="mt-4 bg-yellow-500 hover:bg-yellow-600 text-white py-2 px-4 rounded-lg w-full transition">
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TShirts;
