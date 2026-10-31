import React from 'react'
import { motion } from "framer-motion";
import { ArrowRight, PackageCheck } from "lucide-react";

function About() {
  return (
    <section className="section about" id="about">
      <motion.div
        className="about-image"
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <img
          src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1000&q=85"
          alt="Cargo warehouse and logistics operations"
        />

        <div className="image-badge">
          <PackageCheck size={30} />
          <div>
            <strong>Reliable Service</strong>
            <small>Every step of the way</small>
          </div>
        </div>
      </motion.div>

      <motion.div
        className="about-content"
        initial={{ opacity: 0, x: 40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <span className="section-label">ABOUT SWIFTCARGO</span>

        <h2>
          Moving Your World,
          <span> One Delivery at a Time.</span>
        </h2>

        <p>
          At SwiftCargo, we provide reliable shipping and logistics
          services for individuals and businesses. Our mission is to
          simplify transportation and cargo management through
          efficient, secure and affordable delivery solutions.
        </p>

        <p>
          Whether by air, sea or road, we are committed to connecting
          people and businesses through dependable logistics.
        </p>

        <a href="#services" className="text-link">
          Discover Our Services <ArrowRight size={18} />
        </a>
      </motion.div>
    </section>
  );
}

export default About;