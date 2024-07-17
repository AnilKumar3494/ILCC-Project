import React from "react";
import { Link } from "react-router-dom";
import "./home.css";

// data imports
import dashboardData from "../data/dashboard-data.json";
import randomVerse from "../utils/getRandomVerse";

const Home = () => {
  return (
    <>
      <section className="dashboard">
        <div className="dashboard_content flex_column">
          {/* Getting a Random Verse  */}
          <div className="random_verse">
            <h3>{randomVerse.text}</h3>
            <p>{`~${randomVerse.reference}`}</p>
          </div>

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
      </section>
    </>
  );
};

export default Home;
