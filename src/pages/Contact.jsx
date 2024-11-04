import React from "react";
import "./contact.css";

// components imports
import LocationMap from "../components/LocationMap";
import ImageGallery from "../components/ImageGallery";

import contactInfoData from "../data/contact-info-data.json";

const Contact = () => {
  return (
    <main>
      <section className="contact_members">
        <h2>Contact Us</h2>
        <h4>Dedicated Members of Our Community</h4>
        <ImageGallery contactInfoData={contactInfoData} />
      </section>

      <section className="contact_location_info">
        <LocationMap />
      </section>
    </main>
  );
};

export default Contact;
