import React, { useState, useEffect } from "react";

function ThemeSwitcher() {
  //   const [isChristmasGreen, setIsChristmasGreen] = useState(true);
  const [isChristmasGreen, setIsChristmasGreen] = useState(
    () => JSON.parse(localStorage.getItem("isChristmasGreen")) ?? true
  );

  // Apply the selected theme and save to localStorage
  useEffect(() => {
    if (isChristmasGreen) {
      document.documentElement.style.setProperty("--primary-color", "#4e8c70");
      document.documentElement.style.setProperty(
        "--primary-color-light",
        "#cef2e4"
      );
      document.documentElement.style.setProperty(
        "--background-color",
        "#f8f8f8"
      );
      document.documentElement.style.setProperty("--top-bar", "#ffffff");
      document.documentElement.style.setProperty("--top-bar-text", "#222");
      document.documentElement.style.setProperty("--nav-bar", "#033e50");
      document.documentElement.style.setProperty("--nav-bar-text", "#f1d3b2");
      document.documentElement.style.setProperty("--text-color", "#333333");
      document.documentElement.style.setProperty(
        "--text-color-light",
        "#444555"
      );
      document.documentElement.style.setProperty(
        "--nameDisplay-bg-img",
        "url('https://img.freepik.com/free-psd/realistic-snowflakes-border-design_23-2151074098.jpg?t=st=1735945104~exp=1735948704~hmac=9c01c1958750a9ede10612dd0c752380d3c632866be3d16362184da8f481003a&w=2000')"
      );
      document.documentElement.style.setProperty(
        "--main-bg-img",
        "url('https://img.freepik.com/free-vector/blue-snowflake-background-christmas-winter-doodle-vector_53876-151495.jpg?t=st=1735935462~exp=1735939062~hmac=aaf780b39938ed64bc9ef9e95237643a504859eacc95bf5b6033bb47a89d2e7d&w=2000')"
      );
    } else {
      document.documentElement.style.setProperty("--primary-color", "#46211a");
      document.documentElement.style.setProperty(
        "--primary-color-light",
        "#fdf9f3"
      );
      document.documentElement.style.setProperty(
        "--background-color",
        "#f1d3b2"
      );
      document.documentElement.style.setProperty("--top-bar", "#46211a");
      document.documentElement.style.setProperty("--top-bar-text", "#222");
      document.documentElement.style.setProperty("--nav-bar", "#a43820");
      document.documentElement.style.setProperty("--nav-bar-text", "#f1d3b2");
      document.documentElement.style.setProperty("--text-color", "#333333");
      document.documentElement.style.setProperty(
        "--text-color-light",
        "#444555"
      );
      document.documentElement.style.setProperty(
        "--nameDisplay-bg-img",
        "url('https://img.freepik.com/free-vector/watercolor-leaves-falling-background_52683-74282.jpg?t=st=1735949117~exp=1735952717~hmac=8c9206bbd7c9776c4dfafdf30245ae98d3dff8bc7b77c6def3c41072d82cfda9&w=2000')"
      );

      document.documentElement.style.setProperty(
        "--main-bg-img",
        "url('https://img.freepik.com/free-vector/winter-snowflake-background-christmas-aesthetic-doodle-white-vector_53876-151488.jpg?t=st=1735935337~exp=1735938937~hmac=77b3e4949a8ead0c1482315b60be9a514a70b24ac49abaa043c2dc1edf97d966&w=2000')"
      );
    }

    // Save theme choice to localStorage
    localStorage.setItem("isChristmasGreen", JSON.stringify(isChristmasGreen));
  }, [isChristmasGreen]);

  // Toggle theme function
  const toggleTheme = () => {
    setIsChristmasGreen(!isChristmasGreen);
  };

  return (
    <button
      onClick={toggleTheme}
      className="button"
      title="switch theme"
      style={{
        position: "fixed",
        bottom: "20px",
        right: "20px",
        backgroundColor: "var(--primary-color)",
        color: "var(--nav-bar-text)",
        border: "none",
        borderRadius: "0.5rem",
        cursor: "pointer",
        zIndex: 1000,
      }}
    >
      {isChristmasGreen ? (
        <>🎄 Switch to Brown & Red 🎨</>
      ) : (
        <>🎨 Switch to Christmas Green 🎄</>
      )}
    </button>
  );
}

export default ThemeSwitcher;
