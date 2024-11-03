import React from "react";

import "./about.css";
import SocialMediaIntegration from "../components/SocialMediaIntegration";
import aboutData from "../data/aboutdata.json";
import HistoryTimeLine from "@/components/HistoryTimeLine";

const About = () => (
  <>
    <main>
      <picture>
        {/* image with text postioned absolutely / vice verse */}
        <img src="" alt="Banner Image Will Come" />
        <div>
          <h2>About Us</h2>
          <p>Indian Latin Catholic Church - ILCC</p>
        </div>
      </picture>
      <section>
        <HistoryTimeLine />
      </section>
      <section>
        {aboutData.about.map((data) => (
          <div key={data.id} className="aboutus container flex_row">
            <div className="aboutus_images">
              <img src="" alt={`${data.title} Image`} />
            </div>
            <div className="aboutus_content ">
              <h3>{data.title}</h3>
              <p>{data.content}</p>
            </div>
          </div>
        ))}
      </section>
      <section>
        <SocialMediaIntegration />
      </section>
    </main>
  </>
);

export default About;
