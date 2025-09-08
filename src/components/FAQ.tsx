const FAQ = () => {
  const faqs = [
    {
      q: "What products do you sell?",
      a: "We provide a wide range of electronics including laptops, phones, and accessories."
    },
    {
      q: "Do you offer delivery?",
      a: "Yes! We deliver across the country with fast and safe shipping."
    },
    {
      q: "Can I return a product?",
      a: "Absolutely. We have a 7-day return policy for all items in good condition."
    }
  ];

  return (
    <div className="p-10 bg-gradient-to-r from-blue-50 to-white min-h-screen">
      <h1 className="text-4xl font-bold text-center text-purple-600 mb-10">Frequently Asked Questions</h1>
      <div className="max-w-3xl mx-auto space-y-6">
        {faqs.map((faq, index) => (
          <div key={index} className="p-6 bg-white shadow-md rounded-xl hover:shadow-xl transition">
            <h2 className="text-xl font-semibold text-gray-800">{faq.q}</h2>
            <p className="mt-2 text-gray-600">{faq.a}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;

