import React from "react";
import logo from "../assets/images/logo.png";

const Logo = () => {
  return (
    <div className="logo_container">
      <a href="/">
        <div className="logo">
          <img src={logo} alt="Logo" />
        </div>
        <div className="logo_text">ILCC</div>
      </a>
    </div>
  );
};

export default Logo;
