import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const Hamburger = () => (
  <div className="hamburger ml-auto">
    <FontAwesomeIcon icon={faBars} aria-hidden="true" />
  </div>
);

export default Hamburger;
