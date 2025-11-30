import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/About.css";

const About = () => {
  const navigate = useNavigate();

  const team = [
    {
      name: "Sarah Chen",
      role: "CEO & Co-Founder",
      avatar: "SC",
      bio: "15+ years in fintech, former VP at PayPal",
    },
    {
      name: "Michael Rodriguez",
      role: "CTO & Co-Founder",
      avatar: "MR",
      bio: "Ex-Google engineer, blockchain expert",
    },
    {
      name: "Emily Watson",
      role: "Head of Product",
      avatar: "EW",
      bio: "Product leader from Stripe and Square",
    },
    {
      name: "David Kim",
      role: "Head of Engineering",
      avatar: "DK",
      bio: "Former tech lead at Amazon Web Services",
    },
  ];

  const timeline = [
    {
      year: "2020",
      event: "Nexio founded with a vision to democratize financial management",
    },
    {
      year: "2021",
      event: "Launched beta product, reached 1,000 users in first quarter",
    },
    {
      year: "2022",
      event: "Series A funding of $25M, expanded to 20+ countries",
    },
    {
      year: "2023",
      event: "Processed $1B in transactions, reached 25,000 customers",
    },
    {
      year: "2024",
      event: "Launched AI-powered features and enterprise solutions",
    },
    {
      year: "2025",
      event: "Serving 50,000+ businesses worldwide with 99.9% uptime",
    },
  ];

  const values = [
    {
      icon: "🎯",
      title: "Customer First",
      description:
        "Every decision we make starts with our customers' needs and success in mind.",
    },
    {
      icon: "🚀",
      title: "Innovation",
      description:
        "We constantly push boundaries to deliver cutting-edge financial solutions.",
    },
    {
      icon: "🤝",
      title: "Transparency",
      description:
        "Open communication and honest relationships with all stakeholders.",
    },
    {
      icon: "🔒",
      title: "Security",
      description:
        "We treat your data security as our highest priority, always.",
    },
    {
      icon: "🌍",
      title: "Global Impact",
      description:
        "Making financial management accessible to businesses worldwide.",
    },
    {
      icon: "💡",
      title: "Continuous Learning",
      description:
        "We grow through feedback, data, and the ever-evolving needs of our users.",
    },
  ];

  return (
    <div className="about-page">
      <section className="about-hero">
        <div className="workflow-badge">
          <span className="badge-dot"></span>
          About Nexio
        </div>
        <h1 className="about-title">
          Building the future of financial management
        </h1>
        <p className="about-subtitle">
          We're on a mission to empower businesses of all sizes with powerful,
          intuitive financial tools that drive growth and success.
        </p>
      </section>

      <section className="mission-section">
        <div className="mission-content">
          <div className="mission-text">
            <h2>Our Mission</h2>
            <p>
              At Nexio, we believe that powerful financial management shouldn't
              be complicated or expensive. We're building a platform that
              combines enterprise-grade features with consumer-grade simplicity.
            </p>
            <p>
              Founded in 2020 by a team of fintech veterans, we've grown from a
              small startup to serving over 50,000 businesses worldwide. Our
              platform processes billions in transactions while maintaining the
              highest standards of security and reliability.
            </p>
          </div>
          <div className="mission-stats">
            <div className="mission-stat">
              <h3>50K+</h3>
              <p>Businesses Trust Us</p>
            </div>
            <div className="mission-stat">
              <h3>150+</h3>
              <p>Countries Worldwide</p>
            </div>
            <div className="mission-stat">
              <h3>$2.5B+</h3>
              <p>Processed Annually</p>
            </div>
            <div className="mission-stat">
              <h3>99.9%</h3>
              <p>Platform Uptime</p>
            </div>
          </div>
        </div>
      </section>

      <section className="values-section">
        <div className="workflow-badge">
          <span className="badge-dot"></span>
          Our Values
        </div>
        <h2 className="section-title">What drives us forward</h2>
        <div className="values-grid">
          {values.map((value, index) => (
            <div key={index} className="value-card">
              <div className="value-icon">{value.icon}</div>
              <h3>{value.title}</h3>
              <p>{value.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="timeline-section">
        <div className="workflow-badge">
          <span className="badge-dot"></span>
          Our Journey
        </div>
        <h2 className="section-title">The Nexio Story</h2>
        <div className="timeline">
          {timeline.map((item, index) => (
            <div key={index} className="timeline-item">
              <div className="timeline-year">{item.year}</div>
              <div className="timeline-content">
                <p>{item.event}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="team-section">
        <div className="workflow-badge">
          <span className="badge-dot"></span>
          Meet the Team
        </div>
        <h2 className="section-title">Led by industry veterans</h2>
        <div className="team-grid">
          {team.map((member, index) => (
            <div key={index} className="team-card">
              <div className="team-avatar">{member.avatar}</div>
              <h3>{member.name}</h3>
              <p className="team-role">{member.role}</p>
              <p className="team-bio">{member.bio}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="careers-section">
        <h2>Join Our Team</h2>
        <p>
          We're always looking for talented individuals who share our passion
          for innovation.
        </p>
        <button
          className="btn-primary"
          onClick={() => alert("Careers page coming soon!")}
        >
          View Open Positions
        </button>
      </section>

      <section className="cta-section">
        <h2>Ready to get started?</h2>
        <p>Join thousands of businesses already using Nexio</p>
        <button className="btn-primary" onClick={() => navigate("/signup")}>
          Start Free Trial
        </button>
      </section>
    </div>
  );
};

export default About;
