import React from "react";
import Logo from "./Logo";
import Navigation from "./Navigation";
import Hamburger from "./Hamburger";

const Header = () => {
  return (
    <div className="header_container">
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="header_content d-flex flex-row align-items-center justify-content-start">
              <Logo />
              <Navigation />
              <Hamburger />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
