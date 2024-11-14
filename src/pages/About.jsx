import React from "react";

import "./about.css";

import SocialMediaIntegration from "../components/SocialMediaIntegration";
import HistoryTimeLine from "@/components/HistoryTimeLine";

import RandomVerse from "@/components/RandomVerse";

const About = () => (
  <>
    <main>
      <div className="aboutus_container">
        <section className="about_us_section">
          <picture>
            {/* image with text postioned absolutely / vice verse */}
            <img src="" alt="Banner Image Will Come" />
          </picture>

          <div className="banner_content">
            <h2>ABOUT US</h2>
            {/* <RandomVerse /> */}
          </div>

          <article className="who_we_are">
            <h3>Who We Are</h3>
            <p>
              We are Catholics rooted in Jesus Christ, nourished by the grace of
              the sacraments, and live as the body of Christ, spreading the
              message of the Gospel of Jesus Christ to those around us.
            </p>
          </article>

          <article>
            <h3>Who Can be Members of ILCC</h3>
            <p>
              All Latin Catholics of India can be members of ILCC. However we
              welcome anyone who is baptized Catholic or would like to explore
              the Catholic faith. Though we are an ethnic Indian community, we
              enjoy the presence of all who wish to join us.
            </p>
          </article>

          <article>
            <h3>Our Mission Vision and Values</h3>
            <div className="grid_container">
              <article className="mission_container">
                <h4>Mission</h4>
                <p>
                  The spiritual growth of each member, as envisioned by the
                  Catholic Church, along with fraternal care and concern for the
                  members of the community in need.
                </p>
              </article>
              <article className="vision_container">
                <h4>Vision</h4>
                <p>
                  Every member of ILCC will grow in Gospel values, leading a
                  life of missionary discipleship while cherishing their
                  cultural heritage.
                </p>
              </article>
              <article className="values_container">
                <h4>Values</h4>
                <ol>
                  <li>Loving attitude to all</li>
                  <li>Appreciating and Promoting the members</li>
                  <li>Missionary discipleship of Jesus Christ</li>
                  <li>Praying together for the good of all</li>
                </ol>
              </article>
            </div>
          </article>
        </section>

        <section>
          <h3>History</h3>
          <HistoryTimeLine />
        </section>
      </div>

      <section className="mission_vision_values"></section>

      <section>
        <SocialMediaIntegration />
      </section>
    </main>
  </>
);

export default About;
