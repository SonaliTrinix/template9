import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Security.css";

const Security = () => {
  const navigate = useNavigate();

  const securityFeatures = [
    {
      icon: "🔐",
      title: "End-to-End Encryption",
      description:
        "All data is encrypted both in transit and at rest using AES-256 encryption.",
    },
    {
      icon: "🛡️",
      title: "SOC 2 Type II Certified",
      description:
        "We maintain the highest standards of security and compliance.",
    },
    {
      icon: "🔑",
      title: "Two-Factor Authentication",
      description: "Add an extra layer of security with 2FA on all accounts.",
    },
    {
      icon: "👁️",
      title: "Real-time Monitoring",
      description: "24/7 monitoring and automated threat detection systems.",
    },
    {
      icon: "📋",
      title: "Regular Audits",
      description: "Third-party security audits performed quarterly.",
    },
    {
      icon: "🌐",
      title: "GDPR Compliant",
      description: "Full compliance with EU data protection regulations.",
    },
  ];

  const certifications = [
    { name: "SOC 2 Type II", icon: "🏆" },
    { name: "ISO 27001", icon: "📜" },
    { name: "PCI DSS Level 1", icon: "💳" },
    { name: "GDPR", icon: "🇪🇺" },
    { name: "HIPAA", icon: "🏥" },
    { name: "CCPA", icon: "🔒" },
  ];

  const dataProtection = [
    {
      title: "Data Encryption",
      items: [
        "AES-256 encryption at rest",
        "TLS 1.3 for data in transit",
        "Encrypted database backups",
        "Secure key management",
      ],
    },
    {
      title: "Access Controls",
      items: [
        "Role-based access control (RBAC)",
        "Multi-factor authentication",
        "IP whitelisting",
        "Session management",
      ],
    },
    {
      title: "Infrastructure Security",
      items: [
        "AWS hosting with redundancy",
        "DDoS protection",
        "Automated security patching",
        "Network isolation",
      ],
    },
    {
      title: "Data Privacy",
      items: [
        "Data residency options",
        "Right to deletion",
        "Data portability",
        "Privacy by design",
      ],
    },
  ];

  return (
    <div className="security-page">
      <section className="security-hero">
        <div className="workflow-badge">
          <span className="badge-dot"></span>
          Security & Compliance
        </div>
        <h1 className="security-title">Your Security is Our Priority</h1>
        <p className="security-subtitle">
          Enterprise-grade security and compliance to protect your financial
          data. Trusted by thousands of businesses worldwide.
        </p>
      </section>

      <section className="security-stats">
        <div className="stat-box">
          <h3>99.9%</h3>
          <p>Uptime SLA</p>
        </div>
        <div className="stat-box">
          <h3>256-bit</h3>
          <p>AES Encryption</p>
        </div>
        <div className="stat-box">
          <h3>24/7</h3>
          <p>Security Monitoring</p>
        </div>
        <div className="stat-box">
          <h3>Zero</h3>
          <p>Data Breaches</p>
        </div>
      </section>

      <section className="security-features-section">
        <h2>How We Protect Your Data</h2>
        <div className="security-features-grid">
          {securityFeatures.map((feature, index) => (
            <div key={index} className="security-feature-card">
              <div className="security-feature-icon">{feature.icon}</div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="certifications-section">
        <h2>Certifications & Compliance</h2>
        <p className="certifications-subtitle">
          We maintain the industry's most rigorous security standards
        </p>
        <div className="certifications-grid">
          {certifications.map((cert, index) => (
            <div key={index} className="certification-badge">
              <div className="cert-icon">{cert.icon}</div>
              <p>{cert.name}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="data-protection-section">
        <h2>Comprehensive Data Protection</h2>
        <div className="data-protection-grid">
          {dataProtection.map((category, index) => (
            <div key={index} className="protection-card">
              <h3>{category.title}</h3>
              <ul>
                {category.items.map((item, idx) => (
                  <li key={idx}>
                    <span className="check-icon">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="security-practices">
        <h2>Our Security Practices</h2>
        <div className="practices-grid">
          <div className="practice-item">
            <h4>🔍 Vulnerability Management</h4>
            <p>
              Regular penetration testing and vulnerability assessments by
              third-party security experts.
            </p>
          </div>
          <div className="practice-item">
            <h4>📚 Employee Training</h4>
            <p>
              Comprehensive security training for all employees with regular
              updates and certifications.
            </p>
          </div>
          <div className="practice-item">
            <h4>🚨 Incident Response</h4>
            <p>
              Dedicated incident response team available 24/7 with established
              protocols and procedures.
            </p>
          </div>
          <div className="practice-item">
            <h4>💾 Data Backups</h4>
            <p>
              Automated daily backups with geo-redundancy and point-in-time
              recovery capabilities.
            </p>
          </div>
          <div className="practice-item">
            <h4>🔬 Security Audits</h4>
            <p>
              Quarterly third-party security audits and continuous internal
              security assessments.
            </p>
          </div>
          <div className="practice-item">
            <h4>📖 Transparency</h4>
            <p>
              Regular security updates and transparent communication about our
              security posture.
            </p>
          </div>
        </div>
      </section>

      <section className="security-resources">
        <h2>Security Resources</h2>
        <div className="resources-grid">
          <div className="resource-card">
            <h3>📄 Security Whitepaper</h3>
            <p>Detailed overview of our security architecture and practices.</p>
            <button
              className="btn-secondary"
              onClick={() => alert("Downloading whitepaper...")}
            >
              Download PDF
            </button>
          </div>
          <div className="resource-card">
            <h3>🔐 Security Portal</h3>
            <p>
              Access our security documentation and compliance certificates.
            </p>
            <button
              className="btn-secondary"
              onClick={() => alert("Opening security portal...")}
            >
              Visit Portal
            </button>
          </div>
          <div className="resource-card">
            <h3>🐛 Bug Bounty Program</h3>
            <p>Help us improve security and earn rewards for findings.</p>
            <button
              className="btn-secondary"
              onClick={() => alert("Opening bug bounty program...")}
            >
              Learn More
            </button>
          </div>
        </div>
      </section>

      <section className="security-cta">
        <h2>Questions About Security?</h2>
        <p>Our security team is here to answer any questions you may have.</p>
        <button className="btn-primary" onClick={() => navigate("/contact")}>
          Contact Security Team
        </button>
      </section>
    </div>
  );
};

export default Security;
