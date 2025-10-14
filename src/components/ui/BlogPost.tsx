'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Search } from 'lucide-react';

interface BlogPost {
  id: string;
  category: string;
  title: string;
  excerpt?: string;
  image: string;
  author: string;
  readTime: string;
  slug: string;
  featured?: boolean;
}

const categories = ['All', 'Company News', 'Finance Tips', 'Security', 'Product Updates'];

const blogPosts: BlogPost[] = [
  {
    id: '1',
    category: 'Company News',
    title: 'Payvel Expands Service to New Countries',
    excerpt: "We're excited to announce that our seamless money transfer service is now available in three new corridors, connecting more families than ever before.",
    image: '/img/people.webp',
    author: 'Payvel Team',
    readTime: '5 min read',
    slug: '#',
    featured: true
  },
  {
    id: '2',
    category: 'Finance Tips',
    title: '5 Tips for Budgeting Your International Transfers',
    image: '/img/people.webp',
    author: 'Jane Doe',
    readTime: '5 min read',
    slug: '#'
  },
  {
    id: '3',
    category: 'Security',
    title: 'How We Keep Your Money Safe',
    image: '/img/people.webp',
    author: 'John Smith',
    readTime: '4 min read',
    slug: '#'
  },
  {
    id: '4',
    category: 'Product Updates',
    title: 'Introducing Rate Alerts: Never Miss the Perfect Time to Send',
    image: '/img/people.webp',
    author: 'The Payvel Team',
    readTime: '3 min read',
    slug: '#'
  }
];

export default function BlogHomePage() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredPosts, setFilteredPosts] = useState(blogPosts);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  useEffect(() => {
    let filtered = blogPosts;

    if (activeCategory !== 'All') {
      filtered = filtered.filter(post => post.category === activeCategory);
    }

    if (searchQuery) {
      filtered = filtered.filter(post =>
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.category.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    setFilteredPosts(filtered);
  }, [activeCategory, searchQuery]);

  const featuredPost = blogPosts.find(post => post.featured);
  const recentPosts = filteredPosts.filter(post => !post.featured);

  return (
    <div className="min-h-screen bg-white dark:bg-black text-gray-900 dark:text-white">
      {/* Page Header */}
      <section className={`text-center container mx-auto px-6 mt-2 md:mt-26 py-16 pb-8 lg:pt-24 lg:pb-12 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <h1 className="text-3xl md:text-5xl font-extrabold">
          The <span className="bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent animate-gradient">Payvel Blog</span>
        </h1>
        <p className="mt-4 text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          News, insights, and tips on managing your international finances and staying connected.
        </p>
      </section>

      {/* Filters and Search */}
      <section className={`container mx-auto px-6 mb-12 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300 transform hover:scale-105 ${
                  activeCategory === category
                    ? 'bg-gradient-to-r from-teal-500 to-cyan-500 text-white'
                    : 'bg-gray-200 dark:bg-gray-800 text-gray-900 dark:text-white hover:bg-gray-300 dark:hover:bg-gray-700'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
          <div className="relative">
            <input
              type="search"
              placeholder="Search articles..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="bg-gray-100 dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded-full py-2 pl-10 pr-4 w-64 focus:outline-none focus:border-teal-500 transition-all duration-300 text-gray-900 dark:text-white placeholder-gray-500"
            />
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-500" />
          </div>
        </div>
      </section>

      {/* Blog Posts Section */}
      <section className="container mx-auto px-6 py-8">
        {/* Featured Post */}
        {featuredPost && (
          <div className={`mb-16 rounded-xl overflow-hidden relative h-96 group cursor-pointer transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <Link href={`/blog/${featuredPost.slug}`}>
              <div className="relative h-full w-full">
                <Image
                  src={featuredPost.image}
                  alt={featuredPost.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-8 md:p-12 transition-transform duration-500 group-hover:translate-y-[-8px]">
                  <p className="text-sm text-teal-400 font-semibold">{featuredPost.category}</p>
                  <h2 className="text-3xl lg:text-4xl font-bold mt-2 mb-4 text-white">
                    {featuredPost.title}
                  </h2>
                  <p className="text-gray-300 mb-6 max-w-2xl hidden md:block">
                    {featuredPost.excerpt}
                  </p>
                  <span className="font-semibold text-white group-hover:text-teal-400 flex items-center transition-colors duration-300">
                    Read More <span className="ml-2 transition-transform duration-300 group-hover:translate-x-2">&rarr;</span>
                  </span>
                </div>
              </div>
            </Link>
          </div>
        )}

        {/* Recent Posts Grid */}
        <h2 className={`text-3xl font-bold mb-8 transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          Recent Posts
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {recentPosts.map((post, index) => (
            <div
              key={post.id}
              className={`bg-gray-100 dark:bg-gray-900 rounded-xl overflow-hidden group cursor-pointer transform transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-teal-500/20 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${500 + index * 100}ms` }}
            >
              <Link href={`/blog/${post.slug}`}>
                <div className="relative h-48 w-full overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
                <div className="p-6 flex flex-col">
                  <p className="text-sm text-teal-400 font-semibold">{post.category}</p>
                  <h3 className="text-xl font-bold mt-2 mb-3 text-gray-900 dark:text-white group-hover:text-teal-400 transition-colors duration-300 min-h-[3.5rem]">
                    {post.title}
                  </h3>
                  <div className="text-xs text-gray-500 mt-auto">
                    By {post.author} • {post.readTime}
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {recentPosts.length === 0 && (
          <div className="text-center py-16">
            <p className="text-gray-600 dark:text-gray-400 text-lg">No articles found matching your criteria.</p>
          </div>
        )}

        {/* Pagination */}
        {recentPosts.length > 0 && (
          <div className={`flex justify-center mt-16 transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <nav className="flex items-center space-x-2">
              <button className="px-4 py-2 bg-gray-200 dark:bg-gray-800 text-gray-900 dark:text-white rounded-lg hover:bg-gray-300 dark:hover:bg-gray-700 transition-colors duration-300">
                Previous
              </button>
              <button className="px-4 py-2 bg-gradient-to-r from-teal-500 to-cyan-500 text-black font-bold rounded-lg">
                1
              </button>
              <button className="px-4 py-2 bg-gray-200 dark:bg-gray-800 text-gray-900 dark:text-white rounded-lg hover:bg-gray-300 dark:hover:bg-gray-700 transition-colors duration-300">
                2
              </button>
              <button className="px-4 py-2 bg-gray-200 dark:bg-gray-800 text-gray-900 dark:text-white rounded-lg hover:bg-gray-300 dark:hover:bg-gray-700 transition-colors duration-300">
                3
              </button>
              <button className="px-4 py-2 bg-gray-200 dark:bg-gray-800 text-gray-900 dark:text-white rounded-lg hover:bg-gray-300 dark:hover:bg-gray-700 transition-colors duration-300">
                Next
              </button>
            </nav>
          </div>
        )}
      </section>

      <style jsx>{`
        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }
      `}</style>
    </div>
  );
}