"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import "./Navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { label: "About", href: "/about" },
    { label: "Swimming Lessons", href: "#" },
    { label: "Swim Programs", href: "#" },
    { label: "Adult Programs", href: "#" },
    { label: "Locations", href: "#" },
    { label: "Contact Us", href: "#" },
  ];

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo and Brand */}
        <div className="navbar-logo">
          <span className="navbar-brand">
            <Image
              src="/Graphics/logo-small.png"
              alt="Splashes Logo"
              width={90}
              height={45}
            />
          </span>
        </div>

        {/* Hamburger button */}
        <button
          className={`navbar-toggle ${isOpen ? "open" : ""}`}
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </button>

        {/* Menu Items */}
        <ul className={`navbar-menu ${isOpen ? "active" : ""}`}>
          {menuItems.map((item) => (
            <li key={item.label}>
              <Link href={item.href}>{item.label}</Link>
            </li>
          ))}
          <li>
            <Link href="/signin" className="register-btn">
              Register / Sign In
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
