import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhoneAlt } from "@fortawesome/free-solid-svg-icons";
import "./TopBar.css";

import SocialLinks from "./SocialIcons";
import contactInfoData from "../data/contact-info-data.json";

const TopBar = () => {
  const iconMappings = {
    faEnvelope: faEnvelope,
    faPhoneAlt: faPhoneAlt,
    // Add more mappings as needed for other icons
  };

  return (
    <div className="top_bar flex_row padding_inline">
      <div className="contact_details">
        {contactInfoData.contactInfo.map((info) => (
          <div
            className="contact_info flex_row"
            title={info.title}
            key={info.id}
          >
            <FontAwesomeIcon icon={iconMappings[info.iconName]} />
            <a href={info.href}>
              {info.href.slice(info.href.indexOf(":") + 1)}
            </a>
          </div>
        ))}
      </div>

      <div className="social_links">
        <SocialLinks />
      </div>
    </div>
  );
};

export default TopBar;
