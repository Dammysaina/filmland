import React from "react";
// import poster from "../assets/images/poster.svg";
import "../assets/css/home.css";


import Feature from "./feature";
import Carousel from "./carousel";
import { castSlides, featuredMoviesSlides, movieSlides } from "../utils/data";

const Home = () => {
  return (
    <div className="home_container">
      
      <div className="movies_container">
        <div>
          <div>
            <Feature title="Feature Movies" />
          </div>

          <Carousel
            slides={featuredMoviesSlides}
            options={{
              align: "start",
            }}
          />
        </div>
        <div>
          <div>
            <Feature title="New Arrivals" />
          </div>
          <Carousel
            slides={featuredMoviesSlides}
            options={{
              align: "start",
            }}
          />
        </div>
        <div>
          <div>
            <Feature title="Exclusive Videos" />
          </div>
          <Carousel
            slides={movieSlides}
            slideClassName="video__slide"
            options={{
              align: "start",
            }}
          />
        </div>
        <div>
          <div>
            <Feature title="Featured Casts" />
          </div>
          <Carousel
            slides={castSlides}
            options={{
              align: "start",
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
