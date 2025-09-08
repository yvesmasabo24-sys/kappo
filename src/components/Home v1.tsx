
const HomeV1 = () => {
  return (
    <div className="p-6 space-y-8">
     
      <header>
        <h1 className="text-3xl font-bold mb-4">Home Version 1</h1>
        <p className="text-gray-600">Welcome to Home V1. This is the first homepage layout.</p>
      </header>

     
      <section className="bg-yellow-400 text-white p-8 rounded-lg shadow">
        <h2 className="text-2xl font-bold mb-2">Big Sale Today!</h2>
        <p className="mb-4">Get the best deals on electronics and fashion.</p>
        <button className="bg-black px-4 py-2 rounded hover:bg-gray-800">Shop Now</button>
      </section>

   
      <section>
        <h2 className="text-xl font-bold mb-4">Featured Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          <div className="border rounded-lg p-4 shadow">
            <h3 className="font-semibold">Smartphone</h3>
            <p className="text-sm text-gray-500">Best smartphone for you</p>
            <p className="mt-2 font-bold">$499.99</p>
          </div>

          <div className="border rounded-lg p-4 shadow">
            <h3 className="font-semibold">Headphone</h3>
            <p className="text-sm text-gray-500">High quality sound</p>
            <p className="mt-2 font-bold">$99.99</p>
          </div>

          <div className="border rounded-lg p-4 shadow">
            <h3 className="font-semibold">Smart Watch</h3>
            <p className="text-sm text-gray-500">Track your fitness</p>
            <p className="mt-2 font-bold">$149.99</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomeV1;

