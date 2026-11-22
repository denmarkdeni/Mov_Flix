import React, { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section className="contact">
      <div className="contact-info">
        <span className="contact-badge">Get In Touch</span>
        <h2>Contact MovFlix</h2>
        <p>
          Have a movie request, streaming question, or feedback? Reach out to
          our support team anytime.
        </p>

        <div className="contact-details">
          <div className="detail-item">
            <span className="detail-label">Email</span>
            <p>support@movflix.com</p>
          </div>
          <div className="detail-item">
            <span className="detail-label">Phone</span>
            <p>+91 44 2245 1991</p>
          </div>
          <div className="detail-item">
            <span className="detail-label">Studio HQ</span>
            <p>Velachery Main Rd, Chennai, TN</p>
          </div>
        </div>
      </div>

      <form className="contact-form" onSubmit={handleSubmit}>
        {submitted && (
          <div className="success-banner">
            Message sent! We’ll get back to you shortly.
          </div>
        )}

        <div className="form-group">
          <label htmlFor="name">Your Name</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Enter your name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email Address</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="you@example.com"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            rows="4"
            placeholder="Tell us what you're looking for..."
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
        </div>

        <button type="submit" className="btn-submit">
          Send Message
        </button>
      </form>
    </section>
  );
}
