import React from "react";
import Filmland from "../assets/images/logo.svg";
import menu from "../assets/images/menu.svg";
import search from "../assets/images/search.svg";
import "../assets/css/header.css";
import play from "../assets/images/play.svg";
import imdb from "../assets/images/imdb.svg";
import tomato from "../assets/images/tomato.svg";
import menunumber from "../assets/images/numbermenu.svg"

const Header = () => {
  return (
    <div className="head_container">
      <div className="header_container">
        <div className="logo_container">
          <img src={Filmland} alt="filalndlogo" />
        </div>
        <div className="box">
          <input
            type="text"
            placeholder="What do you want to watch?"
            name="search"
          />
          <img src={search} alt="searchicon" />
        </div>
        <div className="menu_container">
          <p>Hi, $Fullname</p>
          <button className="menu_button">
            <img src={menu} alt="menu" />
          </button>
        </div>
      </div>
      <div className="background_container">
        <div className="johnwick">
          <h2 className="mt-10">
            John Wick 3 :<span> Parabellum</span>{" "}
          </h2>
          <div className="rating_container mt-10">
            <div className="imdb_rating">
              <img src={imdb} alt="imdb" />
              <p>86.0 / 100</p>
            </div>
            <div className="imdb_rating">
              <img src={tomato} alt="tomato" />
              <p>97%</p>
            </div>
          </div>
          <p className="mt-10">
            John Wick is on the run after killing a member of the international
            assassins' guild, and with a $14 million price tag on his head, he
            is the target of hit men and women everywhere.
          </p>
          <button className="mt-10">
            <img src={play} alt="play" /> WATCH TRAILER
          </button>
        </div>
        <div>
          <div>
            <img src={menunumber} alt="menunumber" />
          </div>
          <div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
