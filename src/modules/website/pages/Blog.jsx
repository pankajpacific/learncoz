import React from 'react';
import { Calendar, User, Clock, ArrowRight, Search } from 'lucide-react';

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: "Top 10 Programming Languages to Learn in 2024",
      excerpt: "Discover the most in-demand programming languages that will boost your career in the tech industry.",
      author: "Sarah Johnson",
      date: "May 8, 2024",
      readTime: "5 min read",
      category: "Programming",
      image: "https://picsum.photos/seed/blog1/800/400.jpg"
    },
    {
      id: 2,
      title: "Cloud Computing Trends: What's Next in 2024",
      excerpt: "Explore the latest trends in cloud computing and how they're shaping the future of IT infrastructure.",
      author: "Michael Chen",
      date: "May 6, 2024",
      readTime: "7 min read",
      category: "Cloud Computing",
      image: "https://picsum.photos/seed/blog2/800/400.jpg"
    },
    {
      id: 3,
      title: "DevOps Best Practices for Modern Development",
      excerpt: "Learn the essential DevOps practices that can streamline your development workflow and improve deployment efficiency.",
      author: "Emily Davis",
      date: "May 4, 2024",
      readTime: "6 min read",
      category: "DevOps",
      image: "https://picsum.photos/seed/blog3/800/400.jpg"
    },
    {
      id: 4,
      title: "Machine Learning Fundamentals for Beginners",
      excerpt: "A comprehensive guide to understanding the basics of machine learning and its real-world applications.",
      author: "David Wilson",
      date: "May 2, 2024",
      readTime: "8 min read",
      category: "Data Science",
      image: "https://picsum.photos/seed/blog4/800/400.jpg"
    },
    {
      id: 5,
      title: "Cybersecurity: Protecting Your Digital Assets",
      excerpt: "Essential cybersecurity practices every developer should know to protect applications and data.",
      author: "Lisa Anderson",
      date: "April 30, 2024",
      readTime: "6 min read",
      category: "Security",
      image: "https://picsum.photos/seed/blog5/800/400.jpg"
    },
    {
      id: 6,
      title: "The Future of Remote Work in Tech",
      excerpt: "How remote work is transforming the tech industry and what it means for developers and companies.",
      author: "James Taylor",
      date: "April 28, 2024",
      readTime: "5 min read",
      category: "Career",
      image: "https://picsum.photos/seed/blog6/800/400.jpg"
    }
  ];

  const categories = ["All", "Programming", "Cloud Computing", "DevOps", "Data Science", "Security", "Career"];

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#0075eb] via-blue-600 to-indigo-700 py-20 px-4 md:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            LearnCoz <span className="text-[#f5a837]">Blog</span>
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto leading-relaxed mb-8">
            Insights, tutorials, and industry updates from tech experts
          </p>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-16 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <article key={post.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 group">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-[#0075eb] text-white text-xs font-medium px-3 py-1 rounded-full">
                      {post.category}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                    <div className="flex items-center gap-1">
                      <Calendar size={14} />
                      <span>{post.date}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock size={14} />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                  
                  <h2 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#0075eb] transition-colors">
                    {post.title}
                  </h2>
                  
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center">
                        <User size={16} className="text-gray-600" />
                      </div>
                      <span className="text-sm text-gray-700 font-medium">{post.author}</span>
                    </div>
                    
                    <button className="flex items-center gap-1 text-[#0075eb] font-medium hover:gap-2 transition-all">
                      Read More
                      <ArrowRight size={16} />
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Load More */}
          <div className="text-center mt-12">
            <button className="bg-[#0075eb] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#0066cc] transition-colors duration-200">
              Load More Articles
            </button>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="bg-gradient-to-r from-blue-50 to-indigo-50 py-16 px-4 md:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Stay Updated with Latest Tech Trends
          </h2>
          <p className="text-gray-600 mb-8">
            Subscribe to our newsletter and never miss an update on the latest in technology and learning.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button className="bg-[#0075eb] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#0066cc] transition-colors duration-200">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
