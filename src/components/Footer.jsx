import React from "react";
import "./footer.css";

import NewsLetter from "./NewsLetter";
import Logo from "./Logo";

import randomVerse from "../utils/getRandomVerse";
import SocialLinks from "./SocialIcons";

const Footer = () => {
  return (
    <section className="footer">
      <NewsLetter />

      <div className="footerContent">
        <div className="logo">
          <Logo />
          <p>{randomVerse.text}</p>
        </div>

        <div className="footerLinks">
          <p>Quick Links go here - Link | Link | Link</p>
        </div>
      </div>

      <SocialLinks />
    </section>
  );
};

export default Footer;
