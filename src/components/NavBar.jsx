import React, { useState, useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import navLinks from "../data/nav-links.json";
import "./NavBar.css";

const NavBar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(null);
  const location = useLocation();
  const navigate = useNavigate();
  const navRef = useRef(null);

  const handleDropdownToggle = (navLinkItem) => {
    setDropdownOpen((prev) =>
      prev === navLinkItem.id ? null : navLinkItem.id
    );
  };

  const handleLinkClick = (path) => {
    if (path.startsWith("#")) {
      const targetId = path.substring(1);
      const targetElement = document.getElementById(targetId);
      if (location.pathname !== "/") {
        navigate("/", { state: { scrollTo: targetId } });
      } else {
        targetElement?.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      navigate(path);
    }
    setDropdownOpen(null);
  };

  return (
    <nav className="main_nav_container inline_padding" ref={navRef}>
      <ul className="navlinks">
        {navLinks.navlinks.map((navLinkItem) => (
          <li
            key={navLinkItem.id}
            className={`nav_item ${
              dropdownOpen === navLinkItem.id ? "open" : ""
            }`}
            onMouseEnter={() =>
              navLinkItem.children && setDropdownOpen(navLinkItem.id)
            }
            onMouseLeave={() => navLinkItem.children && setDropdownOpen(null)}
          >
            <span
              onClick={() => handleLinkClick(navLinkItem.path)}
              className={`link ${
                location.pathname === navLinkItem.path ? "active" : ""
              }`}
              title={navLinkItem.label}
            >
              {navLinkItem.label}
              {navLinkItem.children && (
                <span className="dropdown_arrow">▼</span>
              )}
            </span>
            {navLinkItem.children && (
              <ul className="dropdown_menu">
                {navLinkItem.children.map((child) => (
                  <li key={child.id} className="dropdown_item">
                    <span
                      onClick={() => handleLinkClick(child.path)}
                      className="dropdown_link"
                    >
                      {child.label}
                    </span>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
