import React from 'react'
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const articles = [
  {
    category: "SHIPPING TIPS",
    title: "How to Choose the Right Shipping Method for Your Business",
    image:
      "https://images.unsplash.com/photo-1494412519320-aa613dfb7738?auto=format&fit=crop&w=800&q=85",
  },
  {
    category: "BUSINESS",
    title: "Ways to Reduce Shipping Costs Without Compromising Quality",
    image:
      "https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?auto=format&fit=crop&w=800&q=85",
  },
  {
    category: "LOGISTICS",
    title: "Understanding Cargo Insurance and Why It Matters",
    image:
      "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&w=800&q=85",
  },
  {
    category: "INDUSTRY NEWS",
    title: "Future Trends in Logistics and Supply Chain Management",
    image:
      "https://images.unsplash.com/photo-1580674285054-bed31e145f59?auto=format&fit=crop&w=800&q=85",
  },
];

function Blog() {
  return (
    <section className="section blog" id="blog">
      <div className="section-heading">
        <span className="section-label">OUR LATEST ARTICLES</span>
        <h2>News & Insights</h2>
        <p>Discover useful insights from the shipping industry.</p>
      </div>

      <div className="blog-grid">
        {articles.map((article, index) => (
          <motion.article
            className="blog-card"
            key={article.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.12 }}
          >
            <img src={article.image} alt={article.title} />

            <div className="blog-content">
              <span>{article.category}</span>
              <h3>{article.title}</h3>

              <a href="#contact">
                Read More <ArrowUpRight size={17} />
              </a>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}

export default Blog;