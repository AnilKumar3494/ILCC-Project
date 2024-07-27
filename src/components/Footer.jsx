import React from "react";
import { Link } from "react-router-dom";
import "./footer.css";

import NewsLetter from "./NewsLetter";
import Logo from "./Logo";

import SocialLinks from "./SocialIcons";
import ContactDetails from "./ContactDetails";
import randomVerse from "../utils/getRandomVerse";
import navLinksData from "../data/dashboard-data.json";

const Footer = () => {
  const lastID = navLinksData.navlinks[navLinksData.navlinks.length - 1].id;

  return (
    <footer className="footer footer_grid_template">
      <div className="footer_content">
        <div className="logo">
          {/* <Logo /> */}
          <h2>Logo</h2>
          <p>{`"${randomVerse.text}" ~ ${randomVerse.reference}`}</p>
        </div>
      </div>

      <NewsLetter />

      <div className="footer_NavLinks">
        {/* this could be component */}
        {navLinksData.navlinks.map((navLinkItems) => (
          <li key={navLinkItems.id}>
            <Link to={navLinkItems.path} title={navLinkItems.label}>
              {navLinkItems.label}
              {navLinkItems.id !== lastID && ` |`}
            </Link>
          </li>
        ))}
      </div>

      <div className="footer_contactDetails">
        <ContactDetails maxId={3} />
      </div>

      <div className="footer_socialLinks">
        <p>Follow Us:</p>
        <SocialLinks />
      </div>
    </footer>
  );
};

export default Footer;
