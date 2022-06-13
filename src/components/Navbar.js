import React from "react";
import { Link } from "react-scroll";

import "../styles/navbar.scss";

export const Navbar = () => {
  return (
<nav className="navbar">
      <div className="navbar__left">
        <Link
          to="home"
          className="navbar__logo-link"
          spy={true}
          smooth={true}
          // offset={-80}
          duration={500}
        >
          <h1 className="navbar__logo">EcoWax</h1>
        </Link>
      </div>
      <ul className="navbar__right">
        <li className="navbar__about navbar__item">
          <Link
            className="navbar__link"
            to="products"
            spy={true}
            smooth={true}
            // offset={-50}
            duration={500}
          >
            Productos
          </Link>
        </li>

        <li className="navbar__projects navbar__item">
          <Link
            className="navbar__link"
            to="gallery"
            spy={true}
            smooth={true}
            // offset={0}
            duration={500}
          >
            Galeria
          </Link>
        </li>
        <li className="navbar__contact navbar__item">
          <Link
            className="navbar__link"
            to="video"
            spy={true}
            smooth={true}
            // offset={-80}
            duration={500}
          >
            Videos
          </Link>
        </li>
      </ul>
    </nav>  );
};
