import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Gallery } from "./pages/Gallery";
import { Navbar } from "./components/Navbar";
import { Home } from "./Home";
import { Products } from "./pages/Products";
import { Video } from "./pages/Video";

export const App = () => {
  return (
    <Router>
       <Home />
       <Navbar />
       <Products />
       <Gallery />
       <Video />
    </Router>
  );
};
