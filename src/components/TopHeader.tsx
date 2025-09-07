// src/components/TopHeader.tsx
import { Link } from "react-router-dom";

const TopHeader = () => {
  return (
    <div className="bg-yellow-400 text-sm">
      <div className="container mx-auto flex justify-between items-center px-4 py-2">
        {/* Left */}
        <div className="flex gap-4">
          <div className="relative group">
            <button className="flex items-center gap-1">
              ENGLISH
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10
                    10.586l3.293-3.293a1 1 0 111.414
                    1.414l-4 4a1 1 0 01-1.414
                    0l-4-4a1 1 0 010-1.414z"
                />
              </svg>
            </button>
            <ul className="absolute hidden group-hover:block bg-white shadow-md mt-1">
              <li className="px-4 py-2 hover:bg-gray-100">Français</li>
              <li className="px-4 py-2 hover:bg-gray-100">Deutsch</li>
              <li className="px-4 py-2 hover:bg-gray-100">العربية</li>
            </ul>
          </div>

          <div className="relative group">
            <button className="flex items-center gap-1">
              $ DOLLAR (US)
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414
                    0L10 10.586l3.293-3.293a1 1 0
                    111.414 1.414l-4 4a1 1 0
                    01-1.414 0l-4-4a1 1 0
                    010-1.414z"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Right */}
        <div className="flex gap-6">
          <Link to="#">WELCOME TO OUR STORE!</Link>
          <Link to="#">BLOG</Link>
          <Link to="#">FAQ</Link>
          <Link to="#">CONTACT US</Link>
        </div>
      </div>
    </div>
  );
};

export default TopHeader;
