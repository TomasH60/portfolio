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
      <ContainerItem text="NFTones was supposed to be a simple 8bit style song NFT collection. The site is made in Hardhat using React-js and react-three-fiber." imgsrc={NFTones} />
    </motion.div>
  );
});

export default MainDiv3;
