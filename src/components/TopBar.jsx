import React from "react";
import "./TopBar.css";

import ContactDetails from "./ContactDetails";
import SocialLinks from "./SocialIcons";

const TopBar = () => {
  return (
    <div className="top_bar flex_row">
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
