import React from "react";
import { Link } from "react-router-dom";
import "./footer.css";

import NewsLetter from "./NewsLetter";

import SocialLinks from "./SocialIcons";
import ContactDetails from "./ContactDetails";
import navData from "../data/nav-links.json";
import RandomVerse from "./RandomVerse";

import { VscLinkExternal } from "react-icons/vsc";

const Footer = () => {
  const filteredLinks = navData.navlinks.filter((link) =>
    ["Home", "About", "History", "Connect"].includes(link.label)
  );

  return (
    <main>
      <footer className="footer">
        <div className="footer_container">
          <section className="logo_container">
            <img
              src="https://github.com/AnilKumar3494/ILCC-images/blob/main/logo/ILCC%20Logo%20New%20Final.png?raw=true"
              alt="ILCC"
              className="logo"
              style={{ width: "160px" }}
            />

            <SocialLinks />
          </section>

          <section className="quicklinks_container">
            <h4>Quick Links</h4>
            <div className="quicklink">
              {filteredLinks.map((link) => (
                <li key={link.id}>
                  <Link to={link.path}>
                    <div className="quicklinks_withicon">
                      <span>{link.label}</span>{" "}
                      <span>
                        <VscLinkExternal />
                      </span>
                    </div>
                  </Link>
                </li>
              ))}
            </div>
          </section>

          <section className="footer_links">
            <div className="footer_contactDetails">
              <h4>Contact Us</h4>
              <ContactDetails maxId={3} />
            </div>
          </section>
        </div>

        <div className="randomverse">
          <RandomVerse />
        </div>

        <div className="copyright">
          <p>Here @copyright comes</p>
        </div>
      </footer>
    </main>
  );
};

export default Footer;
