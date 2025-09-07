import React, { useState } from 'react';

// Define the type for a product object to ensure type safety
interface Product {
  name: string;
  image: string;
  category: string;
  price: number;
  oldPrice: number | null;
  discount: string | null;
  isFeatured: boolean;
}

const productsData: Product[] = [
  {
    name: 'Microsoft Xbox One Wireless Controller',
    image: 'https://placehold.co/300x300/e5e7eb/6b7280?text=Xbox+Controller',
    category: 'ELECTRONICS',
    price: 25.00,
    oldPrice: 45.00,
    discount: '44%',
    isFeatured: false,
  },
  {
    name: 'JBL On-Ear Headphones',
    image: 'https://placehold.co/300x300/e5e7eb/6b7280?text=JBL+Headphones',
    category: 'ELECTRONICS',
    price: 124.00,
    oldPrice: null,
    discount: null,
    isFeatured: true,
  },
  {
    name: 'JBL Wireless Bluetooth Speaker',
    image: 'https://placehold.co/300x300/e5e7eb/6b7280?text=JBL+Speaker',
    category: 'ELECTRONICS',
    price: 96.00,
    oldPrice: null,
    discount: null,
    isFeatured: false,
  },
  {
    name: 'Apple Watch Series 5 Black Milanese',
    image: 'https://placehold.co/300x300/e5e7eb/6b7280?text=Apple+Watch',
    category: 'ELECTRONICS',
    price: 599.00,
    oldPrice: null,
    discount: null,
    isFeatured: false,
  },
  {
    name: 'Samsung Gear 360 Camera',
    image: 'https://placehold.co/300x300/e5e7eb/6b7280?text=Samsung+Camera',
    category: 'ELECTRONICS',
    price: 29.00,
    oldPrice: 49.00,
    discount: '40%',
    isFeatured: false,
  },
  {
    name: 'Samsung Galaxy S20 8GB RAM 128GB ROM',
    image: 'https://placehold.co/300x300/e5e7eb/6b7280?text=Samsung+Phone',
    category: 'ELECTRONICS',
    price: 250.00,
    oldPrice: null,
    discount: null,
    isFeatured: false,
  },
];

const Product: React.FC = () => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const itemsPerSlide = 3;
  const itemWidth = 100 / itemsPerSlide;

  const nextSlide = () => {
    setCurrentSlideIndex(prevIndex => Math.min(prevIndex + 1, productsData.length - itemsPerSlide));
  };

  const prevSlide = () => {
    setCurrentSlideIndex(prevIndex => Math.max(prevIndex - 1, 0));
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8 flex flex-col items-center">
      <div className="w-full max-w-7xl bg-white p-6 md:p-10 shadow-lg rounded-2xl">
        <div className="flex justify-between items-center mb-6">
          <div className="flex items-center space-x-4">
            <h2 className="text-3xl font-extrabold text-gray-800 tracking-tight">BEST SELLING PRODUCTS</h2>
            <div className="h-1 w-20 bg-yellow-400 rounded-full"></div>
          </div>
          <button className="bg-gray-800 text-white py-2 px-6 rounded-lg text-sm font-semibold hover:bg-gray-700 transition duration-300 shadow-md">
            VIEW ALL
          </button>
        </div>
        
        <div className="relative">
          {/* Carousel Container */}
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlideIndex * itemWidth}%)` }}
            >
              {productsData.map((product, index) => (
                <div key={index} className="flex-shrink-0 w-1/3 p-4">
                  <div className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 overflow-hidden relative group">
                    {/* Discount/Featured badges */}
                    {product.discount && (
                      <span className="absolute top-4 left-4 bg-green-500 text-white text-xs font-bold px-2 py-1 rounded-full z-10">
                        {product.discount} OFF
                      </span>
                    )}
                    {product.isFeatured && (
                      <span className="absolute top-4 right-4 bg-yellow-400 text-gray-800 text-xs font-bold px-2 py-1 rounded-full z-10">
                        FEATURED
                      </span>
                    )}
                    
                    <button className="absolute top-4 right-4 text-gray-400 hover:text-red-500 transition-colors duration-200 z-10">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                      </svg>
                    </button>
                    
                    {/* Product Image */}
                    <div className="aspect-w-16 aspect-h-9 p-4 flex justify-center items-center">
                      <img src={product.image} alt={product.name} className="w-full h-auto object-contain rounded-lg transition-transform duration-300 group-hover:scale-105" />
                    </div>

                    {/* Product Details */}
                    <div className="p-6 text-center">
                      <span className="text-xs text-gray-500 font-medium tracking-wide uppercase">{product.category}</span>
                      <h3 className="text-xl font-semibold mt-1">{product.name}</h3>
                      <div className="flex justify-center items-baseline mt-2">
                        <span className="text-gray-900 font-bold text-lg">${product.price}</span>
                        {product.oldPrice && (
                          <span className="ml-2 text-sm text-gray-400 line-through">${product.oldPrice}</span>
                        )}
                      </div>

                      {/* Action Buttons */}
                      <div className="flex justify-center mt-4 space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <button className="flex items-center justify-center p-3 rounded-full bg-yellow-400 text-gray-800 shadow-md hover:bg-yellow-500 transition-colors">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M10 2a5 5 0 00-5 5v2a2 2 0 00-2 2v5a2 2 0 002 2h10a2 2 0 002-2v-5a2 2 0 00-2-2V7a5 5 0 00-5-5zm2 5v2h2V7a2 2 0 00-2-2 3 3 0 00-3-3V7h2V5a1 1 0 011-1z" />
                          </svg>
                        </button>
                        <button className="flex items-center justify-center p-3 rounded-full bg-yellow-400 text-gray-800 shadow-md hover:bg-yellow-500 transition-colors">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.033 5.31 12 7 12h11c.49 0 .964-.093 1.404-.263l.863-4.103A1 1 0 0017.905 6H9.42l-1-4H3zm4 11a1 1 0 100 2h10a1 1 0 100-2H7zm0-5l-1 4a1 1 0 00.992 1H17.9a1 1 0 00.985-1.11L18.4 6H7.9a1 1 0 00-1 .92l-.305 1.222a1 1 0 00-.01.042l-1.358 5.43-.893.892z" />
                          </svg>
                        </button>
                        <button className="flex items-center justify-center p-3 rounded-full bg-yellow-400 text-gray-800 shadow-md hover:bg-yellow-500 transition-colors">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Carousel Controls */}
          <button 
            onClick={prevSlide}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white text-gray-600 p-3 rounded-full shadow-lg hover:bg-gray-200 transition-colors duration-300 z-20"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button 
            onClick={nextSlide}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white text-gray-600 p-3 rounded-full shadow-lg hover:bg-gray-200 transition-colors duration-300 z-20"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;
