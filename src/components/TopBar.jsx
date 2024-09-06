import React from "react";
import "./TopBar.css";

import ContactDetails from "./ContactDetails";
import SocialLinks from "./SocialIcons";

const TopBar = () => {
  return (
    <section className="top_bar inline_padding">
      <div className="contact_details">
        <ContactDetails maxId={2} />
      </div>

      <div className="social_links">
        <SocialLinks />
      </div>
    </section>
  );
};

export default TopBar;
