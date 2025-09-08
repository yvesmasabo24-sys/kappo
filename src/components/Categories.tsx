
const Categories = () => {
  const categories = [
    "Electronics",
    "Fashion",
    "Smartphones",
    "Headphones",
    "Tech News",
  ];

  return (
    <div className="container mx-auto px-6 py-10">
      <h1 className="text-4xl font-bold mb-6 text-yellow-600">Categories</h1>
      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {categories.map((cat, index) => (
          <li
            key={index}
            className="bg-white shadow-md rounded-xl p-6 text-center text-gray-800 font-semibold hover:bg-yellow-100 transition cursor-pointer"
          >
            {cat}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Categories;
