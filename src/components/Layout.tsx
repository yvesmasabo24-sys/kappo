// src/components/Layout.tsx
import { Outlet } from "react-router-dom";
import TopHeader from "./TopHeader";
import Header from "./Header";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

import Card from "./Card";
import phone from '../assets/phone.jpg';
import headphone from "../assets/headphone.jpg";
import Footer from "./Footer";

const Layout = () => {
  const products = [
    {
      title: "smartphone",
      description: "best smartphone for you ",
      image: phone,
      price: 49.99,
      content: "SHOP NOW",
    },
    {
      title: "Headphone",
      description: "High quality sound",
      image: headphone,
      price: 99.99,
      content: "SHOP NOW",
    },
  ];

  return (
    <div>
      {/* Headers */}
      <TopHeader />
      <Header />
      <Navbar />

      <div className="container mx-auto flex px-auto py-6">
        {/* Sidebar */}
        <Sidebar />

        <div className="flex-1 ml-6">
          

          {/* Page Content from Routes */}
          <Outlet />
        </div>
      </div>

      {/* Cards Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10 mt-6 w-555 h-50 justify-evenly px-20">
        {products.map((product, index) => (
          <Card
            key={index}
            title={product.title}
            description={product.description}
            image={product.image}
            price={product.price}
            content={product.content}
            onClick={() => alert(`${product.title} clicked!`)}
          />
        ))}
      </div>

      <Footer />
    </div>
  );
};

export default Layout;
