import React from "react";

const LocationMap = () => {
  return (
    <div>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2862.572998018627!2d-74.9813731!3d40.160629799999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c6ad398933e991%3A0xbfe9481d06742eb9!2s1900%20Meadowbrook%20Rd%2C%20Feasterville-Trevose%2C%20PA%2019053!5e1!3m2!1sen!2sus!4v1721522849713!5m2!1sen!2sus"
        width="600"
        height="450"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Google Map"
      ></iframe>
    </div>
  );
};

export default LocationMap;
