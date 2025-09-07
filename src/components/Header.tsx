// src/components/Header.tsx
import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";

const Header = () => {
  return (
    <div className="bg-white border-b">
      <div className="container mx-auto flex justify-between items-center px-4 py-4">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold text-gray-900">
          kapee.
        </Link>

        {/* SearchBar */}
        <SearchBar />

        {/* User + Cart */}
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2">
            <i className="fas fa-user-circle text-xl"></i>
            <Link to="#">HELLO, SIGN IN</Link>
          </div>
          <div className="flex items-center gap-4">
            <div className="relative">
              <i className="fas fa-heart text-xl"></i>
              <span className="absolute -top-2 -right-2 bg-yellow-400 text-xs w-5 h-5 flex items-center justify-center rounded-full">
                0
              </span>
            </div>
            <div className="flex items-center gap-1">
              <i className="fas fa-shopping-cart text-xl"></i>
              <span>Cart</span>
              <span className="font-bold">$0.00</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
