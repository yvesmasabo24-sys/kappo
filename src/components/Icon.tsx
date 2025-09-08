// src/components/Icons.tsx
import { FaShoppingCart, FaHeart, FaUser, FaSearch } from "react-icons/fa";

const Icons = () => {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Icons Showcase</h1>
      <div className="flex gap-8 text-4xl text-yellow-500">
        <FaShoppingCart title="Cart" />
        <FaHeart title="Wishlist" />
        <FaUser title="User" />
        <FaSearch title="Search" />
      </div>
    </div>
  );
};

export default Icons;
