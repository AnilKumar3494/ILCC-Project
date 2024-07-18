import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { faFacebookF, faInstagram } from "@fortawesome/free-brands-svg-icons";

import socialLinksData from "../data/contact-info-data.json";

const SocialLinks = () => {
  const iconMappings = {
    faFacebookF: faFacebookF,
    faInstagram: faInstagram,
    // Add more mappings as needed for other icons
  };

  return (
    <>
      {socialLinksData.socialLinks.map((socialInfo) => (
        <a href={socialInfo.href} key={socialInfo.id} title={socialInfo.title}>
          <FontAwesomeIcon icon={iconMappings[socialInfo.iconName]} />
        </a>
      ))}
    </>
  );
};

export default SocialLinks;
