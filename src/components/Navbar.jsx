import React from 'react'
import { useState } from "react";
import { Menu, X, Truck } from "lucide-react";

const links = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Blog", href: "#blog" },
  { name: "Contact", href: "#contact" },
];

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="navbar">
      <a href="#home" className="logo">
        <Truck size={27} />
        <span>Swift<span>Cargo.</span></span>
      </a>

      <nav className={menuOpen ? "nav-links active" : "nav-links"}>
        {links.map((link) => (
          <a
            key={link.name}
            href={link.href}
            onClick={() => setMenuOpen(false)}
          >
            {link.name}
          </a>
        ))}

        <a
          href="#contact"
          className="nav-button"
          onClick={() => setMenuOpen(false)}
        >
          Get Started
        </a>
      </nav>

      <button
        className="menu-button"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle navigation"
      >
        {menuOpen ? <X /> : <Menu />}
      </button>
    </header>
  );
}

export default Navbar;