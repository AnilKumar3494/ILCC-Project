import React from "react";
import "./contact.css";

// components imports
import LocationMap from "../components/LocationMap";
import ImageGallery from "../components/ImageGallery";

//data imports
import contactInfoData from "../data/contact-info-data.json";

const Contact = () => {
  return (
    <mainv>
      <h2>This will be the Contact Page</h2>

      <section className="contact_members">
        <h4>Our Dedicated Team</h4>
        <ImageGallery contactInfoData={contactInfoData} />
      </section>

      <section className="contact_location_info">
        <LocationMap />
      </section>
    </mainv>
  );
};

export default Contact;
