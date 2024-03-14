import React from "react";
import "./Footer.css";
import logo from "../Header/img/logo.svg";
import git from "./img/gitIcon.svg";
import linked from "./img/linkedIcon.svg";
import xlogo from "./img/xlogo.svg"

const Footer = () => {
  return (
    <div className="Footer">
      <div className="logoIcon">
        <img src={logo} alt="error"></img>
      </div>
      <p>© Copyright 2024. All right reserved</p>
      <div className="icons">
        <a href="https://github.com/TomasH60" target="_blank" rel="noreferrer">
          <img src={git} alt="error"></img>
        </a>
        <a
          href="https://www.linkedin.com/in/tom%C3%A1%C5%A1-hori%C4%8Dka-2b8a55229/"
          target="_blank"
          rel="noreferrer"
        >
          <img src={linked} alt="error"></img>
        </a>
        <a href="https://twitter.com/TomasH70" target="_blank" rel="noreferrer">
          <img src={xlogo} alt="error"></img>
        </a>
      </div>
    </div>
  );
};

export default Footer;
