import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Blog.css";

const Blog = () => {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = [
    "All",
    "Product Updates",
    "Industry Insights",
    "Best Practices",
    "Customer Stories",
    "Engineering",
  ];

  const blogPosts = [
    {
      id: 1,
      title: "Introducing AI-Powered Financial Forecasting",
      excerpt:
        "Learn how our new AI features can predict cash flow patterns and help you make better financial decisions.",
      author: "Sarah Chen",
      date: "Nov 15, 2025",
      category: "Product Updates",
      readTime: "5 min read",
      image: "📊",
    },
    {
      id: 2,
      title: "The Future of Fintech: Trends to Watch in 2026",
      excerpt:
        "Industry experts share their predictions on emerging technologies reshaping financial services.",
      author: "Michael Rodriguez",
      date: "Nov 10, 2025",
      category: "Industry Insights",
      readTime: "8 min read",
      image: "🚀",
    },
    {
      id: 3,
      title: "How TechCorp Saved 20 Hours Per Week with Nexio",
      excerpt:
        "Discover how automation features transformed TechCorp's financial workflow and boosted productivity.",
      author: "Emily Watson",
      date: "Nov 5, 2025",
      category: "Customer Stories",
      readTime: "6 min read",
      image: "💼",
    },
    {
      id: 4,
      title: "Best Practices for Multi-Currency Management",
      excerpt:
        "Expert tips on handling international transactions and minimizing currency conversion fees.",
      author: "David Kim",
      date: "Oct 28, 2025",
      category: "Best Practices",
      readTime: "7 min read",
      image: "💰",
    },
    {
      id: 5,
      title: "Building for Scale: Our Infrastructure Journey",
      excerpt:
        "Behind the scenes look at how we built a platform that processes billions in transactions.",
      author: "David Kim",
      date: "Oct 20, 2025",
      category: "Engineering",
      readTime: "10 min read",
      image: "⚙️",
    },
    {
      id: 6,
      title: "Security First: Our Approach to Data Protection",
      excerpt:
        "Deep dive into the security measures that keep your financial data safe and compliant.",
      author: "Michael Rodriguez",
      date: "Oct 15, 2025",
      category: "Industry Insights",
      readTime: "9 min read",
      image: "🔒",
    },
    {
      id: 7,
      title: "Automating Your Financial Workflows: A Complete Guide",
      excerpt:
        "Step-by-step guide to setting up automated workflows that save time and reduce errors.",
      author: "Emily Watson",
      date: "Oct 8, 2025",
      category: "Best Practices",
      readTime: "12 min read",
      image: "🤖",
    },
    {
      id: 8,
      title: "Version 3.0 Release: What's New",
      excerpt:
        "Exciting new features and improvements in our latest major release.",
      author: "Sarah Chen",
      date: "Oct 1, 2025",
      category: "Product Updates",
      readTime: "4 min read",
      image: "🎉",
    },
  ];

  const filteredPosts =
    selectedCategory === "All"
      ? blogPosts
      : blogPosts.filter((post) => post.category === selectedCategory);

  const handleReadPost = (postId) => {
    alert(`Opening blog post ${postId}...`);
  };

  return (
    <div className="blog-page">
      <section className="blog-hero">
        <div className="workflow-badge">
          <span className="badge-dot"></span>
          Our Blog
        </div>
        <h1 className="blog-title">Insights, Updates & Stories</h1>
        <p className="blog-subtitle">
          Stay updated with the latest news, product updates, and industry
          insights from Nexio
        </p>
      </section>

      <section className="blog-featured">
        <div className="featured-post">
          <div className="featured-badge">Featured</div>
          <div className="featured-icon">✨</div>
          <h2>Nexio Raises $50M Series B to Expand Global Operations</h2>
          <p>
            We're excited to announce our Series B funding round led by top-tier
            investors. This investment will accelerate our mission to
            democratize financial management worldwide.
          </p>
          <div className="featured-meta">
            <span>Sarah Chen</span>
            <span>•</span>
            <span>Nov 18, 2025</span>
            <span>•</span>
            <span>3 min read</span>
          </div>
          <button
            className="btn-primary"
            onClick={() => handleReadPost("featured")}
          >
            Read More
          </button>
        </div>
      </section>

      <section className="blog-content">
        <div className="blog-filters">
          {categories.map((category) => (
            <button
              key={category}
              className={`filter-btn ${
                selectedCategory === category ? "active" : ""
              }`}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="blog-grid">
          {filteredPosts.map((post) => (
            <article key={post.id} className="blog-card">
              <div className="blog-card-image">{post.image}</div>
              <div className="blog-card-content">
                <div className="blog-card-meta">
                  <span className="blog-category">{post.category}</span>
                  <span className="blog-read-time">{post.readTime}</span>
                </div>
                <h3 className="blog-card-title">{post.title}</h3>
                <p className="blog-card-excerpt">{post.excerpt}</p>
                <div className="blog-card-footer">
                  <div className="blog-author">
                    <div className="author-avatar-small">
                      {post.author
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </div>
                    <div>
                      <p className="author-name-small">{post.author}</p>
                      <p className="blog-date">{post.date}</p>
                    </div>
                  </div>
                  <button
                    className="read-more-btn"
                    onClick={() => handleReadPost(post.id)}
                  >
                    Read →
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="newsletter-section">
        <h2>Stay in the Loop</h2>
        <p>Subscribe to our newsletter for the latest updates and insights</p>
        <div className="newsletter-form">
          <input type="email" placeholder="Enter your email" />
          <button className="btn-primary">Subscribe</button>
        </div>
        <p className="newsletter-note">No spam, unsubscribe anytime.</p>
      </section>
    </div>
  );
};

export default Blog;
