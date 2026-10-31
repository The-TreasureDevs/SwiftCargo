import React from 'react'
import { motion } from "framer-motion";
import { ArrowRight, ShieldCheck, Clock } from "lucide-react";

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-overlay"></div>

      <motion.div
        className="hero-content"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9 }}
      >
        <span className="hero-label">
          YOUR TRUSTED LOGISTICS PARTNER
        </span>

        <h1>
          Fast, Reliable & Secure
          <span> Shipping Solutions.</span>
        </h1>

        <p>
          We deliver your packages safely and on time across local
          and international destinations. From personal items to
          business cargo, we make shipping simple.
        </p>

        <div className="hero-buttons">
          <a href="#contact" className="primary-button">
            Get Started <ArrowRight size={18} />
          </a>

          <a href="#services" className="secondary-button">
            Explore Services
          </a>
        </div>

        <div className="hero-features">
          <span><ShieldCheck size={19} /> Secure Delivery</span>
          <span><Clock size={19} /> On-Time Shipping</span>
        </div>
      </motion.div>
    </section>
  );
}

export default Hero;