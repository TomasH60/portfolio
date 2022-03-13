import Header from "./components/Header/Header";
import MainDiv2 from "./components/Section2/MainDiv2";
import MainDiv from "./components/Section1/MainDiv";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";
import MainDiv3 from "./components/Section3/MainDiv3";
import Footer from "./components/Footer/Footer";
import React from "react";

function App() {
  const [ref, inView] = useInView({
    threshold: 0.3,
  });
  const [ref1, inView1] = useInView({
    threshold: 0.6,
  });
  const [ref2, inView2] = useInView({
    threshold: 0.05,
  });
  const [ref3, inView3] = useInView({
    threshold: 0.1
  });
  const animation = useAnimation();
  const animation1 = useAnimation();
  const animation2 = useAnimation();
  const animation3 = useAnimation();
  console.log(inView, inView1, inView2, inView3);
  useEffect(() => {
    if (inView) {
      animation1.start({
        opacity: 1,
        transition: {
          duration: 1,
        },
      });
    }
    if (inView1) {
      animation.start({
        y: 0,
        opacity: 1,
        transition: {
          type: "spring",
          duration: 1,
          bounce: 0.3,
        },
      });
    }
    if (inView2) {
      animation2.start({
        opacity: 1,
        transition: {
          duration: 1,
        },
      });
    }
    
    if (inView3) {
      animation3.start({
        y: 0,
        opacity: 1,
        transition: {
          type: "spring",
          duration: 1,
          bounce: 0.3,
        },
      });
    }
    
  }, [animation, animation1, animation2, animation3, inView, inView1, inView2, inView3]);
  return (
    <>
      <Header />
      <section id="Section1">
        <MainDiv />
      </section>
      <section id="Section2" ref={ref}>
        <motion.h1 animate={animation1} style={{ opacity: 0 }}>
          About Me
        </motion.h1>
        <MainDiv2 onAnimate={animation} ref={ref1} />
      </section>
      <section id="Section3" ref={ref2}>
        <motion.h1 animate={animation2} style={{ opacity: 0 }}>
          My Projects
        </motion.h1>
        <MainDiv3 onAnimate={animation3} ref={ref3}/>
      </section>
      <Footer />
    </>
  );
}

export default App;
