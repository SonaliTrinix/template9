import React from 'react';
import { useNavigate } from 'react-router-dom';
import WaveAnimation from '../components/WaveAnimation';
import '../styles/Features.css';

const Features = () => {
  const navigate = useNavigate();

  const features = [
    {
      icon: '💳',
      title: 'Multi-Currency Support',
      description: 'Handle transactions in over 150 currencies with real-time exchange rates.',
      benefits: ['Global payments', 'Auto conversion', 'Low fees']
    },
    {
      icon: '📱',
      title: 'Mobile-First Design',
      description: 'Access your financial dashboard anywhere with our responsive platform.',
      benefits: ['iOS & Android apps', 'Offline mode', 'Biometric security']
    },
    {
      icon: '🤖',
      title: 'AI-Powered Insights',
      description: 'Get intelligent recommendations based on your spending patterns.',
      benefits: ['Smart predictions', 'Anomaly detection', 'Budget optimization']
    },
    {
      icon: '🔗',
      title: 'Seamless Integrations',
      description: 'Connect with your favorite tools and platforms effortlessly.',
      benefits: ['API access', '1000+ integrations', 'Custom webhooks']
    },
    {
      icon: '📈',
      title: 'Advanced Reporting',
      description: 'Generate comprehensive reports with customizable templates.',
      benefits: ['Custom dashboards', 'Export to PDF/Excel', 'Scheduled reports']
    },
    {
      icon: '👥',
      title: 'Team Collaboration',
      description: 'Work together with role-based access and approval workflows.',
      benefits: ['User permissions', 'Approval chains', 'Activity logs']
    }
  ];

  return (
    <div className="features-page">
      <WaveAnimation />
      
      <section className="features-hero">
        <h1 className="features-title">Powerful Features for Modern Finance</h1>
        <p className="features-subtitle">
          Everything you need to manage, track, and grow your financial operations
        </p>
      </section>

      <section className="features-grid-section">
        <div className="features-grid">
          {features.map((feature, index) => (
            <div key={index} className="feature-card">
              <div className="feature-card-icon">{feature.icon}</div>
              <h3 className="feature-card-title">{feature.title}</h3>
              <p className="feature-card-description">{feature.description}</p>
              <ul className="feature-benefits">
                {feature.benefits.map((benefit, idx) => (
                  <li key={idx}>
                    <span className="check-icon">✓</span>
                    {benefit}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="cta-section">
        <h2>Ready to Transform Your Financial Management?</h2>
        <p>Join thousands of businesses already using Nexio</p>
        <button className="btn-primary" onClick={() => navigate('/signup')}>
          Start Free Trial
        </button>
      </section>
    </div>
  );
};

export default Features;
