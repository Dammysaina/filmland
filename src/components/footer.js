import React from "react";
import facebook from "../assets/images/facebook.svg";
import instagram from "../assets/images/instagram.svg";
import twitter from "../assets/images/twitter.svg";
import youtube from "../assets/images/youtube.svg"

const Footer = () => {
  return (
    <div className="footer_container">
        <div className="socials_container">
            <img src={facebook} alt="facebook" />
            <img src={instagram} alt="facebook" />
            <img src={twitter} alt="facebook" />
            <img src={youtube} alt="facebook" />
        </div>
        <div className="conditions_container">
            <p>Conditions of Use</p>
            <p>Privacy & Policy</p>
            <p>Press Room</p>
        </div>
        <div className="copyright">
            <p>2021 Movix</p>
        </div>
    </div>
  ) ;
};

export default Footer;
