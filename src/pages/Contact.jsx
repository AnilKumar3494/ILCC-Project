import React from "react";
import "./contact.css";

// components imports
import LocationMap from "../components/LocationMap";
import ImageGallery from "../components/ImageGallery";

import contactInfoData from "../data/contact-info-data.json";

const Contact = () => {
  return (
    <main>
      <h2>Contact Us</h2>

      <section className="contact_members">
        <h3>Dedicated Members of Our Community</h3>
        <ImageGallery contactInfoData={contactInfoData} />
      </section>

      <section className="contact_location_info">
        <LocationMap />
      </section>
    </main>
  );
};

export default Contact;
