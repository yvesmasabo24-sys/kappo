import React from 'react';

// --- Type Definitions ---
type ProductType = {
  id: string;
  name: string;
  category: string;
  price: number | { min: number; max: number };
  image: string;
  originalPrice?: number;
  discountPercentage?: number;
  isFeatured?: boolean;
  soldCount?: number;
  availableCount?: number;
};

// --- Mock Data ---
const MOCK_HOT_DEAL_PRODUCT: ProductType = {
  id: 'hot-deal-1',
  name: 'Apple Watch Series 5',
  category: 'ELECTRONICS',
  price: { min: 499, max: 599 },
  image: 'https://www.bing.com/images/search?view=detailV2&ccid=FifjZl6O&id=1816AF0156E86802F8DF7EF5249CC90F85337561&thid=OIP.FifjZl6OXXZ6cQmxRqX4CQHaE8&mediaurl=https%3a%2f%2fimages.pexels.com%2fphotos%2f280250%2fpexels-photo-280250.jpeg%3fcs%3dsrgb%26dl%3dpexels-pixabay-280250.jpg%26fm%3djpg&cdnurl=https%3a%2f%2fth.bing.com%2fth%2fid%2fR.1627e3665e8e5d767a7109b146a5f809%3frik%3dYXUzhQ%252fJnCT1fg%26pid%3dImgRaw%26r%3d0&exph=1335&expw=2000&q=watch+picture&FORM=IRPRST&ck=0E535B4FAB762F513509AF7166FD1825&selectedIndex=0&itb=0',
  discountPercentage: 17,
  soldCount: 50,
  availableCount: 75,
};

const MOCK_FEATURED_PRODUCTS: ProductType[] = [
  {
    id: 'feat-1',
    name: 'Apple iPhone 11 Pro Max',
    category: 'ELECTRONICS',
    price: 199.0,
    originalPrice: 254.0,
    image: 'https://via.placeholder.com/300x300/F0F0F0/000000?text=iPhone+11',
    discountPercentage: 22,
  },
  {
    id: 'feat-2',
    name: 'Apple Watch Series 5',
    category: 'ELECTRONICS',
    price: { min: 499, max: 599 },
    image: 'https://via.placeholder.com/300x300/F0F0F0/000000?text=Apple+Watch',
    discountPercentage: 17,
  },
  {
    id: 'feat-3',
    name: 'JBL Wireless Bluetooth Speaker',
    category: 'ELECTRONICS',
    price: 96.0,
    image: 'https://via.placeholder.com/300x300/F0F0F0/000000?text=JBL+Speaker',
    isFeatured: true,
  },
  {
    id: 'feat-4',
    name: 'JBL On-Ear Headphones',
    category: 'ELECTRONICS',
    price: 124.0,
    image: 'https://via.placeholder.com/300x300/F0F0F0/000000?text=JBL+Headphones',
    isFeatured: true,
  },
  {
    id: 'feat-5',
    name: 'Apple AirPods with Wireless',
    category: 'ELECTRONICS',
    price: 85.0,
    image: 'https://via.placeholder.com/300x300/F0F0F0/000000?text=AirPods',
    isFeatured: true,
  },
  {
    id: 'feat-5',
    name: 'Apple AirPods with Wireless',
    category: 'ELECTRONICS',
    price: 85.0,
    image: 'https://via.placeholder.com/300x300/F0F0F0/000000?text=AirPods',
    isFeatured: true,
  },
  {
    id: 'feat-5',
    name: 'Apple AirPods with Wireless',
    category: 'ELECTRONICS',
    price: 85.0,
    image: 'https://via.placeholder.com/300x300/F0F0F0/000000?text=AirPods',
    isFeatured: true,
  },
  {
    id: 'feat-5',
    name: 'Apple AirPods with Wireless',
    category: 'ELECTRONICS',
    price: 85.0,
    image: 'https://via.placeholder.com/300x300/F0F0F0/000000?text=AirPods',
    isFeatured: true,
  },
];

// --- Helper Function ---
const formatPrice = (price: number | { min: number; max: number }) =>
  typeof price === 'number' ? `$${price.toFixed(2)}` : `$${price.min.toFixed(2)} - $${price.max.toFixed(2)}`;

