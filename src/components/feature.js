import React from "react";
import arrowright from "../assets/images/arrowright.svg";
import "../assets/css/feature.css";

const Feature = (props) => {
  return (
    <div>
      <div className="feature_container">
        <h1>{props.title}</h1>
        
        <div className="more_container">
          <a href="/#">See more</a>
          <img src={arrowright} alt="arrowright" />
        </div>
      </div>
    </div>
  );
};

export default Feature;
