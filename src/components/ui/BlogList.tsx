"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowRight, Search } from "lucide-react";
import { blogs } from "../../app/data/blogs";

const categories = [
  "All",
  "KYC & Compliance",
  "AML & Fraud",
  "Digital Identity",
  "Security",
  "Compliance",
  "AI & ML",
];

export default function BlogList() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [filteredBlogs, setFilteredBlogs] = useState(blogs);

  useEffect(() => {
    const filtered = blogs.filter((blog) => {
      const matchesSearch = blog.title
        .toLowerCase()
        .includes(searchTerm.toLowerCase());
      const matchesCategory =
        selectedCategory === "All" || blog.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
    setFilteredBlogs(filtered);
  }, [searchTerm, selectedCategory]);

  return (
    <section className="relative w-full min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 py-20">
      <div className="container mx-auto px-6">
        {/* Search & Categories */}
        <div className="text-center mb-16 mt-16">
          <h1 className="text-5xl text-black dark:text-white font-bold mb-6">
            Our Blog
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
            Stay ahead with the latest insights on identity verification,
            compliance, and fintech.
          </p>
          <div className="relative mb-6 max-w-2xl mx-auto">
            <Search
              className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
              size={20}
            />
            <input
              type="text"
              placeholder="Search articles..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-6 py-4 rounded-2xl border dark:text-white text-black border-gray-200 dark:border-gray-700"
            />
          </div>

          {/* Category Filter */}
          {/* Desktop Buttons */}
          <div className="hidden md:flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-full font-medium transition-all ${selectedCategory === category
                    ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white"
                    : "bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-200"
                  }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Mobile Dropdown */}
          <div className="md:hidden flex justify-center mt-4">
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="w-full max-w-xs px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-700 dark:bg-gray-800 dark:text-white text-gray-700"
            >
              {categories.map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Blog Cards */}
        {filteredBlogs.length > 0 ? (
          <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">
            {filteredBlogs.map((blog) => (
              <article
                key={blog.path}
                className="group bg-white dark:bg-gray-900 rounded-3xl overflow-hidden shadow-lg border border-gray-200 dark:border-gray-700"
              >
                <div className="relative h-56">
                  <img
                    src={blog.image}
                    alt={blog.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-3 lg:p-6">
                  <h2 className="text-xl text-black dark:text-white font-bold mb-4">
                    {blog.title}
                  </h2>
                  <Link
                    href={blog.path}
                    className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-medium"
                  >
                    Continue Reading <ArrowRight size={16} className="ml-2" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <div className="flex items-center justify-center space-x-3">
              <img
                src="/img/sad.gif"
                alt="No blogs"
                className="w-10 h-10 object-contain"
              />
              <p className="text-2xl font-semibold text-gray-600 dark:text-gray-300">
                No blogs found matching your search.
              </p>
            </div>
            <p className="mt-2 text-gray-500 dark:text-gray-400">
              Try adjusting your search or choosing another category.
            </p>
          </div>

        )}
      </div>
    </section>
  );
}
