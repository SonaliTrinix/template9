import React from "react";
import { useNavigate } from "react-router-dom";
import ThreeBackground from "../components/ThreeBackground";
import "../styles/Home.css";

const Home = () => {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate("/signup");
  };

  const handleLearnMore = () => {
    navigate("/features");
  };

  return (
    <div className="home-page">
      <ThreeBackground type="particles" />

      <section className="hero-section">
        <div className="hero-content">
          <div className="hero-left">
            <div className="workflow-badge">
              <span className="badge-dot"></span>
              Simplify your workflow
            </div>

            <h1 className="hero-title">
              Enhance your financial control with Nexio
            </h1>

            <p className="hero-description">
              Revolutionize your payments & financial management with our
              platform. Seamless transactions and easy-to-use tools that empower
              you.
            </p>

            <button className="btn-primary" onClick={handleGetStarted}>
              Get started
            </button>
          </div>

          <div className="hero-right">
            <div className="robot-container">
              <spline-viewer
                url="https://prod.spline.design/oBzbsJfXeEuArbqj/scene.splinecode"
                style={{ width: "100%", height: "100%" }}
              ></spline-viewer>
            </div>
          </div>
        </div>

        <div className="dashboard-preview">
          <div className="card card-left">
            <div className="card-icon">💼</div>
            <div className="card-content">
              <span className="card-label">Portfolio</span>
              <h3 className="card-value">$28,000,000.00</h3>
            </div>
          </div>

          <div className="card card-center">
            <div className="card-icon">💰</div>
            <div className="card-content">
              <span className="card-label">Total Income</span>
              <h3 className="card-value">$14,080,000.00</h3>
            </div>
          </div>

          <div className="card card-right">
            <div className="card-icon">💳</div>
            <div className="card-content">
              <span className="card-label">Cashflow</span>
              <h3 className="card-value">$1,820,000.00</h3>
            </div>
          </div>
        </div>
      </section>

      <section className="partners-section">
        <div className="workflow-badge">
          <span className="badge-dot"></span>
          Trusted by leading companies
        </div>

        <div className="partners-grid">
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <div key={item} className="partner-logo">
              <div className="logo-circle"></div>
              <span>Company {item}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="features-preview-section">
        <div className="workflow-badge">
          <span className="badge-dot"></span>
          Our workflow
        </div>

        <h2 className="section-title">
          How our platform makes your workflow easier
        </h2>

        <div className="features-preview-grid">
          <div className="feature-preview-card">
            <div className="feature-icon">🔐</div>
            <h3>Bank-Level Security</h3>
            <p>
              Your data is protected with enterprise-grade encryption and
              security protocols.
            </p>
          </div>

          <div className="feature-preview-card">
            <div className="feature-icon">📊</div>
            <h3>Real-time Analytics</h3>
            <p>
              Get instant insights into your financial data with powerful
              analytics tools.
            </p>
          </div>

          <div className="feature-preview-card">
            <div className="feature-icon">🔄</div>
            <h3>Automated Workflows</h3>
            <p>
              Save time with intelligent automation for recurring transactions
              and reports.
            </p>
          </div>
        </div>

        <button className="btn-secondary" onClick={handleLearnMore}>
          Learn More
        </button>
      </section>

      <section className="stats-section">
        <div className="workflow-badge">
          <span className="badge-dot"></span>
          Trusted worldwide
        </div>

        <h2 className="section-title">Join thousands of satisfied customers</h2>

        <div className="stats-grid">
          <div className="stat-card">
            <h3 className="stat-number">50K+</h3>
            <p className="stat-label">Active Users</p>
          </div>
          <div className="stat-card">
            <h3 className="stat-number">$2.5B+</h3>
            <p className="stat-label">Transactions Processed</p>
          </div>
          <div className="stat-card">
            <h3 className="stat-number">99.9%</h3>
            <p className="stat-label">Uptime Guarantee</p>
          </div>
          <div className="stat-card">
            <h3 className="stat-number">150+</h3>
            <p className="stat-label">Countries Supported</p>
          </div>
        </div>
      </section>

      <section className="testimonials-preview">
        <div className="workflow-badge">
          <span className="badge-dot"></span>
          What our customers say
        </div>

        <h2 className="section-title">Loved by businesses everywhere</h2>

        <div className="testimonials-grid">
          <div className="testimonial-card">
            <div className="testimonial-stars">⭐⭐⭐⭐⭐</div>
            <p className="testimonial-text">
              "Nexio has transformed how we manage our finances. The automation
              features alone have saved us 20+ hours per week!"
            </p>
            <div className="testimonial-author">
              <div className="author-avatar">JS</div>
              <div>
                <p className="author-name">John Smith</p>
                <p className="author-title">CEO, TechCorp</p>
              </div>
            </div>
          </div>

          <div className="testimonial-card">
            <div className="testimonial-stars">⭐⭐⭐⭐⭐</div>
            <p className="testimonial-text">
              "The best financial platform we've used. Intuitive, powerful, and
              the customer support is outstanding."
            </p>
            <div className="testimonial-author">
              <div className="author-avatar">MJ</div>
              <div>
                <p className="author-name">Maria Johnson</p>
                <p className="author-title">CFO, StartupHub</p>
              </div>
            </div>
          </div>

          <div className="testimonial-card">
            <div className="testimonial-stars">⭐⭐⭐⭐⭐</div>
            <p className="testimonial-text">
              "Seamless integrations with all our tools. Nexio has become the
              backbone of our financial operations."
            </p>
            <div className="testimonial-author">
              <div className="author-avatar">RK</div>
              <div>
                <p className="author-name">Robert Kim</p>
                <p className="author-title">Founder, DigitalFlow</p>
              </div>
            </div>
          </div>
        </div>

        <button
          className="btn-secondary"
          onClick={() => navigate("/testimonials")}
        >
          Read More Reviews
        </button>
      </section>

      <section className="integrations-preview">
        <div className="workflow-badge">
          <span className="badge-dot"></span>
          Integrations
        </div>

        <h2 className="section-title">Connect with your favorite tools</h2>

        <div className="integrations-logos">
          <div className="integration-logo">Slack</div>
          <div className="integration-logo">QuickBooks</div>
          <div className="integration-logo">Xero</div>
          <div className="integration-logo">Stripe</div>
          <div className="integration-logo">Salesforce</div>
          <div className="integration-logo">HubSpot</div>
          <div className="integration-logo">Zapier</div>
          <div className="integration-logo">Google Workspace</div>
          <div className="integration-logo">Microsoft Teams</div>
          <div className="integration-logo">Mailchimp</div>
          <div className="integration-logo">Shopify</div>
          <div className="integration-logo">Asana</div>
        </div>

        <button
          className="btn-secondary"
          onClick={() => navigate("/integrations")}
        >
          View All Integrations
        </button>
      </section>

      <section className="cta-section">
        <h2 className="cta-title">
          Ready to transform your financial management?
        </h2>
        <p className="cta-description">
          Start your 14-day free trial today. No credit card required.
        </p>
        <div className="cta-buttons">
          <button className="btn-primary" onClick={handleGetStarted}>
            Start Free Trial
          </button>
          <button
            className="btn-secondary"
            onClick={() => navigate("/contact")}
          >
            Talk to Sales
          </button>
        </div>
        <p className="cta-note">
          ✓ Free 14-day trial ✓ No credit card required ✓ Cancel anytime
        </p>
      </section>
    </div>
  );
};

export default Home;
