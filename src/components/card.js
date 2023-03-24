import React from "react";
import "../assets/css/card.css";

const Card = (props) => {
  return (
    <div>
      <div>
        <img src={props.image} alt="service"></img>
        <div className="love_container">
          <p>{props.text}</p>
          <img src={props.imglove} alt="loveimage"></img>
        </div>
      </div>
      <div className="selection_text">
        <h1>{props.header}</h1>
        <p>{props.body}</p>
        <div className="rating_container">
          <div>
            <img src={props.imgimdb} alt="imdb"></img>
            <p>{props.rating}</p>
          </div>
          <div>
            <img src={props.imgtomato} alt="tomato"></img>
            <p>{props.ratings}</p>
          </div>
        </div>
        <p>{props.genre}</p>
      </div>
    </div>
  );
};

export default Card;
