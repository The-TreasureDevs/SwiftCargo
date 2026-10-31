import React from 'react'
import { motion } from "framer-motion";
import {
  Ship,
  Truck,
  Plane,
  Package,
  ArrowUpRight,
} from "lucide-react";

const services = [
  {
    icon: <Ship />,
    title: "Sea Freight",
    description:
      "Affordable and dependable ocean transportation for large cargo and international shipments.",
  },
  {
    icon: <Truck />,
    title: "Road Transport",
    description:
      "Reliable ground transportation connecting cities, businesses and communities.",
  },
  {
    icon: <Plane />,
    title: "Air Freight",
    description:
      "Fast international shipping solutions for urgent and time-sensitive deliveries.",
  },
  {
    icon: <Package />,
    title: "Package Delivery",
    description:
      "Safe and convenient delivery of personal packages and business products.",
  },
];

function Services() {
  return (
    <section className="section services" id="services">
      <div className="section-heading">
        <span className="section-label">WHAT WE OFFER</span>
        <h2>Our Shipping Services</h2>
        <p>
          Flexible logistics solutions designed to move your goods
          safely and efficiently.
        </p>
      </div>

      <div className="service-grid">
        {services.map((service, index) => (
          <motion.div
            className="service-card"
            key={service.title}
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.15 }}
          >
            <div className="service-icon">{service.icon}</div>

            <h3>{service.title}</h3>

            <p>{service.description}</p>

            <a href="#contact" aria-label={`Ask about ${service.title}`}>
              Learn More <ArrowUpRight size={17} />
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Services;