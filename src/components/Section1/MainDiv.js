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

        </h1>
        <p>
          an aspiring software developer
          <br />
          and a computer science student
          <br /> at{" "}
          <a
            href="https://www.fiit.stuba.sk/"
            target="_blank"
            className="fiit-link"
          >
            FIIT STU
          </a>
        </p>

        <a href={`${process.env.PUBLIC_URL}/cv.pdf`} target="_blank" className="Buttons">
          Get CV
        </a>
      </div>

      <div className="AppleEmoji">
        <img src={head} alt="error"></img>
      </div>
    </motion.div>
  );
};

export default MainDiv;
