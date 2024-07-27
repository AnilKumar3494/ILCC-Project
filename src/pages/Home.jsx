import React from "react";
import { Link } from "react-router-dom";
import "./home.css";

// components imports
import ImageGallery from "../components/ImageGallery";

// data imports
import dashboardData from "../data/dashboard-data.json";
import sermonsDataJSON from "../data/dashboard-data.json";
import randomVerse from "../utils/getRandomVerse";
import imagesDataJSON from "../data/images-data.json";

const Home = () => {
  return (
    <main>
      <section className="dashboard bg_img ">
        <div className="dashboard_content padding_inline_lg">
          {/* Getting a Random Verse  */}
          <div className="random_verse">
            <h2>{randomVerse.text}</h2>
            <h5>{`~${randomVerse.reference}`}</h5>
          </div>

          <div className="content_and_buttons">
            {/* Getting About - Who We Are Content */}
            {dashboardData.about
              .filter((item) => item.title.toLowerCase() === "who we are")
              .map((item) => (
                <div key={item.id} className="who_we_are">
                  <h4>{item.title}</h4>
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
        <div className="seromns_content heading_content">
          <h4>SELECTED SERMONS</h4>
          <p>Our lives in the word of God</p>
        </div>
        <ImageGallery sermonsDataJSON={sermonsDataJSON} />
      </section>

      <section className="image_gallery">
        <div className="seromns_content heading_content">
          <h4>IMAGES COLLECTION</h4>
          <p>Our lives in the word of God</p>
        </div>
        <ImageGallery imagesDataJSON={imagesDataJSON} />
      </section>
    </main>
  );
};

export default Home;
