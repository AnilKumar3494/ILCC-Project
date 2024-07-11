import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhoneAlt } from "@fortawesome/free-solid-svg-icons";
import { faFacebookF, faTwitter } from "@fortawesome/free-brands-svg-icons";
import "./TopBar.css";

const TopBar = () => (
  <div className="top_bar flex_row padding_inline">
    <div className="contact_details flex_row">
      <div className="flex_row">
        <FontAwesomeIcon icon={faEnvelope} />
        <a href="mailto:abc@gmail.com">abc@gmail.com</a>
      </div>

      <div className="flex_row">
        <FontAwesomeIcon icon={faPhoneAlt} />
        <a href="tel:+1 123-456-789">+1 123-456-789</a>
      </div>
    </div>

    <div className="social_links flex_row">
      <a
        href="https://www.facebook.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon icon={faFacebookF} />
      </a>

      <a
        href="https://www.twitter.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon icon={faTwitter} />
      </a>
    </div>
  </div>
);

export default TopBar;
