import React from "react";
import { Container, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

import "../styles/navbar.scss";

export const Navbar = () => {
  return (
    <div className="navbar">
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
                     <a className="navbar-brand" >
              EcoWax
            </a>
       
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
               
                  <a className="nav-link" aria-current="page" >
                    Productos
                  </a>
           
              </li>
              <li className="nav-item">
                <a className="nav-link" >
                  Catalogo
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" >
                  Galeria
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" >
                  Videos
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" >
                  Testimonios
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};
