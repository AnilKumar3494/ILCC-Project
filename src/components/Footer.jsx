import React from "react";
import { Link } from "react-router-dom";
import "./footer.css";

import NewsLetter from "./NewsLetter";
import Logo from "./Logo";

import SocialLinks from "./SocialIcons";
import ContactDetails from "./ContactDetails";
import randomVerse from "../utils/getRandomVerse";
import navLinks from "../data/dashboard-data.json";

const Footer = () => {
  return (
    <section className="footer footer_grid_template">
      <div className="footer_content">
        <div className="logo">
          {/* <Logo /> */}
          <h3>Logo</h3>
          <p>{`"${randomVerse.text}" ~ ${randomVerse.reference}`}</p>
        </div>
      </div>

      <NewsLetter />

      <div className="footer_NavLinks">
        {/* this could be component */}
        {navLinks.navlinks.map((navLinkItems) => (
          <li key={navLinkItems.id}>
            <Link
              to={navLinkItems.path}
              title={navLinkItems.label}
            >{`${navLinkItems.label} |`}</Link>
          </li>
        ))}
      </div>

      <div className="footer_contactDetails">
        <ContactDetails maxId={3} />
      </div>

      <div className="footer_socialLinks">
        <h4>Follow Us:</h4>
        <SocialLinks />
      </div>
    </section>
  );
};

export default Footer;
