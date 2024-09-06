import React from "react";
import "./contact.css";

// components imports
import LocationMap from "../components/LocationMap";
import ImageGallery from "../components/ImageGallery";

//data imports
import contactInfoData from "../data/contact-info-data.json";

const Contact = () => {
  return (
    <main>
      <h1>Contact Us</h1>

      <section className="contact_members">
        <h1>Dedicated Members of Our Community</h1>
        <ImageGallery contactInfoData={contactInfoData} />
      </section>

      <section className="contact_location_info">
        <LocationMap />
      </section>
    </main>
  );
};

export default Contact;
