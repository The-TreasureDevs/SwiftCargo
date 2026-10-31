import React from 'react'
import { Truck, Facebook, Instagram, Youtube } from "lucide-react";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <a href="#home" className="logo footer-logo">
          <Truck size={27} />
          <span>Swift<span>Cargo.</span></span>
        </a>

        <p>
          Reliable shipping. Secure delivery. Connecting the world.
        </p>

        <div className="social-links">
          <a href="https://facebook.com/swiftcargo" aria-label="Facebook">
            <Facebook />
          </a>

          <a href="https://instagram.com/swiftcargo" aria-label="Instagram">
            <Instagram />
          </a>

          <a href="https://youtube.com/@swiftcargo" aria-label="YouTube">
            <Youtube />
          </a>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} SwiftCargo. All rights reserved.</p>
        <a href="#home">Back to top ↑</a>
      </div>
    </footer>
  );
}

export default Footer;