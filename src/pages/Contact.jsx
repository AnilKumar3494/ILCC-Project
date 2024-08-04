import React from "react";
import "./contact.css";

// components imports
import LocationMap from "../components/LocationMap";
import ContactDetails from "../components/ContactDetails";
import ImageGallery from "../components/ImageGallery";

//data imports
import contactInfoData from "../data/contact-info-data.json";

const Contact = () => {
  return (
    <div>
      <h2>This will be the Contact Page</h2>

      <section className="contact_members">
        <h4>Our Dedicated Team</h4>
        <ImageGallery contactInfoData={contactInfoData} />
      </section>

      <section className="contact_location_info">
        <div>
          <ContactDetails maxId={3} />
        </div>
        <>
          <LocationMap />
        </>
      </section>
    </div>
  );
};

export default Contact;
