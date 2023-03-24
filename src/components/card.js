import React from "react";
import imdb from "../assets/images/imdb.svg";
import tomato from "../assets/images/tomato.svg";
import imglove from "../assets/images/love.svg";
import "../assets/css/card.css";

const Card = (props) => {
  return (
    <div className="poster-wrap">
      <div
        className="poster"
        style={{ backgroundImage: `url(${props.image})` }}
      >
        {!props.castOnly &&  (
          <div className="love_container">
            <p>{props.text}</p>

            <button className="btn">
              <img src={imglove} alt="loveimage"></img>
            </button>
          </div>
        )}
      </div>
      <div className="selection_text">
        {!props.castOnly &&  <p className="mt-12">{props.header}</p>}
        <h1 className="mt-12">{props.body}</h1>
        {!props.castOnly && !props.videoOnly && (
          <>
            <div className="rate_container mt-12">
              <div className="imdb_rating">
                <img src={imdb} alt="imdb"></img>
                <p>{props.rating}</p>
              </div>
              <div className="imdb_rating">
                <img src={tomato} alt="tomato"></img>
                <p>{props.ratings}</p>
              </div>
            </div>
            <p className="genre mt-12">{props.genre}</p>
          </>
        )}
      </div>
    </div>
  );
};

export default Card;
