import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import SocialLinks from "./SocialIcons";
import contactInfoData from "../data/contact-info-data.json";

import "./TopBar.css";
import ContactDetails from "./ContactDetails";

const TopBar = () => {
  return (
    <div className="top_bar flex_row padding_inline">
      <div className="contact_details">
        <ContactDetails maxId={2} />
      </div>

      <div className="social_links">
        <SocialLinks />
      </div>
    </div>
  );
};

export default TopBar;
