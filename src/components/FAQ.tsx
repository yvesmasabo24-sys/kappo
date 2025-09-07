const FAQ = () => {
  const faqs = [
    { q: "How long is delivery?", a: "Typically 2–5 business days." },
    { q: "What is your return policy?", a: "30-day hassle-free returns." },
    { q: "Do you offer support?", a: "Yes, 24/7 chat and email support." },
  ];

  return (
    <div className="p-8 bg-white rounded-xl shadow">
      <h1 className="text-3xl font-bold mb-6">Frequently Asked Questions</h1>
      <div className="space-y-4">
        {faqs.map((item, i) => (
          <details key={i} className="bg-gray-50 rounded-lg p-4">
            <summary className="cursor-pointer font-semibold">
              {item.q}
            </summary>
            <p className="mt-2 text-gray-600">{item.a}</p>
          </details>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
