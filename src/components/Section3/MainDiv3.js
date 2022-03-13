import React from "react";
import "./MainDiv3.css";
import ContainerItem from "./ContainerItem";
import {motion} from 'framer-motion'
import NFTones from './img/Nftones.jpg'

const MainDiv3 = React.forwardRef((props, ref) => {
  return (
    <motion.div
      className="Container"
      animate={props.onAnimate}
      style={{ y: "10vh", opacity: 0 }}
      ref={ref}
    >
      <ContainerItem text="NFTones is a simple 8-bit nft song collection. The site is done in ReactJS with the use of react-three-fiber. Click the project page to learn more." imgsrc={NFTones} />
    </motion.div>
  );
});

export default MainDiv3;
