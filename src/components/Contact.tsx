const Contact = () => {
  return (
    <div className="p-10 bg-gray-50 min-h-screen">
      <h1 className="text-4xl font-bold text-center text-green-600 mb-8">Contact Us</h1>
      <div className="max-w-2xl mx-auto bg-white shadow-lg rounded-xl p-8">
        <form className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700">Name</label>
            <input type="text" className="mt-1 block w-full border border-gray-300 rounded-lg p-2 focus:ring-green-400 focus:border-green-400" placeholder="Your Name" />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input type="email" className="mt-1 block w-full border border-gray-300 rounded-lg p-2 focus:ring-green-400 focus:border-green-400" placeholder="your@email.com" />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Message</label>
            <textarea rows={4} className="mt-1 block w-full border border-gray-300 rounded-lg p-2 focus:ring-green-400 focus:border-green-400" placeholder="Type your message..." />
          </div>

          <button type="submit" className="w-full bg-green-500 text-white font-semibold py-2 px-4 rounded-lg hover:bg-green-600 transition">
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
