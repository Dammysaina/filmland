import React, {useEffect, useState} from "react";
import "../assets/css/home.css";
import axios from "axios";


import Feature from "./feature";
import Carousel from "./carousel";
import { castSlides, featuredMoviesSlides, movieSlides } from "../utils/data";


const Home = () => {
  // const url =
  //   "https://api.themoviedb.org/3/movie/550?api_key=a6f57293bb50c13014e1dbc2eecc1544";
  // useEffect(() => {
  //   fetchPopular();
  // }, []);

  // const [popular, setPopular] = useState([]);

  // const fetchPopular = async () => {
  //   const data = await fetch(url);
  //   const movies = await data.json();
  //   console.log(movies);
  //   setPopular(movies.results);
  // };
  const [videos, setVideos] = useState([])
  useEffect (() => {
    axios.get('https://api.themoviedb.org/3/movie/{movie_id}/videos?api_key=a6f57293bb50c13014e1dbc2eecc1544&language=en-US').then((response)=>{
      console.log(response)
    })

  },[])

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
           { videos.map((video,index) => {
            return <Carousel
            slides={movieSlides}
            slideClassName="video__slide"
            options={{
              align: "start",
            }} key={index} {...video}
          />
          })

          }
          
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
