import React from "react"

const About = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center">
      {/* Content Section */}
      <div className="w-full max-w-6xl px-6 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Left */}
          <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Who We Are
            </h2>

            <p className="text-gray-600 leading-relaxed">
            Welcome to FactByte, your go-to platform for the latest and most relevant news across various categories. Our mission is to provide timely, accurate, and engaging content that keeps you informed about the world around you.

What We Offer

Curated News Articles - Stay updated with articles categorized into different sections such as World News, Technology, Business, Health, and more.

User-Friendly Experience - Our platform is designed to ensure smooth navigation, making it easy for you to find news that matters to you.

Admin-Managed Content - Our dedicated admin team carefully selects and publishes news articles to maintain credibility and relevance.

Engagement & Awareness - We aim to keep our readers well-informed by delivering high-quality content that sparks curiosity and discussion.

Why Choose Us?

At FactByte, we believe in delivering news that is factual, well-researched, and insightful. Whether you're a tech enthusiast, a business professional, or someone who simply loves staying updated, our platform has something for everyone.
            </p>
          </div>

          {/* Right (image) */}
          <div className="relative">
            <img
              src="https://images.pexels.com/photos/723072/pexels-photo-723072.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt=""
              className="rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
            />
          </div>
        </div>
      </div>

      {/* Team Section */}
      {/* <div className="w-full bg-gray-100 py-12">
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-8">
          Meet Our Team
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="text-center">
            <img
              src="https://cdn-icons-png.flaticon.com/128/3135/3135715.png"
              alt="Team member"
              className="w-32 h-32 rounded-full mx-auto mb-4"
            />

            <h3 className="text-xl font-semibold text-gray-700">
              Jaime Lannister
            </h3>

            <p className="text-gray-500">CEO</p>
          </div>

          <div className="text-center">
            <img
              src="https://cdn-icons-png.flaticon.com/128/4140/4140037.png"
              alt="Team member"
              className="w-32 h-32 rounded-full mx-auto mb-4"
            />

            <h3 className="text-xl font-semibold text-gray-700">
              Cersei Lannister
            </h3>

            <p className="text-gray-500">CTO</p>
          </div>

          <div className="text-center">
            <img
              src="https://cdn-icons-png.flaticon.com/128/6997/6997662.png"
              alt="Team member"
              className="w-32 h-32 rounded-full mx-auto mb-4"
            />

            <h3 className="text-xl font-semibold text-gray-700">
              Daenerys Targaryen
            </h3>

            <p className="text-gray-500">Lead Designer</p>
          </div>
        </div>
      </div> */}
    </div>
  )
}

export default About