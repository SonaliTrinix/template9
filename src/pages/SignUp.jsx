import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ThreeBackground from '../components/ThreeBackground';
import '../styles/SignUp.css';

const SignUp = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: '',
    agreeToTerms: false
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }

    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 8) {
      newErrors.password = 'Password must be at least 8 characters';
    }

    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
    }

    if (!formData.agreeToTerms) {
      newErrors.agreeToTerms = 'You must agree to the terms';
    }

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validateForm();

    if (Object.keys(newErrors).length === 0) {
      console.log('Form submitted:', formData);
      alert('Account created successfully! Welcome to Nexio!');
      navigate('/');
    } else {
      setErrors(newErrors);
    }
  };

  const handleGoogleSignUp = () => {
    alert('Google Sign Up - Connect to Google OAuth');
  };

  const handleGithubSignUp = () => {
    alert('GitHub Sign Up - Connect to GitHub OAuth');
  };

  return (
    <div className="signup-page">
      <ThreeBackground type="helix" />
      
      <div className="signup-container">
        <div className="signup-card">
          <h1 className="signup-title">Create Your Account</h1>
          <p className="signup-subtitle">Start your 14-day free trial today</p>

          <div className="social-signup">
            <button className="social-button google" onClick={handleGoogleSignUp}>
              <span className="social-icon">G</span>
              Continue with Google
            </button>
            <button className="social-button github" onClick={handleGithubSignUp}>
              <span className="social-icon">⚡</span>
              Continue with GitHub
            </button>
          </div>

          <div className="divider">
            <span>or sign up with email</span>
          </div>

          <form className="signup-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="fullName">Full Name</label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                placeholder="Enter your full name"
                className={errors.fullName ? 'error' : ''}
              />
              {errors.fullName && <span className="error-text">{errors.fullName}</span>}
            </div>

            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="you@company.com"
                className={errors.email ? 'error' : ''}
              />
              {errors.email && <span className="error-text">{errors.email}</span>}
            </div>

            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Create a strong password"
                className={errors.password ? 'error' : ''}
              />
              {errors.password && <span className="error-text">{errors.password}</span>}
            </div>

            <div className="form-group">
              <label htmlFor="confirmPassword">Confirm Password</label>
              <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                placeholder="Re-enter your password"
                className={errors.confirmPassword ? 'error' : ''}
              />
              {errors.confirmPassword && <span className="error-text">{errors.confirmPassword}</span>}
            </div>

            <div className="form-group checkbox-group">
              <label className="checkbox-label">
                <input
                  type="checkbox"
                  name="agreeToTerms"
                  checked={formData.agreeToTerms}
                  onChange={handleChange}
                />
                <span>
                  I agree to the <a href="#terms">Terms of Service</a> and{' '}
                  <a href="#privacy">Privacy Policy</a>
                </span>
              </label>
              {errors.agreeToTerms && <span className="error-text">{errors.agreeToTerms}</span>}
            </div>

            <button type="submit" className="signup-button">
              Create Account
            </button>
          </form>

          <p className="signin-link">
            Already have an account? <a href="#signin">Sign in</a>
          </p>
        </div>

        <div className="signup-benefits">
          <h2>Why choose Nexio?</h2>
          <div className="benefit-item">
            <span className="benefit-icon">✓</span>
            <div>
              <h4>No credit card required</h4>
              <p>Start your free trial immediately</p>
            </div>
          </div>
          <div className="benefit-item">
            <span className="benefit-icon">✓</span>
            <div>
              <h4>Cancel anytime</h4>
              <p>No long-term commitments</p>
            </div>
          </div>
          <div className="benefit-item">
            <span className="benefit-icon">✓</span>
            <div>
              <h4>24/7 Support</h4>
              <p>We're here to help you succeed</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
