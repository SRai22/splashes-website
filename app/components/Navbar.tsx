"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import "./Navbar.css";
import locationsData from "../data/locations.json";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { label: "About", href: "/about" },
    { label: "Swimming Lessons", href: "/swimlessons" },
    { label: "Swim Programs", href: "/swimprograms" },
    { label: "Adult Programs", href: "/adultprograms" },
    { label: "Locations", href: "#" },
    { label: "Contact Us", href: "/contact" },
  ];

  // load the locations data from JSON file
  const locations = locationsData as { heading: string; items: string[] }[];

  const [locOpen, setLocOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo and Brand */}
        <div className="navbar-logo">
          <span className="navbar-brand">
            <a href="/">
              <Image
                src="/Graphics/logo-small.png"
                alt="Splashes Logo"
                width={90}
                height={45}
              />
            </a>
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
          {menuItems.map((item) => {
            if (item.label === "Locations") {
              return (
                <li
                  key={item.label}
                  className={`nav-item-locations ${locOpen ? "open" : ""}`}
                >
                  <button
                    className="locations-toggle"
                    onClick={() => setLocOpen(!locOpen)}
                    aria-expanded={locOpen}
                    aria-controls="locations-menu"
                  >
                    {item.label}
                  </button>

                  <div id="locations-menu" className="locations-menu">
                    <div className="locations-grid">
                      {locations.map((col) => (
                        <div className="locations-col" key={col.heading}>
                          <h4>{col.heading}</h4>
                          <ul>
                            {col.items.map((li) => (
                              <li key={li}>
                                <Link href="#">{li}</Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>
                </li>
              );
            }

            return (
              <li key={item.label}>
                <Link href={item.href}>{item.label}</Link>
              </li>
            );
          })}
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
