import React from "react";

import imglove from "../assets/images/love.svg"
import "../assets/css/card.css";

const Card = (props) => {
  return (
    <div className="poster-wrap">
      <div
        className="poster"
        style={{ backgroundImage: `url(${props.image})` }}
      >
        <div className="love_container">
          <p>{props.text}</p>

          <button className="btn">
            <img src={imglove} alt="loveimage"></img>
          </button>
        </div>
      </div>
      <div className="selection_text">
        <p>{props.header}</p>
        <h1>{props.body}</h1>
        <div className="rating_container">
          <div className="imdb_rating">
            <img src={props.imgimdb} alt="imdb"></img>
            <p>{props.rating}</p>
          </div>
          <div className="imdb_rating">
            <img src={props.imgtomato} alt="tomato"></img>
            <p>{props.ratings}</p>
          </div>
        </div>
        <p className="genre">{props.genre}</p>
      </div>
    </div>
  );
};

export default Card;
