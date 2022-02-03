import React from "react";
import "./styles/header.css";
import heroImgMobile from "../images/image-intro-mobile.jpg";
import heroImgDesk from "../images/image-intro-desktop.jpg";
import deskBackLeft from "../images/bg-pattern-intro-left-desktop.svg";
import deskBackRight from "../images/bg-pattern-intro-right-desktop.svg";
import mobileBackLeft from "../images/bg-pattern-intro-left-mobile.svg";
import mobileBackRight from "../images/bg-pattern-intro-right-mobile.svg";

const Header = ({ displayType }) => {
  return (
    <div className="header">
      <img
        className={`header--hero-mobile ${
          displayType === "desktop" ? "hide-for-mobile" : ""
        }`}
        src={heroImgMobile}
        alt="Humanizing Insurance"
      />
      <div className="header--intro flex-col">
        <div
          className={`header--line ${
            displayType === "mobile" ? "hide-for-desktop" : ""
          }`}
        ></div>
        <div className="intro--content">
          <h1>Humanizing your insurance.</h1>
          <p>
            Get your life insurance coverage easier and faster. We blend our
            expertise and technology to help you find the plan that’s right for
            you. Ensure you and your loved ones are protected.
          </p>
          <button className="btn">View plans</button>
          <img
        className={`header--backLeftMobile ${
          displayType === "desktop" ? "hide-for-desktop" : ""
        }`}
        src={mobileBackLeft}
        alt="Humanizing Insurance"
      />
        </div>
        <img
          className={`header--hero-desk ${
            displayType === "mobile" ? "hide-for-desktop" : ""
          }`}
          src={heroImgDesk}
          alt="Humanizing Insurance"
        />
      </div>
      <img
        className={`header--backLeftDesk ${
          displayType === "mobile" ? "hide-for-desktop" : ""
        }`}
        src={deskBackLeft}
        alt="Humanizing Insurance"
      />
      <img
        className={`header--backRightDesk ${
          displayType === "mobile" ? "hide-for-desktop" : ""
        }`}
        src={deskBackRight}
        alt="Humanizing Insurance"
      />
      <img
        className={`header--backRightMobile ${
          displayType === "desktop" ? "hide-for-desktop" : ""
        }`}
        src={mobileBackRight}
        alt="Humanizing Insurance"
      />
      <div className="header--line"></div>
    </div>
  );
};

export default Header;
