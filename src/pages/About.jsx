import React from "react";

import "./about.css";
import SocialMediaIntegration from "../components/SocialMediaIntegration";
import aboutData from "../data/aboutdata.json";
import HistoryTimeLine from "@/components/HistoryTimeLine";
import RandomVerse from "@/components/RandomVerse";

const About = () => (
  <>
    <main>
      <section>
        <picture>
          {/* image with text postioned absolutely / vice verse */}
          <img src="" alt="Banner Image Will Come" />
        </picture>

        <div className="banner_content">
          <h2>ABOUT US</h2>
          <RandomVerse />
        </div>
      </section>

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
