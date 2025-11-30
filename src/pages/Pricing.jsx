import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import CubeGridAnimation from '../components/CubeGridAnimation';
import '../styles/Pricing.css';

const Pricing = () => {
  const [isAnnual, setIsAnnual] = useState(false);
  const navigate = useNavigate();

  const plans = [
    {
      name: 'Starter',
      monthlyPrice: 29,
      annualPrice: 290,
      description: 'Perfect for individuals and small teams',
      features: [
        'Up to 5 team members',
        '100 transactions/month',
        'Basic analytics',
        'Email support',
        'Mobile app access',
        'API access'
      ],
      popular: false
    },
    {
      name: 'Professional',
      monthlyPrice: 99,
      annualPrice: 990,
      description: 'For growing businesses with advanced needs',
      features: [
        'Up to 25 team members',
        'Unlimited transactions',
        'Advanced analytics',
        'Priority support 24/7',
        'Custom integrations',
        'Advanced security',
        'Multi-currency support',
        'Automated workflows'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      monthlyPrice: 299,
      annualPrice: 2990,
      description: 'For large organizations requiring customization',
      features: [
        'Unlimited team members',
        'Unlimited everything',
        'AI-powered insights',
        'Dedicated account manager',
        'Custom development',
        'SLA guarantee',
        'White-label options',
        'Advanced compliance tools',
        'Custom training'
      ],
      popular: false
    }
  ];

  const handleSelectPlan = (planName) => {
    alert(`Selected ${planName} plan! Redirecting to signup...`);
    navigate('/signup');
  };

  return (
    <div className="pricing-page">
      <CubeGridAnimation />
      
      <section className="pricing-hero">
        <h1 className="pricing-title">Simple, Transparent Pricing</h1>
        <p className="pricing-subtitle">
          Choose the perfect plan for your business needs
        </p>

        <div className="pricing-toggle">
          <span className={!isAnnual ? 'active' : ''}>Monthly</span>
          <button 
            className="toggle-button" 
            onClick={() => setIsAnnual(!isAnnual)}
          >
            <span className={`toggle-slider ${isAnnual ? 'annual' : ''}`}></span>
          </button>
          <span className={isAnnual ? 'active' : ''}>
            Annual <span className="save-badge">Save 20%</span>
          </span>
        </div>
      </section>

      <section className="pricing-cards-section">
        <div className="pricing-cards">
          {plans.map((plan, index) => (
            <div 
              key={index} 
              className={`pricing-card ${plan.popular ? 'popular' : ''}`}
            >
              {plan.popular && <div className="popular-badge">Most Popular</div>}
              
              <h3 className="plan-name">{plan.name}</h3>
              <p className="plan-description">{plan.description}</p>
              
              <div className="plan-price">
                <span className="currency">$</span>
                <span className="amount">
                  {isAnnual ? plan.annualPrice : plan.monthlyPrice}
                </span>
                <span className="period">
                  /{isAnnual ? 'year' : 'month'}
                </span>
              </div>

              <button 
                className={`plan-button ${plan.popular ? 'popular-button' : ''}`}
                onClick={() => handleSelectPlan(plan.name)}
              >
                {plan.popular ? 'Start Free Trial' : 'Get Started'}
              </button>

              <ul className="plan-features">
                {plan.features.map((feature, idx) => (
                  <li key={idx}>
                    <span className="check-icon">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="pricing-faq">
        <h2>Frequently Asked Questions</h2>
        <div className="faq-grid">
          <div className="faq-item">
            <h4>Can I change plans later?</h4>
            <p>Yes, you can upgrade or downgrade your plan at any time. Changes will be reflected in your next billing cycle.</p>
          </div>
          <div className="faq-item">
            <h4>Is there a free trial?</h4>
            <p>We offer a 14-day free trial for the Professional plan with no credit card required.</p>
          </div>
          <div className="faq-item">
            <h4>What payment methods do you accept?</h4>
            <p>We accept all major credit cards, PayPal, and wire transfers for Enterprise customers.</p>
          </div>
          <div className="faq-item">
            <h4>Can I cancel anytime?</h4>
            <p>Yes, you can cancel your subscription at any time with no cancellation fees.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Pricing;
