import React from "react";
import Filmland from "../assets/images/logo.svg";
import menu from "../assets/images/menu.svg";
import search from "../assets/images/search.svg";
import "../assets/css/header.css"

const Header = () => {
  return (
    <div className="header_container">
      <div className="logo_container">
        <img src={Filmland} alt="filalndlogo" />
      </div>
      <div className="box">
        <input type="text" placeholder="What do you want to watch?" name="search" />
        <img src={search} alt="searchicon" />
      </div>
      <div className="menu_container">
        <p>Hi, $Fullname</p>
        <img src={menu} alt="menu" />
      </div>
    </div>
  );
};

export default Header;
