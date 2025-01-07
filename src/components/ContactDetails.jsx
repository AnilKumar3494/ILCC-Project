import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faPhoneAlt,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import contactInfoData from "../data/contact-info-data.json";
import jubileeInfoData from "../data/jubilee-info-data.json";

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
          <div title={info.title} key={info.id}>
            <a
              className="contact_info"
              href={info.href}
              target="_blank"
              title={info.title}
            >
              <FontAwesomeIcon
                icon={iconMappings[info.iconName]}
                className="fa_icons "
              />
              {info.address}
            </a>
          </div>
        ))}

        
    </>
  );
};

export default ContactDetails;
