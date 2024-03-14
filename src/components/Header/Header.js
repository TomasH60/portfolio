import React from "react";
import MenuButton from "./MenuButton";
import logo from "./img/logo.svg";
import MenuHamburger from "./MenuHamburger";
import MobileMenuBlur from "./MobileMenuBlur";
import "./Header.css";
import { useState } from "react";
import { CSSTransition } from "react-transition-group";
import disableScroll from "disable-scroll";

const Header = () => {
  let boxStyle;
  const [toggle, setToggle] = useState(false);
  let height = document.documentElement.scrollTop;
  console.log(height);
  if (toggle) {
    disableScroll.on();
    boxStyle = { backgroundColor: "#4717f6" };
  } else {
    disableScroll.off();
    boxStyle = { backgroundColor: "#00000070" };
  }

  const mobileMenuHandler = (id, event) => {
    event.preventDefault();
    setToggle(false);
    document.getElementById(id).scrollIntoView({behavior: 'smooth'});
  };

  return (
    <div>
      <div className="MenuBox" style={boxStyle}>
        <img
          className="logo"
          src={logo}
          style={{ filter: "invert(1)" }}
          alt="error"
        />
        
        <MenuButton
          text="About me"
          link_src="#Section2"
          className="MenuButton"
          target="_self"
        />
        <MenuButton
          text="Projects"
          link_src="#Section3"
          className="MenuButton"
          target="_self"
        />
        <MenuButton
          text="GitHub"
          link_src="https://github.com/TomasH60"
          className="MenuButton"
          target="_blank"
        />
        <MenuButton
          text="X"
          link_src="https://twitter.com/TomasH70"
          className="MenuButton"
          target="_blank"
        />
        <MenuButton
          text="LinkedIn"
          im
          link_src="https://www.linkedin.com/in/tom%C3%A1%C5%A1-hori%C4%8Dka-2b8a55229/"
          className="MenuButton"
          target="_blank"
        />
        <MenuHamburger onClick={() => setToggle(!toggle)} isChecked={toggle} />
      </div>

      <CSSTransition
        in={toggle}
        timeout={500}
        unmountOnExit
        classNames="MobileMenu"
      >
        <div className="MobileMenu">
          <div className="MobileMenuItems">
            
            <MenuButton
              text="About me"
              link_src="#"
              className="MobileMenuButton"
              target="_self"
              onClick={(event) => {
                mobileMenuHandler("Section2", event);
              }}
            />
            <MenuButton
              text="Projects"
              link_src="#"
              className="MobileMenuButton"
              target="_self"
              onClick={(event) => {
                mobileMenuHandler("Section3", event);
              }}
            />
            <MenuButton
              text="GitHub"
              link_src="https://github.com/TomasH60"
              className="MobileMenuButton"
              target="_blank"
            />
            <MenuButton
              text="X"
              link_src="https://twitter.com/TomasH70"
              className="MobileMenuButton"
              target="_blank"
            />
            <MenuButton
              text="LinkedIn"
              im
              link_src="https://www.linkedin.com/in/tom%C3%A1%C5%A1-hori%C4%8Dka-2b8a55229/"
              className="MobileMenuButton"
              target="_blank"
            />
          </div>
        </div>
      </CSSTransition>
      <CSSTransition
        in={toggle}
        timeout={500}
        unmountOnExit
        classNames="MobileMenuBlur"
      >
        <MobileMenuBlur
          onClick={() => {
            setToggle(false);
          }}
        />
      </CSSTransition>
    </div>
  );
}

export default Header;
