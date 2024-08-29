import React from "react";
import { Link, useLocation } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";

import navLinks from "../data/dashboard-data.json";

import "./NavBar.css";

const NavBar = () => {
  const location = useLocation();
  return (
    <nav className="main_nav_container inline_padding">
      {/* add hamburgermenuu here */}
      <div className="hamburgermenu">
        <RxHamburgerMenu />
      </div>

      <ul className="navlinks ">
        {navLinks.navlinks.map((navLinkItem) => (
          <li key={navLinkItem.id}>
            <Link
              to={navLinkItem.path}
              title={navLinkItem.label}
              className={`link nav_item hover ${
                location.pathname === navLinkItem.path ? "active" : ""
              }`}
            >
              {navLinkItem.id === 3 ? (
                <img src={navLinkItem.src} alt={navLinkItem.label} />
              ) : (
                `${navLinkItem.label}`
              )}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
