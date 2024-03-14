import React from "react";
import "./MainDiv2.css";
import { motion } from "framer-motion";

const MainDiv2 = React.forwardRef((props, ref) => {
  return (
    <motion.div
      className="Text1"
      animate={props.onAnimate}
      style={{ y: "10vh", opacity: 0 }}
      ref={ref}
    >
      <div class="content">
        <p>
          Hello, I am Tomáš Horička, an aspiring software developer and
          currently a student at STU FIIT in Bratislava, Slovakia.
        </p>
        <p>
          I am really passionate about blockchain technologies and web3
          development.
        </p>
        <p>
          I'm excited to explore this dynamic field further and contribute to
          its evolution.
        </p>
      </div>
    </motion.div>
  );
});

export default MainDiv2;
