import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";
import { AiOutlineClose } from "react-icons/ai"; // Close icon for the hamburger menu
import navLinks from "../data/nav-links.json";
import "./NavBar.css";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State to control menu visibility
  const location = useLocation(); // React Router's hook to get current location
  const navigate = useNavigate(); // React Router's hook for navigation
  const navRef = useRef(null); // Ref for the navigation container

  // Toggle the menu open/close state
  const toggleMenu = () => {
    setIsMenuOpen((prevState) => !prevState);
  };

  // Handle click outside to close the menu when clicked outside the navbar
  const handleClickOutside = (event) => {
    if (navRef.current && !navRef.current.contains(event.target)) {
      setIsMenuOpen(false);
    }
  };

  useEffect(() => {
    // Add or remove event listener when menu is open or closed
    if (isMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      // Cleanup on component unmount
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMenuOpen]);

  // Function to handle smooth scrolling to sections with `#` links
  const handleScrollToSection = (path) => {
    if (window.location.pathname !== "/") {
      // Navigate to the homepage and then scroll to the section
      navigate("/", { replace: true });
      setTimeout(() => {
        document.querySelector(path)?.scrollIntoView({ behavior: "smooth" });
      }, 100); // Small delay to ensure the page is loaded
    } else {
      // Directly scroll to the section if already on the homepage
      document.querySelector(path)?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="main_nav_container inline_padding" ref={navRef}>
      {/* Logo and Hamburger menu */}
      {/* <div className="small_navlinks">
        <div className="hamburgermenu" onClick={toggleMenu}>
          {isMenuOpen ? <AiOutlineClose /> : <RxHamburgerMenu />}{" "}
      
        </div>
      </div> */}

      {/* Navigation links */}
      <ul className={`navlinks ${isMenuOpen ? "open" : ""}`}>
        {navLinks.navlinks.map((navLinkItem) => (
          <li key={navLinkItem.id}>
            {navLinkItem.path.startsWith("#") ? (
              <a
                href={navLinkItem.path}
                title={navLinkItem.label}
                className={`link hover ${
                  location.hash === navLinkItem.path ? "active" : "nav_item"
                }`}
                onClick={(e) => {
                  e.preventDefault(); // Prevent default anchor behavior
                  handleScrollToSection(navLinkItem.path); // Handle navigation and scrolling
                  setIsMenuOpen(false); // Close the menu
                }}
              >
                {navLinkItem.label}
              </a>
            ) : (
              <Link
                to={navLinkItem.path}
                title={navLinkItem.label}
                className={`link nav_item hover ${
                  location.pathname === navLinkItem.path ? "active" : ""
                }`}
                onClick={() => setIsMenuOpen(false)} // Close the menu after click
              >
                {navLinkItem.label}
              </Link>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
