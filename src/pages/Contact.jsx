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
          src="https://docs.google.com/forms/d/e/1FAIpQLSem1uy1oVm9DDSKdPlrUcnXlb7TrQOGr01ETdp-_6P6iFlAbw/viewform?embedded=true"
          width="100%"
          height="952"
          frameborder="0"
          marginheight="0"
          marginwidth="0"
          style={{ backgroundColor: "transparent" }}
        >
          Loading…
        </iframe>
      </section>

      {/* <section>
        <SocialMediaIntegration />
      </section> */}
    </main>
  );
};

export default Contact;
