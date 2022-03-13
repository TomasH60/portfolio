import React from "react";
import './MenuHamburger.css'

const MenuHamburger = (props) => {
  let enabled =  null;
  
  if (props.isChecked) {
    enabled = "checked";
  }
  else {
    enabled = null;
  }

  return (
    <div className="MenuHam">
      <label htmlFor="check">
        <input
          type="checkbox"
          id="check"
          onClick={props.onClick}
          checked={enabled}
          
        />
        <span></span>
        <span></span>
        <span></span>
      </label>
    </div>
  );
};

export default MenuHamburger;
