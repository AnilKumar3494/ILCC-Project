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
          <div className="logo_container">
            <Link to={"/"}>
              <img
                src="https://github.com/AnilKumar3494/ILCC-images/blob/main/logo/ILCC%20Logo%20New%20Final.png?raw=true"
                alt="ILCC"
                className="logo hover:scale-105 transition-all duration-200 ease-in-out"
              />
            </Link>
            <div className="socaillinks_container flex items-center justify-center w-full">
              <SocialLinks />
            </div>
          </div>

          <div className="quicklinks_container">
            <h4>Quick Links</h4>
            <div className="quicklink">
              {filteredLinks.map((link) => (
                <li key={link.id} className="hover:underline">
                  <Link to={link.path}>
                    <div className="quicklinks_withicon ">
                      <p>{link.label}</p>
                      <p>
                        <VscLinkExternal />
                      </p>
                    </div>
                  </Link>
                </li>
              ))}
            </div>
          </div>

          <div className="contactlinks_container">
            <h4>Contact Us</h4>
            <ContactDetails maxId={3} />
          </div>

          <div className="subscribe_container">
            <h4>Be a Part of Us</h4>
            <button className="button">
              <a href="https://docs.google.com/forms/d/e/1FAIpQLSem1uy1oVm9DDSKdPlrUcnXlb7TrQOGr01ETdp-_6P6iFlAbw/viewform?embedded=true">
                Join Us
              </a>
            </button>
          </div>
        </div>

        <div className="randomverse_container">
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
