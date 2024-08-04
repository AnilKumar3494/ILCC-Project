import React from "react";
import { Link, useLocation } from "react-router-dom";

import navLinks from "../data/dashboard-data.json";

import "./NavBar.css";
import SearchBar from "./SearchBar";

const NavBar = () => {
  const location = useLocation();
  return (
    <nav className="main_nav_container ">
      <Link className="logo" to={"/"}>
        Logo
      </Link>

      <ul className="navlinks ">
        {navLinks.navlinks.map((navLinkItem) => (
          <li key={navLinkItem.id}>
            <Link
              to={navLinkItem.path}
              title={navLinkItem.label}
              className={`link nav_item hover ${
                location.pathname === navLinkItem.path ? "active" : ""
              }`}
            >{`${navLinkItem.label}`}</Link>
          </li>
        ))}
      </ul>

      <div class="input-box">
        <SearchBar />
      </div>
    </nav>
  );
};

export default NavBar;
