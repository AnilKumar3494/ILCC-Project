import React from "react";
import "./about.css";

import contactInfoData from "../data/contact-info-data.json";
import aboutUsContent from "../data/about-us-content.json";

import ImageGallery from "../components/ImageGallery";
// import RandomVerse from "@/components/RandomVerse";
import LocationMap from "@/components/LocationMap";
import Accordian from "@/components/ui/Accordian";

const About = () => {
  return (
    <>
      <main className="about_us">
        <picture>
          <img
            className="about_banner_img"
            src="https://github.com/AnilKumar3494/ILCC-images/blob/main/Banner%20images/Community-Picture-Main.jpg?raw=true"
            alt="Banner Image Will Come"
          />
        </picture>

        <section className="aboutus_container">
          <div class="banner_content">
            <h2>ABOUT US</h2>
          </div>

          <div className="aboutus_content_container">
            {aboutUsContent.sections.map((section, index) => (
              <article key={index} className="aboutus_content">
                {index <= 1 ? (
                  <div
                    className={`two_two_grid ${
                      index % 2 === 0 ? "flex-row" : "flex-row-reverse"
                    }`}
                  >
                    <div className="text">
                      <h3>{section.title}</h3>
                      {section.description && <p>{section.description}</p>}
                    </div>
                    <picture>
                      <img
                        src={section.imgSrc}
                        alt={`img:${index + 1} - ${section.title}`}
                      />
                    </picture>
                  </div>
                ) : (
                  <div className="accordian">
                    <h3>{section.title}</h3>
                    {section.subSections && <Accordian />}
                  </div>
                )}
              </article>
            ))}
          </div>
        </section>

        <section className="members">
          <h3>Meet Our Team</h3>
          <ImageGallery contactInfoData={contactInfoData} />
        </section>

        <section>
          <LocationMap />
        </section>
      </main>
    </>
  );
};

export default About;