// --- Sub-Components ---
const HotDealsSection: React.FC<{ product: ProductType }> = ({ product }) => {
  const soldPercentage =
    product.soldCount && product.availableCount
      ? (product.soldCount / (product.soldCount + product.availableCount)) * 100
      : 0;

  return (
    <div className="flex-1.5 p-5 bg-white border border-gray-200 rounded-lg shadow-sm">
      <div className="pb-2" style={{ borderBottom: '2px solid #ffcc00' }}>
        <h2 className="text-xl font-medium">HOT DEALS</h2>
      </div>
      <div className="mt-5 flex flex-col items-center relative">
        <div className="relative w-full">
          {product.discountPercentage && (
            <span
              className="absolute top-2 left-2 text-black px-2 py-1 text-xs rounded font-bold"
              style={{ backgroundColor: '#ffcc00' }}
            >
              {product.discountPercentage}% OFF
            </span>
          )}
          <img src={product.image} alt={product.name} className="w-full h-auto rounded-md" />
          <button className="absolute top-2 right-2 bg-white bg-opacity-80 rounded-full w-8 h-8 flex items-center justify-center text-lg shadow-sm cursor-pointer">
            ♡
          </button>
          {/* <div
            className="absolute -bottom-10 -left-5 text-white rounded-full w-24 h-24 flex flex-col items-center justify-center shadow-lg"
            style={{ backgroundColor: '#5cb85c' }}
          >
            <span className="text-xl font-bold">{formatPrice(typeof product.price === 'number' ? product.price : product.price.min)}</span>
          </div> */}
        </div>
        <div className="mt-16 w-full text-left">
          <p className="text-gray-500 text-sm">{product.category}</p>
          <h3 className="text-lg font-semibold my-1">{product.name}</h3>
          <p className="text-gray-700 font-bold mb-3">{formatPrice(product.price)}</p>
          {product.soldCount !== undefined && product.availableCount !== undefined && (
            <>
              <div className="w-full h-1.5 bg-gray-200 rounded-full mb-1">
                <div
                  className="h-full rounded-full"
                  style={{ width: `${soldPercentage}%`, backgroundColor: '#ffcc00' }}
                ></div>
              </div>
              <div className="flex justify-between text-xs text-gray-600">
                <span>Already Sold: {product.soldCount}</span>
                <span>Available: {product.availableCount}</span>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

const ProductCard: React.FC<{ product: ProductType }> = ({ product }) => {
  return (
    <div className="group bg-white border border-gray-200 rounded-lg shadow-sm p-2 text-center relative overflow-hidden">
      <div className="relative h-40 flex items-center justify-center mb-2">
        <img src={product.image} alt={product.name} className="max-w-full max-h-full object-contain" />
        {product.isFeatured && (
          <span
            className="absolute top-2 left-2 text-black px-1.5 py-0.5 text-xs rounded font-bold"
            style={{ backgroundColor: '#ffcc00' }}
          >
            FEATURED
          </span>
        )}
        {product.discountPercentage && (
          <span
            className="absolute top-2 left-2 text-black px-1.5 py-0.5 text-xs rounded font-bold"
            style={{ backgroundColor: '#ffcc00' }}
          >
            {product.discountPercentage}% OFF
          </span>
        )}
        <button className="absolute top-1 right-1 bg-white bg-opacity-80 rounded-full w-6 h-6 flex items-center justify-center text-sm shadow-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          ♡
        </button>
        {/* <div className="absolute bottom-[-40px] left-0 right-0 flex justify-center gap-2 group-hover:bottom-2 transition-all duration-300">
          <button className="bg-black text-white rounded-full w-8 h-8 flex items-center justify-center">🛒</button>
          <button className="bg-black text-white rounded-full w-8 h-8 flex items-center justify-center">🔍</button>
          <button className="bg-black text-white rounded-full w-8 h-8 flex items-center justify-center">❤</button>
        </div> */}
      </div>
      <div className="text-left mt-2">
        <p className="text-gray-500 text-xs">{product.category}</p>
        <h3 className="text-sm font-semibold mt-1 mb-1">{product.name}</h3>
        <p className="font-bold text-gray-800">
          {product.originalPrice && (
            <del className="text-gray-400 font-normal mr-1">${product.originalPrice.toFixed(2)}</del>
          )}
          {formatPrice(product.price)}
        </p>
      </div>
    </div>
  );
};




const FeaturedProductsSection: React.FC<{ products: ProductType[] }> = ({ products }) => {
  return (
    <div className="flex-3">
      <div className="flex justify-between items-center pb-2" style={{ borderBottom: '2px solid #ffcc00' }}>
        <h2 className="text-xl font-medium">FEATURED PRODUCTS</h2>
        <a href="#view-all" className="bg-gray-800 text-white px-4 py-2 text-sm rounded-md">
          VIEW ALL
        </a>
      </div>
      <div className="grid grid-cols-4 gap-5 mt-5">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

// --- Main Page Component ---
const ProductPage: React.FC = () => {
  return (
    <div className="flex p-5 bg-gray-100 font-sans gap-5">
      <HotDealsSection product={MOCK_HOT_DEAL_PRODUCT} />
      <FeaturedProductsSection products={MOCK_FEATURED_PRODUCTS} />
    </div>
  );
};

export default ProductPage;
