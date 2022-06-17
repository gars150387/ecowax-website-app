import React from "react";
import { Header } from "./components/Header";
import { Products } from "./pages/Products";
import { Gallery } from "./pages/Gallery";
import { Video } from "./pages/Video";
import { Navbar } from "./components/Navbar";

import "../src/styles/home.scss";
import { ScrollUp } from "./hooks/ScrollUp";
import { Footer } from "./components/Footer";

export const Home = () => {
  return (
    <>
      <div>
        <Header />
      </div>
      <div>
        <Navbar />
        <Products title="products" />
        <Gallery title="gallery" />
        <Video title="video" />        
        <ScrollUp />

        <Footer />
      </div>
    </>
  );
};
