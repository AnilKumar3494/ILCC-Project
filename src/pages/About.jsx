import React from "react";
import dashboardData from "../data/dashboard-data.json";

import "./about.css";

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
        {dashboardData.about.map((data) => (
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
    </main>
  </>
);

export default About;
