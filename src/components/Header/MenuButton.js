import React from "react";
import "./MenuButton.css";

function MenuButton(props) {
  return (
    <div className={props.className}>
      <a
        href={props.link_src}
        target={props.target}
        onClick={props.onClick}
        rel="noreferrer"
      >
        <p>{props.text}</p>
      </a>
    </div>
  );
}

export default MenuButton;
