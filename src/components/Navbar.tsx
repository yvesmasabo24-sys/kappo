
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 80) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`bg-white shadow transition-all duration-300 z-50 ${
        isSticky ? "fixed top-0 left-0 w-full shadow-lg" : "relative"
      }`}
    >
      <div className="container mx-auto flex items-center px-4 relative">
        {/* Logo / Sticky Brand */}
        <div className="px-6 py-3 font-semibold flex items-center gap-2 cursor-pointer">
          {isSticky ? (
            <Link to="/" className="text-2xl font-bold text-gray-900">
              kapee.
            </Link>
          ) : (
            <p className="bg-yellow-400 px-6 py-3 font-semibold">
              SHOP BY CATEGORIES <i className="fas fa-bars"></i>
            </p>
          )}
        </div>

        {/* Main Menu */}
        <ul className="flex gap-6 ml-8 relative">
          {/* HOME Dropdown */}
          <li className="group relative">
            <Link to="#" className="py-4 block">HOME</Link>
            <ul className="absolute left-0 top-full hidden group-hover:block bg-white shadow-md animate-slideDown min-w-[180px]">
              <li className="px-4 py-2 hover:bg-gray-100"><Link to="/home-v1">Homev1</Link></li>
              <li className="px-4 py-2 hover:bg-gray-100"><Link to="/home-v2">Homev2</Link></li>
              <li className="px-4 py-2 hover:bg-gray-100"><Link to="/home-v3">Homev3</Link></li>
            </ul>
          </li>

          {/* SHOP Mega Menu */}
          <li className="group relative">
            <Link to="#" className="py-4 block">SHOP</Link>
            <div className="absolute left-0 top-full hidden group-hover:flex bg-white shadow-lg animate-slideDown p-6 gap-12 w-[700px]">
              <div>
                <h4 className="font-semibold mb-2">Men</h4>
                <ul className="space-y-1">
                  <li><Link to="/tshirts" className="hover:text-yellow-500">T-Shirts</Link></li>
                  <li><Link to="/jackets" className="hover:text-yellow-500">Jackets</Link></li>
                  <li><Link to="/shoes" className="hover:text-yellow-500">Shoes</Link></li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Women</h4>
                <ul className="space-y-1">
                  <li><Link to="/dresses" className="hover:text-yellow-500">Dresses</Link></li>
                  <li><Link to="/skirts" className="hover:text-yellow-500">Skirts</Link></li>
                  <li><Link to="/bags" className="hover:text-yellow-500">Bags</Link></li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Accessories</h4>
                <ul className="space-y-1">
                  <li><Link to="/hats" className="hover:text-yellow-500">Hats</Link></li>
                  <li><Link to="/watches" className="hover:text-yellow-500">Watches</Link></li>
                  <li><Link to="/jewellery" className="hover:text-yellow-500">Jewellery</Link></li>
                </ul>
              </div>
            </div>
          </li>

          {/* PAGES Dropdown */}
          <li className="group relative">
            <Link to="#" className="py-4 block">PAGES</Link>
            <ul className="absolute left-0 top-full hidden group-hover:block bg-white shadow-md animate-slideDown min-w-[180px]">
              <li className="px-4 py-2 hover:bg-gray-100"><Link to="/about">About Us</Link></li>
              <li className="px-4 py-2 hover:bg-gray-100"><Link to="/contact">Contact</Link></li>
              <li className="px-4 py-2 hover:bg-gray-100"><Link to="/faq">FAQ</Link></li>
            </ul>
          </li>

          {/* BLOG Dropdown */}
          <li className="group relative">
            <Link to="#" className="py-4 block">BLOG</Link>
            <ul className="absolute left-0 top-full hidden group-hover:block bg-white shadow-md animate-slideDown min-w-[180px]">
              <li className="px-4 py-2 hover:bg-gray-100"><Link to="/latest-post">Latest Posts</Link></li>
              <li className="px-4 py-2 hover:bg-gray-100"><Link to="/categories">Categories</Link></li>
            </ul>
          </li>

          {/* ELEMENTS Dropdown */}
          <li className="group relative">
            <Link to="#" className="py-4 block">ELEMENTS</Link>
            <ul className="absolute left-0 top-full hidden group-hover:block bg-white shadow-md animate-slideDown min-w-[180px]">
              <li className="px-4 py-2 hover:bg-gray-100"><Link to="/buttons">Buttons</Link></li>
              <li className="px-4 py-2 hover:bg-gray-100"><Link to="/icons">Icons</Link></li>
            </ul>
          </li>

          {/* BUY NOW */}
          <li>
            <Link to="#" className="py-4 block">BUY NOW</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
