import React from "react";
import "./contact.css";

// components imports
import SocialMediaIntegration from "@/components/SocialMediaIntegration";

const Contact = () => {
  return (
    <main>
      <section className="contact_members">
        <h2>Connect With Us</h2>
      </section>

      <section>
        <SocialMediaIntegration />
      </section>
    </main>
  );
};

export default Contact;
