import "./MainDiv.css";
import React from "react";
import head from "./img/Head.png";
import { motion } from "framer-motion";

const MainDiv = () => {
  return (
    <motion.div
      className="Card"
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="Text">
        <p>Hello 👋, I'm</p>
        <h1>
          Tomáš Horička
          <br />
        </h1>
        <p>
          an aspiring UI/UX developer
          <br />
          and a computer science student.
        </p>
        <div className="Button">
          <a href="http://www.example.com" className="Buttons">
            Get CV
          </a>
          <a href="http://www.example.com" className="Buttons">
            Hire Me
          </a>
        </div>
      </div>

      <div className="AppleEmoji">
        <img src={head} alt="error"></img>
      </div>
    </motion.div>
  );
};

export default MainDiv;
