import React from "react";
import arrowright from "../assets/images/arrowright.svg";
import "../assets/css/feature.css"


const Feature = (props) => {
  const feature = "Featured Movie";
//   const arrival = "New Arrival"

  return (
    <div>
      <div className="feature_container">
        <h1>{feature}</h1>
        <div className="more_container">
          <p>See more</p>
          <img src={arrowright} alt="arrowright" />
        </div>
      </div>
    </div>
  );
};

export default Feature;
