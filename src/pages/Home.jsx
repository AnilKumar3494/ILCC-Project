import React from "react";
import { Link } from "react-router-dom";
import "./home.css";

// components imports
import ImageGallery from "../components/ImageGallery";

// data imports
import dashboardData from "../data/dashboard-data.json";
import sermonsDataJSON from "../data/dashboard-data.json";
import randomVerse from "../utils/getRandomVerse";

import { localImages } from "../data/localImages";
import UpcomingEvents from "../components/UpcomingEvents";

const Home = () => {
  return (
    <main>
      <section className="dashboard bg_img ">
        <div className="dashboard_content_1">
          <h1>Indian Latin Cathaloic Church</h1>
        </div>

        <div className="dashboard_content_2">
          <div className="content_and_buttons">
            {/* Getting About - Who We Are Content */}
            {dashboardData.about
              .filter((item) => item.title.toLowerCase() === "who we are")
              .map((item) => (
                <div key={item.id} className="who_we_are">
                  <h3>{item.title}</h3>
                  <p>{item.content}</p>
                </div>
              ))}

            <div className="button_container">
              <Link to={"/about"} className="button">
                Know More
              </Link>

              <Link to={"/contact"} className="button">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="sermons">
        <div className="seromns_content">
          <h2>SELECTED SERMONS</h2>
          <p>Our lives in the word of God</p>
        </div>
        <ImageGallery sermonsDataJSON={sermonsDataJSON} />
      </section>

      <section className="upcoming_events">
        <div>
          <h2>Upcoming Events</h2>
          <p>Immerse Yourself in God's Presence</p>
        </div>
        <UpcomingEvents />
      </section>

      <section className="image_gallery">
        <div className="seromns_content">
          <h2>IMAGES COLLECTION</h2>
          <p>Sharing our faith and community stories</p>
        </div>

        <ImageGallery localImages={localImages} />
      </section>
    </main>
  );
};

export default Home;
