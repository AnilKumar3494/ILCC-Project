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
    <div className="flex gap-3">
      {socialLinksData.socialLinks.map((socialInfo) => (
        <a href={socialInfo.href} key={socialInfo.id} title={socialInfo.title}>
          <FontAwesomeIcon
            icon={iconMappings[socialInfo.iconName]}
            className="fa_icons size-6 hover:scale-125 transition-all duration-200 ease-in-out"
          />
        </a>
      ))}
    </div>
  );
};

export default SocialLinks;
