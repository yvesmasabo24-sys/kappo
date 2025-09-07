// src/components/Sidebar.tsx
import { useState } from "react";
import { Link } from "react-router-dom";

interface Category {
  name: string;
  path: string;
  subcategories?: string[];
}

const categories: Category[] = [
  { name: "Men's Clothing", path: "/men-clothing", subcategories: ["T-Shirts", "Jackets", "Jeans"] },
  { name: "Women's Clothing", path: "/women-clothing", subcategories: ["Dresses", "Tops", "Skirts"] },
  { name: "Accessories", path: "/accessories" },
  { name: "Shoes", path: "/shoes" },
  { name: "Jewellery", path: "/jewellery" },
  { name: "Bags & Backpacks", path: "/bags-backpacks", subcategories: ["Handbags", "Backpacks"] },
  { name: "Shirts", path: "/shirts" },
];

const Sidebar = () => {
  const [openCategory, setOpenCategory] = useState<string | null>(null);
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const toggleCategory = (name: string) => {
    setOpenCategory(openCategory === name ? null : name);
  };

  return (
    <aside className="w-64 ml-30 border-r bg-white">
      {/* Category List */}
      <ul className="divide-x divide-y">
        {categories.map((cat) => (
          <li key={cat.name} className="relative">
            <button
              onClick={() => cat.subcategories && toggleCategory(cat.name)}
              className="w-64 text-left px-4 py-3 hover:bg-gray-50 flex justify-between items-center"
            >
              <Link to={cat.path}>{cat.name}</Link>
              {cat.subcategories && (
                <i
                  className={`fas fa-chevron-right transition-transform ${
                    openCategory === cat.name ? "rotate-90" : ""
                  }`}
                ></i>
              )}
            </button>

            {/* Subcategories */}
            {cat.subcategories && openCategory === cat.name && (
              <ul className="bg-gray-50 border-l ml-6 animate-slideDown">
                {cat.subcategories.map((sub) => (
                  <li key={sub} className="px-6 py-2 hover:bg-gray-100">
                    <Link to="#">{sub}</Link>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>

      {/* Discount circle trigger */}
      <div className="relative mt-6 flex justify-center">
        <button
          onClick={() => setIsPopupOpen(true)}
          className="bg-green-500 text-white rounded-full w-16 h-16 flex flex-col items-center justify-center shadow-lg hover:scale-105 transition-transform"
        >
          <span className="text-xs">$</span>
          <span className="text-lg font-bold">35</span>
        </button>
      </div>

      {/* Popup Modal */}
      {isPopupOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          {/* Modal content */}
          <div className="bg-white p-6 rounded-lg shadow-lg relative w-80">
            {/* Close button */}
            <button
              onClick={() => setIsPopupOpen(false)}
              className="absolute top-2 right-2 text-gray-600 hover:text-black"
            >
              ✖
            </button>

            {/* Discount Circle */}
            <div className="flex justify-center">
              <div className="bg-green-500 text-white rounded-full w-24 h-24 flex flex-col items-center justify-center shadow-lg">
                <span className="text-sm">$</span>
                <span className="text-2xl font-bold">35</span>
              </div>
            </div>

            {/* Optional text */}
            <p className="text-center mt-4 font-semibold text-gray-700">
              Limited Time Offer! 🎉
            </p>
          </div>
        </div>
      )}
    </aside>
  );
};

export default Sidebar;
