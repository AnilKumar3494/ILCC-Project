import React from "react";
import "./contact.css";

// components imports
import LocationMap from "../components/LocationMap";
import ImageGallery from "../components/ImageGallery";

import contactInfoData from "../data/contact-info-data.json";
import jubileeInfoData from "../data/jubilee-info-data.json"

import { data } from "autoprefixer";


const Contact = () => {
  return (
    <main>
      <section className="contact_members">
        <h2>Meet Our Team</h2>

        <h4>Dedicated Members of Our Community</h4>
        <ImageGallery contactInfoData={contactInfoData} />
        

        
        <h4>Jubilee Members</h4>
        <ImageGallery jubileeInfoData={jubileeInfoData} />

        
      </section>

      <section className="contact_location_info">
        <LocationMap />
      </section>
    </main>
  );
};

export default Contact;
