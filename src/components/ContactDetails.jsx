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
            className="contact_info flex_row"
            title={info.title}
            key={info.id}
          >
            <FontAwesomeIcon icon={iconMappings[info.iconName]} />
            <a href={info.href}>{info.address}</a>
          </div>
        ))}
    </>
  );
};

export default ContactDetails;
