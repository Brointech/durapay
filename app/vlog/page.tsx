"use client";

export default function BlogSection() {
  const categories = [
    "All",
    "Banking",
    "Transfers",
    "Savings",
    "Virtual Cards",
    "Rewards",
  ];

  const posts = [
    {
      category: "Banking",
      title: "How to Manage Your Everyday Finances Like a Pro",
      description:
        "Simple strategies to organize spending, save consistently, and stay financially healthy with Durapay.",
      image: "https://images.unsplash.com/photo-1556740749-887f6717d7e4",
      date: "June 2026",
    },
    {
      category: "Transfers",
      title: "Send Money Instantly Across Nigeria",
      description:
        "Learn how real-time transfers help you move money faster and more securely.",
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f",
      date: "June 2026",
    },
    {
      category: "Virtual Cards",
      title: "Why Virtual USD Cards Are Essential in 2026",
      description:
        "Shop globally, pay for subscriptions, and stay protected online.",
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3",
      date: "May 2026",
    },
    {
      category: "Savings",
      title: "Build Better Saving Habits With Automated Goals",
      description:
        "Turn your future plans into achievable milestones with smart savings tools.",
      image: "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e",
      date: "May 2026",
    },
    {
      category: "Rewards",
      title: "How Cashback Rewards Help You Keep More Money",
      description:
        "Discover how every transaction can contribute toward future savings.",
      image: "https://images.unsplash.com/photo-1554224154-26032ffc0d07",
      date: "April 2026",
    },
    {
      category: "Gift Cards",
      title: "The Smart Way to Buy and Redeem Gift Cards",
      description:
        "Access your favorite global brands while enjoying competitive rates.",
      image: "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da",
      date: "April 2026",
    },
  ];

  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Heading */}
        <div className="max-w-3xl mb-12">
          <span className="text-[#1154da] font-semibold">
            Insights & Resources
          </span>

          <h2 className="mt-4 text-4xl lg:text-6xl font-bold tracking-tight text-black">
            Financial knowledge for modern living
          </h2>

          <p className="mt-6 text-lg text-gray-600">
            Explore practical guides, money tips, banking insights, and updates
            designed to help you make smarter financial decisions every day.
          </p>
        </div>

        {/* Categories */}
        <div className="flex flex-wrap gap-3 mb-12">
          {categories.map((item) => (
            <button
              key={item}
              className="px-5 py-2 rounded-full border border-gray-200 hover:border-black hover:bg-black hover:text-white text-black transition-all duration-300"
            >
              {item}
            </button>
          ))}
        </div>

        {/* Featured Post */}
        <div className="grid lg:grid-cols-2 gap-10 mb-20 items-center">
          <div className="overflow-hidden rounded-3xl">
            <img
              src="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c"
              alt=""
              className="w-full h-[300px] md:h-[450px] object-cover hover:scale-105 transition duration-700"
            />
          </div>

          <div>
            <span className="text-[#1154da] font-semibold">Featured Story</span>

            <h3 className="mt-4 text-3xl lg:text-5xl font-bold text-black leading-tight">
              The Future of Digital Banking in Africa
            </h3>

            <p className="mt-6 text-gray-600 text-lg leading-relaxed">
              Discover how digital banking, instant transfers, virtual cards,
              rewards, and financial innovation are transforming everyday money
              management.
            </p>

            <button className="mt-8 bg-black text-white px-7 py-3 rounded-full hover:bg-gray-800 transition">
              Read article
            </button>
          </div>
        </div>

        {/* Blog Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <article key={index} className="group cursor-pointer">
              <div className="overflow-hidden rounded-2xl">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-64 object-cover group-hover:scale-105 transition duration-700"
                />
              </div>

              <div className="mt-5">
                <div className="flex items-center gap-3 text-sm text-gray-500">
                  <span>{post.category}</span>
                  <span>•</span>
                  <span>{post.date}</span>
                </div>

                <h3 className="mt-3 text-2xl font-bold text-black group-hover:text-[#1154da] transition">
                  {post.title}
                </h3>

                <p className="mt-3 text-gray-600 leading-relaxed">
                  {post.description}
                </p>

                <button className="mt-5 font-semibold text-black group-hover:text-[#1154da] transition">
                  Read more →
                </button>
              </div>
            </article>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-20 text-center">
          <button className="bg-[#1154da] text-white px-8 py-4 rounded-full font-semibold hover:opacity-90 transition">
            View all articles
          </button>
        </div>
      </div>
    </section>
  );
}
