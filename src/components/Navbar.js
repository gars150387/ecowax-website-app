import React from "react";
import { Link } from "react-scroll";
import {FaWhatsapp, FaInstagram, FaTiktok, FaFacebookF} from 'react-icons/fa'

import "../styles/navbar.scss";
import { CountdownPromotion } from "./Countdown";
import { helper } from "./helper";

export const Navbar = () => {

  const handleWhatsappLink = (e) => {
    e.preventDefault();
    window.open("https://api.whatsapp.com/send/?phone=573245532889&text&app_absent=0", "_blank");
  };

const handleInstagramLink = (e) => {
    e.preventDefault();
    window.open("https://www.instagram.com/carroecologico/?hl=es-la", "_blank");
  };

const handleTiktokLink = (e) => {
    e.preventDefault();
    window.open("https://", "_blank");
  };

const handleFacebookLink = (e) => {
    e.preventDefault();
    window.open("https://", "_blank");
  };

  return (
    <nav className="navbar">
      <div className="navbar__left">
        <Link
          to="home"
          className="navbar__logo-link"
          spy={true}
          smooth={true}
          offset={-80}
          duration={500}
        >
          <h1>Ecowax</h1>
        </Link>
      </div>
      <div className="navbar__middle">
        <CountdownPromotion />
      </div>
      <ul className="navbar__right">
        <li className="navbar__about navbar__item">
          <FaWhatsapp onClick={ handleWhatsappLink } className="icon" />
        </li>
        <li className="navbar__about navbar__item">
          <FaInstagram onClick={ handleInstagramLink } className="icon" />
        </li>
        <li className="navbar__about navbar__item">
          <FaTiktok onClick={ handleTiktokLink } className="icon" />
        </li>
        <li className="navbar__about navbar__item">
          <FaFacebookF onClick={ handleFacebookLink } className="icon" />
        </li>
      </ul>
    </nav>
  );
};
