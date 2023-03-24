import posterimage from "../assets/images/posterimage.svg";
import Card from "../components/card";
import Videocard from "../components/videoscard";
import movie from "../assets/images/videodata.svg"


const movieData = [
  {
    id: 1,
    image: posterimage,
    text: "TV SERIES",
    header: "USA, 2016 - Current",
    body: "Stranger Things",
    rating: "86.0/100",
    ratings: "97%",
    genre: "Action, Adventure, Horror",
  },
  {
    id: 2,
    image: posterimage,
    text: "TV SERIES",
    header: "USA, 2016 - Current",
    body: "Stranger Things",
    rating: "86.0/100",
    ratings: "97%",
    genre: "Action, Adventure, Horror",
  },
  {
    id: 3,
    image: posterimage,
    text: "TV SERIES",
    header: "USA, 2016 - Current",
    body: "Stranger Things",
    rating: "86.0/100",
    ratings: "97%",
    genre: "Action, Adventure, Horror",
  },
  {
    id: 4,
    image: posterimage,
    text: "TV SERIES",
    header: "USA, 2016 - Current",
    body: "Stranger Things",
    rating: "86.0/100",
    ratings: "97%",
    genre: "Action, Adventure, Horror",
  },
];

const castsData = [
  {
    id: 1,
    image: posterimage,
    body: "Keaanu Reeves",
  },
  {
    id: 2,
    image: posterimage,
    body: "Keaanu Reeves",
  },
  {
    id: 3,
    image: posterimage,
    body: "Keaanu Reeves",
  },
  {
    id: 4,
    image: posterimage,
    body: "Keaanu Reeves",
  },
];

const videoData = [
    {
        id: 1,
        image: movie,
        body: "Lamb (2021) Trailer",
      },
      {
        id: 2,
        image: movie,
        body: "Keaanu Reeves",
      },
      {
        id: 3,
        image: movie,
        body: "Keaanu Reeves",
      },
      
]
const featuredMoviesSlides = movieData.map((selectionItem) => {
  return {
    key: selectionItem.id,
    component: (
      <Card
        className="whatwedo_card"
        image={selectionItem.image}
        text={selectionItem.text}
        imglove={selectionItem.imglove}
        header={selectionItem.header}
        body={selectionItem.body}
        imgimdb={selectionItem.imgimdb}
        rating={selectionItem.rating}
        imgtomato={selectionItem.imgtomato}
        ratings={selectionItem.ratings}
        genre={selectionItem.genre}
      />
    ),
  };
});

const castSlides = castsData.map((selectionItem) => {
  return {
    key: selectionItem.id,
    component: (
      <Card
        castOnly
        className="whatwedo_card"
        image={selectionItem.image}
        body={selectionItem.body}
      />
    ),
  };
});

const movieSlides = videoData.map((selectionItem) => {
    return {
      key: selectionItem.id,
      component: (
        <Videocard
          videoOnly
          className="video_card"
          image={selectionItem.image}
          body={selectionItem.body}
        />
      ),
    };
  });

export { castsData, movieData, featuredMoviesSlides, castSlides, movieSlides, videoData };
