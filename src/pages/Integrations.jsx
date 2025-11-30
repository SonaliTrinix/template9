import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Integrations.css";

const Integrations = () => {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = [
    "All",
    "Accounting",
    "CRM",
    "Payments",
    "Productivity",
    "E-commerce",
    "Analytics",
  ];

  const integrations = [
    {
      name: "QuickBooks",
      category: "Accounting",
      description:
        "Sync your financial data automatically with QuickBooks Online",
      icon: "📊",
      popular: true,
      features: [
        "Real-time sync",
        "Automatic categorization",
        "Invoice matching",
      ],
    },
    {
      name: "Stripe",
      category: "Payments",
      description: "Accept payments and automatically record transactions",
      icon: "💳",
      popular: true,
      features: [
        "Payment processing",
        "Subscription management",
        "Refund handling",
      ],
    },
    {
      name: "Xero",
      category: "Accounting",
      description: "Connect with Xero for seamless accounting integration",
      icon: "📈",
      popular: true,
      features: ["Bank reconciliation", "Invoice creation", "Expense tracking"],
    },
    {
      name: "Salesforce",
      category: "CRM",
      description: "Link customer data with financial transactions",
      icon: "☁️",
      popular: false,
      features: ["Customer insights", "Sales tracking", "Revenue forecasting"],
    },
    {
      name: "Slack",
      category: "Productivity",
      description: "Get real-time notifications in your Slack workspace",
      icon: "💬",
      popular: true,
      features: [
        "Transaction alerts",
        "Team notifications",
        "Custom workflows",
      ],
    },
    {
      name: "HubSpot",
      category: "CRM",
      description: "Integrate marketing and sales data with finances",
      icon: "🎯",
      popular: false,
      features: ["Lead tracking", "Deal management", "Revenue attribution"],
    },
    {
      name: "Shopify",
      category: "E-commerce",
      description: "Automatically sync your online store transactions",
      icon: "🛒",
      popular: true,
      features: ["Order sync", "Inventory tracking", "Payout reconciliation"],
    },
    {
      name: "Google Workspace",
      category: "Productivity",
      description: "Connect with Gmail, Calendar, and Drive",
      icon: "📧",
      popular: false,
      features: ["Email receipts", "Calendar sync", "Document storage"],
    },
    {
      name: "PayPal",
      category: "Payments",
      description: "Import PayPal transactions automatically",
      icon: "🅿️",
      popular: false,
      features: ["Transaction import", "Multi-currency", "Fee tracking"],
    },
    {
      name: "Zapier",
      category: "Productivity",
      description: "Connect with 3,000+ apps through Zapier",
      icon: "⚡",
      popular: true,
      features: ["Custom workflows", "Automation", "Unlimited connections"],
    },
    {
      name: "Google Analytics",
      category: "Analytics",
      description: "Track financial metrics alongside web analytics",
      icon: "📊",
      popular: false,
      features: ["Revenue tracking", "Conversion metrics", "Custom reports"],
    },
    {
      name: "WooCommerce",
      category: "E-commerce",
      description: "Sync your WordPress store with Nexio",
      icon: "🛍️",
      popular: false,
      features: ["Order automation", "Product sync", "Customer data"],
    },
  ];

  const filteredIntegrations =
    selectedCategory === "All"
      ? integrations
      : integrations.filter((int) => int.category === selectedCategory);

  const handleConnect = (integrationName) => {
    alert(`Connecting to ${integrationName}...`);
  };

  return (
    <div className="integrations-page">
      <section className="integrations-hero">
        <div className="workflow-badge">
          <span className="badge-dot"></span>
          Integrations
        </div>
        <h1 className="integrations-title">Connect with Your Favorite Tools</h1>
        <p className="integrations-subtitle">
          Seamlessly integrate Nexio with the tools you already use. Over 1,000+
          integrations available.
        </p>
        <div className="integrations-search">
          <input type="text" placeholder="Search integrations..." />
          <button>🔍</button>
        </div>
      </section>

      <section className="integrations-stats">
        <div className="stat-item">
          <h3>1,000+</h3>
          <p>Available Integrations</p>
        </div>
        <div className="stat-item">
          <h3>99.9%</h3>
          <p>Uptime Guarantee</p>
        </div>
        <div className="stat-item">
          <h3>&lt; 5 min</h3>
          <p>Setup Time</p>
        </div>
        <div className="stat-item">
          <h3>24/7</h3>
          <p>Support Available</p>
        </div>
      </section>

      <section className="integrations-content">
        <div className="integrations-filters">
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

        <div className="integrations-grid">
          {filteredIntegrations.map((integration, index) => (
            <div key={index} className="integration-card">
              {integration.popular && (
                <div className="popular-badge">Popular</div>
              )}
              <div className="integration-icon">{integration.icon}</div>
              <h3 className="integration-name">{integration.name}</h3>
              <p className="integration-category">{integration.category}</p>
              <p className="integration-description">
                {integration.description}
              </p>
              <ul className="integration-features">
                {integration.features.map((feature, idx) => (
                  <li key={idx}>
                    <span className="check-icon">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
              <button
                className="connect-btn"
                onClick={() => handleConnect(integration.name)}
              >
                Connect
              </button>
            </div>
          ))}
        </div>
      </section>

      <section className="custom-integration">
        <h2>Need a Custom Integration?</h2>
        <p>
          Our API makes it easy to build custom integrations for your specific
          needs.
        </p>
        <div className="custom-buttons">
          <button
            className="btn-primary"
            onClick={() => navigate("/documentation")}
          >
            View API Docs
          </button>
          <button
            className="btn-secondary"
            onClick={() => navigate("/contact")}
          >
            Contact Sales
          </button>
        </div>
      </section>

      <section className="integration-features-section">
        <h2>Why Choose Nexio Integrations?</h2>
        <div className="features-grid">
          <div className="feature-item">
            <div className="feature-icon">🔄</div>
            <h3>Real-time Sync</h3>
            <p>
              Data syncs automatically in real-time across all your connected
              apps.
            </p>
          </div>
          <div className="feature-item">
            <div className="feature-icon">🔒</div>
            <h3>Secure & Reliable</h3>
            <p>
              Bank-level encryption ensures your data stays safe and private.
            </p>
          </div>
          <div className="feature-item">
            <div className="feature-icon">⚡</div>
            <h3>Easy Setup</h3>
            <p>
              Most integrations can be set up in under 5 minutes with no coding
              required.
            </p>
          </div>
          <div className="feature-item">
            <div className="feature-icon">🛠️</div>
            <h3>Customizable</h3>
            <p>Configure exactly what data to sync and when to sync it.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Integrations;
