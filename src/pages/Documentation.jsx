import React, { useState } from "react";
import "../styles/Documentation.css";

const Documentation = () => {
  const [selectedSection, setSelectedSection] = useState("getting-started");

  const sidebar = [
    {
      title: "Getting Started",
      id: "getting-started",
      items: [
        "Quick Start",
        "Installation",
        "First Transaction",
        "Account Setup",
      ],
    },
    {
      title: "API Reference",
      id: "api",
      items: ["Authentication", "Endpoints", "Rate Limits", "Webhooks"],
    },
    {
      title: "Integrations",
      id: "integrations",
      items: ["QuickBooks", "Stripe", "Xero", "Salesforce"],
    },
    {
      title: "Features",
      id: "features",
      items: ["Multi-Currency", "Automation", "Reports", "Team Management"],
    },
    {
      title: "Security",
      id: "security",
      items: ["Encryption", "2FA Setup", "Compliance", "Data Protection"],
    },
    {
      title: "Troubleshooting",
      id: "troubleshooting",
      items: ["Common Issues", "Error Codes", "Support", "FAQs"],
    },
  ];

  const content = {
    "getting-started": {
      title: "Getting Started with Nexio",
      sections: [
        {
          heading: "Welcome to Nexio",
          content:
            "Nexio is a powerful financial management platform designed to simplify your workflow. This guide will help you get started in minutes.",
        },
        {
          heading: "Quick Start",
          content: "Follow these simple steps to set up your account:",
          steps: [
            "Create your account at nexio.com/signup",
            "Verify your email address",
            "Complete your company profile",
            "Connect your first integration",
            "Start processing transactions",
          ],
        },
        {
          heading: "Installation",
          content: "You can access Nexio through multiple channels:",
          code: `// Install the Nexio SDK
npm install @nexio/sdk

// Initialize the client
import { NexioClient } from '@nexio/sdk';

const client = new NexioClient({
  apiKey: 'your_api_key_here'
});`,
        },
        {
          heading: "First Transaction",
          content: "Processing your first transaction is simple:",
          code: `// Create a transaction
const transaction = await client.transactions.create({
  amount: 100.00,
  currency: 'USD',
  description: 'First transaction',
  metadata: {
    orderId: '12345'
  }
});

console.log(transaction.id);`,
        },
      ],
    },
    api: {
      title: "API Reference",
      sections: [
        {
          heading: "Authentication",
          content:
            "Nexio uses API keys to authenticate requests. Include your API key in the Authorization header:",
          code: `curl https://api.nexio.com/v1/transactions \\
  -H "Authorization: Bearer your_api_key"`,
        },
        {
          heading: "Endpoints",
          content: "Base URL: https://api.nexio.com/v1",
          list: [
            "POST /transactions - Create a transaction",
            "GET /transactions/:id - Retrieve a transaction",
            "GET /transactions - List all transactions",
            "PATCH /transactions/:id - Update a transaction",
            "DELETE /transactions/:id - Delete a transaction",
          ],
        },
        {
          heading: "Rate Limits",
          content: "API rate limits by plan:",
          table: [
            ["Plan", "Requests/hour", "Burst"],
            ["Starter", "1,000", "100/min"],
            ["Professional", "10,000", "500/min"],
            ["Enterprise", "Unlimited", "2,000/min"],
          ],
        },
      ],
    },
  };

  const currentContent = content[selectedSection] || content["getting-started"];

  return (
    <div className="documentation-page">
      <div className="docs-header">
        <div className="workflow-badge">
          <span className="badge-dot"></span>
          Documentation
        </div>
        <h1>Nexio Documentation</h1>
        <p>Everything you need to integrate and use Nexio</p>
        <div className="docs-search">
          <input type="text" placeholder="Search documentation..." />
          <button>🔍</button>
        </div>
      </div>

      <div className="docs-container">
        <aside className="docs-sidebar">
          {sidebar.map((section) => (
            <div key={section.id} className="sidebar-section">
              <button
                className={`sidebar-title ${
                  selectedSection === section.id ? "active" : ""
                }`}
                onClick={() => setSelectedSection(section.id)}
              >
                {section.title}
              </button>
              <ul className="sidebar-items">
                {section.items.map((item) => (
                  <li key={item}>
                    <a href={`#${item.toLowerCase().replace(" ", "-")}`}>
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </aside>

        <main className="docs-content">
          <h1>{currentContent.title}</h1>

          {currentContent.sections.map((section, index) => (
            <div key={index} className="content-section">
              <h2>{section.heading}</h2>
              <p>{section.content}</p>

              {section.steps && (
                <ol className="steps-list">
                  {section.steps.map((step, i) => (
                    <li key={i}>{step}</li>
                  ))}
                </ol>
              )}

              {section.code && (
                <pre className="code-block">
                  <code>{section.code}</code>
                  <button className="copy-btn">Copy</button>
                </pre>
              )}

              {section.list && (
                <ul className="endpoint-list">
                  {section.list.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              )}

              {section.table && (
                <table className="docs-table">
                  <thead>
                    <tr>
                      {section.table[0].map((header, i) => (
                        <th key={i}>{header}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {section.table.slice(1).map((row, i) => (
                      <tr key={i}>
                        {row.map((cell, j) => (
                          <td key={j}>{cell}</td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              )}
            </div>
          ))}

          <div className="docs-footer">
            <div className="docs-navigation">
              <button className="nav-btn">← Previous</button>
              <button className="nav-btn">Next →</button>
            </div>
            <div className="docs-feedback">
              <p>Was this page helpful?</p>
              <button className="feedback-btn">👍 Yes</button>
              <button className="feedback-btn">👎 No</button>
            </div>
          </div>
        </main>

        <aside className="docs-toc">
          <h4>On This Page</h4>
          <ul>
            {currentContent.sections.map((section, index) => (
              <li key={index}>
                <a href={`#${section.heading.toLowerCase().replace(" ", "-")}`}>
                  {section.heading}
                </a>
              </li>
            ))}
          </ul>
        </aside>
      </div>
    </div>
  );
};

export default Documentation;
