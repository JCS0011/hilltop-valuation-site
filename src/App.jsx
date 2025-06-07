import React from 'react';
import './index.css';

function App() {
  return (
    <div className="container">
      <header className="hero">
        <h1>Hilltop Valuation Group</h1>
        <p>Clear, professional business valuations — so you can focus on running your business.</p>
      </header>

      <section className="ethos">
        <h2>Trusted Business Valuations</h2>
        <p>
          With decades of experience in small business operations and finance, we deliver valuations that are easy to understand, compliant with standards, and tailored to your goals. Our Certified Valuation Analyst (CVA) designation through the NACVA qualifies us to meet IRS and SBA requirements.
        </p>
        <div className="logos">
          <img src="/nacva-logo.png" alt="NACVA Logo" />
          <img src="/sba-logo.png" alt="SBA Logo" />
          <img src="/logo.png" alt="Hilltop Logo" />
        </div>
      </section>

      <section className="services">
        <h2>Services</h2>
        <ul>
          <li>Mergers & Acquisitions</li>
          <li>SBA Loan Requirements</li>
          <li>Estate and Succession Planning</li>
          <li>Partner Buyouts</li>
          <li>IRS Compliance</li>
          <li>Fair Market Value Reports</li>
          <li>Calculated Interest Valuations</li>
          <li>Other — Tell us your situation</li>
        </ul>
      </section>

      <section className="process">
        <h2>How It Works</h2>
        <p>
          Start by telling us what you need — we’ll handle the rest. We guide you through the process, gather the right data, and provide a clear and professionally prepared valuation report.
        </p>
      </section>

      <section className="contact">
        <h2>Contact Us</h2>
        <form
          action="https://formspree.io/f/mgvyobay"
          method="POST"
        >
          <label>
            Name:
            <input type="text" name="name" required />
          </label>
          <label>
            Email:
            <input type="email" name="email" required />
          </label>
          <label>
            Phone (optional):
            <input type="tel" name="phone" />
          </label>
          <label>
            Reason for Valuation:
            <select name="reason" required>
              <option value="">Select...</option>
              <option value="M&A">Mergers & Acquisitions</option>
              <option value="SBA">SBA Loan</option>
              <option value="Estate">Estate or Succession Planning</option>
              <option value="Buyout">Partner Buyout</option>
              <option value="IRS">IRS Requirement</option>
              <option value="FMV">Fair Market Value</option>
              <option value="Calculated">Calculated Interest Valuation</option>
              <option value="Other">Other</option>
            </select>
          </label>
          <label>
            Message:
            <textarea name="message" rows="4" required></textarea>
          </label>
          <button type="submit">Send</button>
        </form>
        <p>We’ll review and get back to you soon.</p>
      </section>

      <footer>
        <p>&copy; {new Date().getFullYear()} Hilltop Valuation Group, LLC. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;


