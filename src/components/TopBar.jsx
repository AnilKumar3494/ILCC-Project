import React from "react";
import "./TopBar.css";

import ContactDetails from "./ContactDetails";
import SocialLinks from "./SocialIcons";
import randomVerse from "@/utils/getRandomVerse";

const TopBar = () => {
  return (
    <section className="top_bar inline_padding">
      {/* <div className="contact_info">
        <div className="contact_details">
          <ContactDetails maxId={2} />
        </div>

        <div className="social_links">
          <SocialLinks />
        </div>
      </div> */}

      <div className="random_quote">
        {/* Getting a Random Verse  */}
        <div className="random_verse">
          <h4>{`${randomVerse.text} - ${randomVerse.reference}`}</h4>
          <p></p>
        </div>
      </div>
    </section>
  );
};

export default TopBar;
