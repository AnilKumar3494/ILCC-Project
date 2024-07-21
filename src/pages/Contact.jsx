import React from "react";
import LocationMap from "../components/LocationMap";
import ContactDetails from "../components/ContactDetails";

import "./contact.css";

const Contact = () => {
  return (
    <div>
      <h1>This will be the Contact Page</h1>

      <div className="contact_location_info">
        <div>
          <ContactDetails maxId={3} />
        </div>
        <>
          <LocationMap />
        </>
      </div>
    </div>
  );
};

export default Contact;
