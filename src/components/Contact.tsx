const Contact = () => {
  return (
    <div className="p-8 bg-white rounded-xl shadow">
      <h1 className="text-3xl font-bold mb-4">Contact Us</h1>
      <p className="text-gray-600 mb-6">
        Have a question? Send us a message and we’ll get back to you.
      </p>

      <form className="grid gap-4 max-w-xl">
        <input
          type="text"
          placeholder="Your Name"
          className="border rounded-lg px-4 py-3 outline-none focus:ring w-full"
        />
        <input
          type="email"
          placeholder="Your Email"
          className="border rounded-lg px-4 py-3 outline-none focus:ring w-full"
        />
        <textarea
          placeholder="Message"
          rows={5}
          className="border rounded-lg px-4 py-3 outline-none focus:ring w-full"
        />
        <button
          type="submit"
          className="bg-yellow-500 text-white px-6 py-3 rounded-lg hover:bg-yellow-600 transition"
          onClick={(e) => { e.preventDefault(); alert("Message submitted! (demo)"); }}
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default Contact;
