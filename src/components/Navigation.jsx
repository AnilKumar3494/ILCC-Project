import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const Navigation = () => {
  return (
    <nav className="main_nav_container ml-auto">
      <ul className="main_nav">
        <li className="active">
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/sermons">Sermons</Link>
        </li>
        <li>
          <Link to="/events">Events</Link>
        </li>
        <li>
          <Link to="/blog">Blog</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
      <div className="search_button">
        <FontAwesomeIcon icon={faSearch} aria-hidden="true" />
      </div>
    </nav>
  );
};

export default Navigation;
