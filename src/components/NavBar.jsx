import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

import "./NavBar.css";
import SearchBar from "./SearchBar";

const NavBar = () => {
  return (
    <nav className="main_nav_container ">
      <div className="logo">Logo</div>

      <ul className="navlinks ">
        <li className="active">
          <Link className="link_attr" to="/">
            Home
          </Link>
        </li>
        <li>
          <Link className="link_attr" to="/about">
            About
          </Link>
        </li>
        <li>
          <Link className="link_attr" to="/sermons">
            Sermons
          </Link>
        </li>
        <li>
          <Link className="link_attr" to="/events">
            Events
          </Link>
        </li>
        <li>
          <Link className="link_attr" to="/blog">
            Blog
          </Link>
        </li>
        <li>
          <Link className="link_attr" to="/contact">
            Contact
          </Link>
        </li>
      </ul>

      <div class="input-box">
        <SearchBar />
      </div>
    </nav>
  );
};

export default NavBar;
