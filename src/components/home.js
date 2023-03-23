import React from "react";
// import poster from "../assets/images/poster.svg";
import "../assets/css/home.css";
import play from "../assets/images/play.svg";
import imdb from "../assets/images/imdb.svg";
import tomato from "../assets/images/tomato.svg"

const Home = () => {
  return (
    <div>
      <div className="background_container">
        <div className="johnwick">
        <h2>John Wick 3 :<span> Parabellum</span> </h2>
        <div className="rating_container">
            <div className="imdb_rating">
                <img src={imdb} alt="imdb" />
                <p>86.0 / 100</p>
            </div>
            <div className="imdb_rating">
                <img src={tomato} alt="tomato" />
                <p>97%</p>
            </div>
        </div>
        <p>
          John Wick is on the run after killing a member of the international
          assassins' guild, and with a $14 million price tag on his head, he is
          the target of hit men and women everywhere.
        </p>
        <button>
          <img src={play} alt="play" /> WATCH TRAILER
        </button>
        </div>
        
      </div>
    </div>
  );
};

export default Home;
