import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Testimonials.css";

const Testimonials = () => {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = ["All", "Startups", "Enterprise", "E-commerce", "Finance"];

  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "CEO",
      company: "TechStart Inc.",
      category: "Startups",
      avatar: "SJ",
      rating: 5,
      text: "Nexio has been a game-changer for our startup. The automation features alone have saved us 20+ hours per week, and the insights we get from the analytics dashboard have helped us make better financial decisions.",
      results: [
        "20+ hours saved weekly",
        "40% faster invoice processing",
        "100% improved accuracy",
      ],
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "CFO",
      company: "GlobalCorp",
      category: "Enterprise",
      avatar: "MC",
      rating: 5,
      text: "As a CFO managing a $500M company, I need tools that are both powerful and reliable. Nexio delivers on both fronts. The multi-currency support and compliance features are exactly what we needed.",
      results: [
        "$2M+ in annual savings",
        "99.9% uptime achieved",
        "Full compliance maintained",
      ],
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      role: "Founder",
      company: "ShopFlow",
      category: "E-commerce",
      avatar: "ER",
      rating: 5,
      text: "The Shopify integration works flawlessly. All our transactions sync automatically, and the real-time reporting gives us instant visibility into our cash flow. Couldn't be happier!",
      results: [
        "Automated reconciliation",
        "Real-time insights",
        "50% faster month-end close",
      ],
    },
    {
      id: 4,
      name: "James Wilson",
      role: "Financial Controller",
      company: "InvestPro",
      category: "Finance",
      avatar: "JW",
      rating: 5,
      text: "We process thousands of transactions daily, and Nexio handles them all seamlessly. The API is well-documented, and the support team has been incredibly responsive.",
      results: [
        "10,000+ daily transactions",
        "Zero downtime",
        "24/7 reliable support",
      ],
    },
    {
      id: 5,
      name: "Lisa Anderson",
      role: "Operations Manager",
      company: "RetailMax",
      category: "E-commerce",
      avatar: "LA",
      rating: 5,
      text: "The team collaboration features are fantastic. Everyone has the right level of access, and the approval workflows have streamlined our entire payment process.",
      results: [
        "3x faster approvals",
        "Reduced errors by 95%",
        "Improved team efficiency",
      ],
    },
    {
      id: 6,
      name: "David Park",
      role: "Head of Finance",
      company: "DataFlow Systems",
      category: "Enterprise",
      avatar: "DP",
      rating: 5,
      text: "Nexio's reporting capabilities are outstanding. We can generate custom reports in minutes that used to take hours. The ROI has been incredible.",
      results: ["5x faster reporting", "Custom dashboards", "80% time savings"],
    },
    {
      id: 7,
      name: "Rachel Kim",
      role: "Co-Founder",
      company: "FinanceHub",
      category: "Startups",
      avatar: "RK",
      rating: 5,
      text: "Started with the free trial and never looked back. The platform is intuitive, powerful, and scales perfectly with our growing business. Best financial tool we've used.",
      results: [
        "Scaled to 100+ users",
        "Zero training time",
        "Improved cash flow visibility",
      ],
    },
    {
      id: 8,
      name: "Tom Martinez",
      role: "VP of Finance",
      company: "BankTech Solutions",
      category: "Finance",
      avatar: "TM",
      rating: 5,
      text: "Security and compliance are critical in our industry. Nexio's SOC 2 certification and bank-level encryption give us complete confidence in the platform.",
      results: [
        "Full compliance achieved",
        "Enhanced security",
        "Audit-ready reports",
      ],
    },
    {
      id: 9,
      name: "Amanda Foster",
      role: "Business Owner",
      company: "StyleBoutique",
      category: "E-commerce",
      avatar: "AF",
      rating: 5,
      text: "I'm not a finance expert, but Nexio makes it so easy. The mobile app lets me manage everything on the go, and the support team is always there when I need help.",
      results: [
        "Mobile-first workflow",
        "Simplified bookkeeping",
        "Peace of mind",
      ],
    },
  ];

  const filteredTestimonials =
    selectedCategory === "All"
      ? testimonials
      : testimonials.filter((t) => t.category === selectedCategory);

  const stats = [
    { number: "50,000+", label: "Happy Customers" },
    { number: "4.9/5", label: "Average Rating" },
    { number: "98%", label: "Customer Satisfaction" },
    { number: "24/7", label: "Support Available" },
  ];

  return (
    <div className="testimonials-page">
      <section className="testimonials-hero">
        <div className="workflow-badge">
          <span className="badge-dot"></span>
          Customer Stories
        </div>
        <h1 className="testimonials-title">Loved by Businesses Everywhere</h1>
        <p className="testimonials-subtitle">
          See what our customers have to say about transforming their financial
          management with Nexio
        </p>
        <div className="testimonials-rating">
          <div className="stars">⭐⭐⭐⭐⭐</div>
          <p>Rated 4.9/5 by 10,000+ customers</p>
        </div>
      </section>

      <section className="testimonials-stats">
        {stats.map((stat, index) => (
          <div key={index} className="testimonial-stat">
            <h3>{stat.number}</h3>
            <p>{stat.label}</p>
          </div>
        ))}
      </section>

      <section className="testimonials-content">
        <div className="testimonials-filters">
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

        <div className="testimonials-grid">
          {filteredTestimonials.map((testimonial) => (
            <div key={testimonial.id} className="testimonial-card">
              <div className="testimonial-header">
                <div className="testimonial-author">
                  <div className="author-avatar">{testimonial.avatar}</div>
                  <div className="author-info">
                    <h4>{testimonial.name}</h4>
                    <p className="author-role">{testimonial.role}</p>
                    <p className="author-company">{testimonial.company}</p>
                  </div>
                </div>
                <div className="testimonial-stars">
                  {"⭐".repeat(testimonial.rating)}
                </div>
              </div>

              <p className="testimonial-text">"{testimonial.text}"</p>

              <div className="testimonial-results">
                <h5>Results Achieved:</h5>
                <ul>
                  {testimonial.results.map((result, idx) => (
                    <li key={idx}>
                      <span className="check-icon">✓</span>
                      {result}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="video-testimonials">
        <h2>Watch Customer Success Stories</h2>
        <div className="video-grid">
          <div className="video-card">
            <div className="video-thumbnail">
              <div className="play-icon">▶️</div>
              <p>How TechStart Scaled with Nexio</p>
            </div>
            <p className="video-duration">3:45</p>
          </div>
          <div className="video-card">
            <div className="video-thumbnail">
              <div className="play-icon">▶️</div>
              <p>GlobalCorp Saves $2M Annually</p>
            </div>
            <p className="video-duration">4:20</p>
          </div>
          <div className="video-card">
            <div className="video-thumbnail">
              <div className="play-icon">▶️</div>
              <p>ShopFlow's Automation Journey</p>
            </div>
            <p className="video-duration">3:15</p>
          </div>
        </div>
      </section>

      <section className="testimonials-cta">
        <h2>Ready to Join Them?</h2>
        <p>
          Start your 14-day free trial and see why thousands of businesses
          choose Nexio
        </p>
        <button className="btn-primary" onClick={() => navigate("/signup")}>
          Start Free Trial
        </button>
        <p className="cta-note">No credit card required • Cancel anytime</p>
      </section>
    </div>
  );
};

export default Testimonials;
