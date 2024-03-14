import React from "react";
import "./ContainerItem.css";

const ContainerItem = (props) => {
  return (
    <div className="ContainerItem">
      <div className="TextItem">
        <h3>Learn more</h3>
        <p>{props.text}</p>
        <a href="https://tomash60.github.io/NFTones/" target="_blank">Project Page👆</a>
      </div>
      <img className="Image" src={props.imgsrc} alt="error"></img>
    </div>
  );
};

export default ContainerItem;
