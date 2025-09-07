// src/components/Card.tsx
import React from "react";

// Define props type
interface CardProps {
  title: string;
  description: string;
  image: string;
  price?: number; // optional
   content: string;
  onClick?: () => void; // optional click handler
}

const Card: React.FC<CardProps> = ({ title,content, description, image, price, onClick }) => {
  return (
    <div
      className="border rounded-lg shadow-md p-4 hover:shadow-xl transition cursor-pointer"
      onClick={onClick}
    >
      <img src={image} alt={title} className="w-full h-48 object-cover rounded-md mb-4" />
      <h2 className="text-xl font-bold mb-2">{title}</h2>
      <p className="text-gray-600 mb-2">{description}</p>
      {price && <p className="text-yellow-500 font-semibold">${price}</p>}
      <p className="bg-yellow-400 px-6 disabled:opacity-75 ...  py-3 mt-4 font-semibold w-20 h-16 rounded-md">{content}</p>
    </div>
  );
};

export default Card;
