import React from "react";
import playvideo from "../assets/images/playvideo.svg"


const Videocard = (props) => {
  return (
    <div className="video-wrap">
      <div
        className="video-poster"
        style={{ backgroundImage: `url(${props.image})` }}
      >
        <div className="video_play">
        <img src={playvideo} alt="loveimage"></img>
        </div>
      </div>
      <div className="selection_body">
      <h1 className="mt-12">{props.body}</h1>
      </div>
    </div>
  );
};

export default Videocard;
