import React from "react";
import { Link } from "react-router-dom";
import "./footer.css";

import NewsLetter from "./NewsLetter";

import SocialLinks from "./SocialIcons";
import ContactDetails from "./ContactDetails";
import randomVerse from "../utils/getRandomVerse";
import navLinks from "../data/dashboard-data.json";

const Footer = () => {
  const lastID = navLinks.navlinks[navLinks.navlinks.length - 1].id;

  return (
    <footer className="footer">
      <div className="logo_container">
        <img src={navLinks.navlinks[2]} alt="ILCC" className="logo" />
        <p>{`"${randomVerse.text}" ~ ${randomVerse.reference}`}</p>
      </div>

      <NewsLetter />

      <div className="footer_links">
        <div className="footer_NavLinks">
          {/* this could be component */}
          <h3>Quick Links</h3>
          {navLinks.navlinks.map((navLinkItems) => (
            <li key={navLinkItems.id}>
              <Link to={navLinkItems.path} title={navLinkItems.label}>
                {`> ${navLinkItems.label}`}
                {/* {navLinkItems.id !== lastID && ` |`} */}
              </Link>
            </li>
          ))}
        </div>

        <div className="footer_contactDetails">
          <h3>Contact Us</h3>
          <ContactDetails maxId={3} />
        </div>

        {/* <div className="footer_socialLinks">
          <p>Follow Us:</p>
          <SocialLinks />
        </div> */}
      </div>
    </footer>
  );
};

export default Footer;
