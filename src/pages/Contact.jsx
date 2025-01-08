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
        <iframe
          src="https://docs.google.com/forms/d/e/1FAIpQLSf8r4WkwUaEaydtg0Cwt-6zjorsdGEE-2h6NpQelhVAtnVLDw/viewform?embedded=true"
          width="100%"
          height="952"
          frameborder="0"
          marginheight="0"
          marginwidth="0"
        >
          Loading…
        </iframe>
      </section>

      <section>
        <SocialMediaIntegration />
      </section>
    </main>
  );
};

export default Contact;
