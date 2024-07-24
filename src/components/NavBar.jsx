import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

import navLinks from "../data/dashboard-data.json";

import "./NavBar.css";
import SearchBar from "./SearchBar";

const NavBar = () => {
  return (
    <nav className="main_nav_container ">
      <Link className="logo" to={"/"}>
        Logo
      </Link>

      <ul className="navlinks ">
        {navLinks.navlinks.map((navLinkItems) => (
          <li key={navLinkItems.id}>
            <Link
              to={navLinkItems.path}
              title={navLinkItems.label}
              className="link"
            >{`${navLinkItems.label}`}</Link>
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
