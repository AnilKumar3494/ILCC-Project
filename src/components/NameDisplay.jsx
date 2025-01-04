import React from "react";
import "./namedisplay.css";

const NameDisplay = () => {
  return (
    <div className="name_display">
      <picture>
        <img
          src="https://github.com/AnilKumar3494/ILCC-images/blob/main/logo/ILCC%20Logo%20no%20bg.png?raw=true"
          alt="ILCC Logo"
          className="ilcc_logo"
        />
      </picture>

      <div className="name_display_content">
        <h1>Indian Latin Catholic Community</h1>
        <span>Building a Community of Faith & Love</span>
      </div>
    </div>
  );
};

export default NameDisplay;
