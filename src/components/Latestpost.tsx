
const LatestPosts = () => {
  const posts = [
    {
      title: "The Future of Electronics",
      date: "September 8, 2025",
      description: "Exploring how technology is shaping the way we live and shop.",
    },
    {
      title: "Why You Need Wireless Headphones",
      date: "August 25, 2025",
      description: "Comfort, portability, and high-quality sound in one package.",
    },
    {
      title: "Top 5 Smartphones of 2025",
      date: "August 10, 2025",
      description: "Discover the best phones with performance and design.",
    },
  ];

  return (
    <div className="container mx-auto px-6 py-10">
      <h1 className="text-4xl font-bold mb-6 text-yellow-600">Latest Posts</h1>
      <div className="space-y-6">
        {posts.map((post, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition"
          >
            <h2 className="text-2xl font-semibold mb-2">{post.title}</h2>
            <p className="text-gray-500 text-sm mb-3">{post.date}</p>
            <p className="text-gray-700 mb-4">{post.description}</p>
            <button className="bg-yellow-500 px-4 py-2 rounded-lg text-white font-semibold hover:bg-yellow-600 transition">
              Read More
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LatestPosts;
