import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "./home.css";

// components imports
import ImageGallery from "../components/ImageGallery";
import UpcomingEvents from "../components/UpcomingEvents";

// data imports
import sermonsData from "../data/sermons-data.json";

const Home = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.state?.scrollTo) {
      const targetElement = document.getElementById(location.state.scrollTo);
      targetElement?.scrollIntoView({ behavior: "smooth" });
    }
  }, [location.state]);

  return (
    <main>
      <section className="dashboard bg_img">
        <div className="dashboard_content_2">
          <div className="content_and_buttons">
            <div className="button_container">
              <Link to={"/about"} className="button" title="About Us">
                About Us
              </Link>

              <Link to={"/contact"} className="button" title="Contact Us">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="sermons" id="sermons">
        <div className="seromns_content">
          <h2>Picked Sermons</h2>
          <h4>Our lives in the word of God</h4>
        </div>
        <ImageGallery sermonsData={sermonsData} />
      </section>

      <section className="upcoming_events" id="events">
        <div>
          <h2>Upcoming Events</h2>
          <h4>Immerse Yourself in God's Presence</h4>
        </div>
        <UpcomingEvents />
      </section>

      <section className="image_gallery">
        <div className="seromns_content">
          <h2>IMAGES COLLECTION</h2>
          <h4>Sharing our faith and community stories</h4>
        </div>
      </section>
    </main>
  );
};

export default Home;
