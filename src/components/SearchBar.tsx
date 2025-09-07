// src/components/SearchBar.tsx
const SearchBar = () => {
  return (
    <div className="flex items-center w-full max-w-3xl border rounded overflow-hidden">
      <input
        type="text"
        placeholder="Search for products, categories, brands, sku..."
        className="flex-grow px-4 py-2 outline-none"
      />
      <select className="px-2 py-2 border-l">
        <option>All Categories</option>
      </select>
      <button className="bg-gray-800 text-white px-4 py-2">
        🔍
      </button>
    </div>
  );
};

export default SearchBar;
