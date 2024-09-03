import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";
import { AiOutlineClose } from "react-icons/ai"; // Close icon for the hamburger menu

import navLinks from "../data/dashboard-data.json";

import "./NavBar.css";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State to control menu visibility
  const location = useLocation();
  const navRef = useRef(null); // Ref for the navigation container

  const toggleMenu = () => {
    setIsMenuOpen((prevState) => !prevState); // Toggle menu state
  };

  const handleClickOutside = (event) => {
    // Check if click is outside the navigation container
    if (navRef.current && !navRef.current.contains(event.target)) {
      setIsMenuOpen(false);
    }
  };

  useEffect(() => {
    // Add event listener when menu is open
    if (isMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      // Cleanup event listener on component unmount
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMenuOpen]); // Re-run effect when isMenuOpen changes

  return (
    <nav className="main_nav_container inline_padding" ref={navRef}>
      {/* Logo and Hamburger menu */}
      <div className="small_navlinks">
        <div className="logo_container">
          <img src={navLinks.navlinks[2]} alt="ILCC" className="logo" />
        </div>
        <div className="hamburgermenu" onClick={toggleMenu}>
          {isMenuOpen ? <AiOutlineClose /> : <RxHamburgerMenu />}{" "}
          {/* Toggle icons */}
        </div>
      </div>

      {/* Navigation links */}
      <ul className={`navlinks ${isMenuOpen ? "open" : ""}`}>
        {navLinks.navlinks.map((navLinkItem) => (
          <li key={navLinkItem.id}>
            <Link
              to={navLinkItem.path}
              title={navLinkItem.label}
              className={`link nav_item hover ${
                location.pathname === navLinkItem.path ? "active" : ""
              }`}
              onClick={() => setIsMenuOpen(false)} // Close menu on link click
            >
              {navLinkItem.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
