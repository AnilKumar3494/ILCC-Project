import React, { useState, useEffect } from "react";

function ThemeSwitcher() {
  const [isChristmasGreen, setIsChristmasGreen] = useState(true);

  // Apply the selected theme
  useEffect(() => {
    if (isChristmasGreen) {
      document.documentElement.style.setProperty("--primary-color", "#307054");
      document.documentElement.style.setProperty(
        "--background-color",
        "#f8f8f8"
      );
      document.documentElement.style.setProperty("--top-bar", "#ffffff");
      document.documentElement.style.setProperty("--top-bar-text", "#222");
      document.documentElement.style.setProperty("--nav-bar", "#307054");
      document.documentElement.style.setProperty("--nav-bar-text", "#f1d3b2");
      document.documentElement.style.setProperty("--text-color", "#333333");
      document.documentElement.style.setProperty(
        "--text-color-light",
        "#444555"
      );
    } else {
      document.documentElement.style.setProperty("--primary-color", "#46211a");
      document.documentElement.style.setProperty(
        "--background-color",
        "#f1d3b2"
      );
      document.documentElement.style.setProperty("--top-bar", "#46211a");
      document.documentElement.style.setProperty("--top-bar-text", "#f1d3b2");
      document.documentElement.style.setProperty("--nav-bar", "#a43820");
      document.documentElement.style.setProperty("--nav-bar-text", "#f1d3b2");
      document.documentElement.style.setProperty("--text-color", "#333333");
      document.documentElement.style.setProperty(
        "--text-color-light",
        "#444555"
      );
    }
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
