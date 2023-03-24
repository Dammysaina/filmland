import React from "react";


const Videocard = (props) => {
  return (
    <div className="video-wrap">
      <div
        className="video-poster"
        style={{ backgroundImage: `url(${props.image})` }}
      >
        <div className="love_container">
          <p>{props.text}</p>
        </div>
      </div>
    </div>
  );
};

export default Videocard;
