import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faPhoneAlt,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import contactInfoData from "../data/contact-info-data.json";

import "./TopBar.css";

const iconMappings = {
  faEnvelope: faEnvelope,
  faPhoneAlt: faPhoneAlt,
  faLocationDot: faLocationDot,
};

const ContactDetails = ({ maxId }) => {
  return (
    <>
      {contactInfoData.contactInfo
        .filter((info) => info.id <= maxId)
        .map((info) => (
          <div
            className="contact_info flex_row hover"
            title={info.title}
            key={info.id}
          >
            <FontAwesomeIcon
              icon={iconMappings[info.iconName]}
              className="fa_icons "
            />
            <a href={info.href} target="_blank" title={info.title}>
              {info.address}
            </a>
          </div>
        ))}
    </>
  );
};

export default ContactDetails;
