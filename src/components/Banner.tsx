// src/components/Banner.tsx
import phone2 from '../assets/phone2.jpg';


const Banner = () => {
  const products = [
    {
      title: "WIRELESS CHARGING STAND",
      subtitle: "BEST SMARTPHONE",
      discount: "Up To 70% Off",
      image: phone2,
    },
 
    // You can add more products here
  ];

  return (
    <div className="bg-gray-50 overflow-hidden relative min-w-20">
      <div className="flex animate-slideLeft whitespace-nowrap">
        {products.map((product, index) => (
          <div
            key={index}
            className="flex items-center justify-between min-w-10 p-8"
          >
            <div className="mr-2">
              <p className="text-yellow-500 font-semibold">{product.subtitle}</p>
              <h1 className="text-4xl font-bold">{product.title}</h1>
              <p className="text-lg">{product.discount}</p>
              <button className="bg-yellow-400 px-6 py-3 mt-4 font-semibold">
                BUY NOW
              </button>
            </div>
            <img src={product.image} alt={product.title} className="w-64" />
          </div>
        ))}
      </div>

      {/* <style>
        {`
          @keyframes slideLeft {
            0% { transform: translateX(0); }
            100% { transform: translateX(-100%); }
          }
          .animate-slideLeft {
            animation: slideLeft 15s linear infinite;
          }
        `}
      </style> */}
    </div>
  );
};

export default Banner;
