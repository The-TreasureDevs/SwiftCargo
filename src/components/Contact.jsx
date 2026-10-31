import React from 'react'
import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Phone, Send } from "lucide-react";

function Contact() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setSubmitted(true);
    e.target.reset();
  }

  return (
    <section className="section contact" id="contact">
      <div className="contact-info">
        <span className="section-label">GET IN TOUCH</span>

        <h2>Let's Move Something Together.</h2>

        <p>
          Have a shipment to arrange or a question about our services?
          Send us a message. We'd love to hear from you.
        </p>

        <div className="contact-detail">
          <Mail />
          <span>swiftcargo20@gmail.com</span>
        </div>

        <div className="contact-detail">
          <Phone />
          <span>Contact our team</span>
        </div>

        <div className="contact-detail">
          <MapPin />
          <span>Serving local and international destinations</span>
        </div>
      </div>

      <motion.form
        className="contact-form"
        onSubmit={handleSubmit}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <h3>Send Us a Message</h3>

        <label htmlFor="name">Your Name</label>
        <input
          id="name"
          name="name"
          type="text"
          placeholder="Enter your name"
          required
        />

        <label htmlFor="email">Email Address</label>
        <input
          id="email"
          name="email"
          type="email"
          placeholder="Enter your email"
          required
        />

        <label htmlFor="message">Your Message</label>
        <textarea
          id="message"
          name="message"
          rows="5"
          placeholder="How can we help you?"
          required
        />

        <button type="submit" className="primary-button">
          Submit Message <Send size={17} />
        </button>

        {submitted && (
          <p className="success-message" role="status">
            Thank you! Your message has been received in this demo.
          </p>
        )}
      </motion.form>
    </section>
  );
}

export default Contact;