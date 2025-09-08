// src/components/ShopLayout.tsx
import { Outlet, Link } from "react-router-dom";

const ShopLayout = () => {
  return (
    <div className="flex">
      {/* Sidebar */}
      <aside className="w-64 bg-white shadow p-4">
        <h2 className="text-lg font-bold mb-4">Shop by Categories</h2>
        <ul className="space-y-2">
          <li>
            <Link to="tshirts" className="hover:text-yellow-500">T-Shirts</Link>
          </li>
          <li>
            <Link to="jackets" className="hover:text-yellow-500">Jackets</Link>
          </li>
          <li>
            <Link to="shoes" className="hover:text-yellow-500">Shoes</Link>
          </li>
          <li>
            <Link to="dresses" className="hover:text-yellow-500">Dresses</Link>
          </li>
          <li>
            <Link to="skirts" className="hover:text-yellow-500">Skirts</Link>
          </li>
          <li>
            <Link to="bags" className="hover:text-yellow-500">Bags</Link>
          </li>
          <li>
            <Link to="hats" className="hover:text-yellow-500">Hats</Link>
          </li>
          <li>
            <Link to="watches" className="hover:text-yellow-500">Watches</Link>
          </li>
          <li>
            <Link to="jewellery" className="hover:text-yellow-500">Jewellery</Link>
          </li>
          <li>
            <Link to="jeans" className="hover:text-yellow-500">Jeans</Link>
          </li>
          <li>
            <Link to="tops" className="hover:text-yellow-500">Tops</Link>
          </li>
          <li>
            <Link to="accessories" className="hover:text-yellow-500">Accessories</Link>
          </li>
          <li>
            <Link to="bags-backpacks" className="hover:text-yellow-500">Bags & Backpacks</Link>
          </li>
        </ul>
      </aside>

      {/* Content */}
      <main className="flex-1 p-6">
        <Outlet />
      </main>
    </div>
  );
};

export default ShopLayout;
