import React from "react";
import "./footer.css";

import randomVerse from "../utils/getRandomVerse";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="subscribeSection">
        <h2 className="subscribeTitle">Subscribe to Our Newsletter</h2>
        <form className="subscribeForm">
          <input type="text" placeholder="First name" className="input" />
          <input type="email" placeholder="Email address" className="input" />
          <button type="submit" className="button">
            Subscribe Now
          </button>
        </form>
      </div>
      <div className="footerContent">
        <div className="companyInfo">
          <h3>ILCC</h3>
          <p>{randomVerse.text}</p>
          <div className="socialLinks">
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Twitter
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Facebook
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Instagram
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          </div>
        </div>
        <div className="footerLinks">
          <div>
            <h4>Company</h4>
            <ul>
              <li>
                <a href="/about">About</a>
              </li>
              <li>
                <a href="/features">Features</a>
              </li>
              <li>
                <a href="/works">Works</a>
              </li>
              <li>
                <a href="/career">Career</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
