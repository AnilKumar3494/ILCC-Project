import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

import "./NavBar.css";
import SearchBar from "./SearchBar";

const NavBar = () => {
  const navLinks = [
    {
      id: 1,
      path: "/",
      label: "Home",
    },
    {
      id: 2,
      path: "/about",
      label: "About",
    },
    {
      id: 3,
      path: "/blog",
      label: "Blog",
    },
    {
      id: 4,
      path: "/contact",
      label: "Contact",
    },
  ];

  return (
    <nav className="main_nav_container ">
      <Link className="logo" to={"/"}>
        Logo
      </Link>

      <ul className="navlinks ">
        {navLinks.map((navLinkItems) => (
          <li key={navLinkItems.id}>
            <Link to={navLinkItems.path}>{navLinkItems.label}</Link>
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
