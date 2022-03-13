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
      <p>
        Hello, I am Tomáš Horička, an aspiring UI/UX designer and currently a
        undergraduate at STU FIIT in Bratislava, Slovakia. I create fullstack
        websites using HTML, CSS, JavaScript, React and PHP. I have over two
        years of experience in said programming languages. I also use software
        like PhotoShop and AdobeIlustrator for design. Programming is my
        passion, and I'm always looking forward to improving my skills.
      </p>
    </motion.div>
  );
});

export default MainDiv2;
