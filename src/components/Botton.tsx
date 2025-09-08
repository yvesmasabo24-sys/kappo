// src/components/Buttons.tsx
const Buttons = () => {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Buttons Showcase</h1>
      <div className="space-x-4">
        <button className="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600">
          Primary Button
        </button>
        <button className="bg-gray-200 text-gray-800 px-4 py-2 rounded hover:bg-gray-300">
          Secondary Button
        </button>
        <button className="border border-gray-400 px-4 py-2 rounded hover:bg-gray-100">
          Outline Button
        </button>
        <button className="bg-green-500 text-white px-4 py-2 rounded-full hover:bg-green-600">
          Rounded Button
        </button>
      </div>
    </div>
  );
};

export default Buttons;
