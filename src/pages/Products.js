import React from "react";
import { ProductOne } from "../components/ProductOne";
import { ProductThree } from "../components/ProductThree";
import { ProductTwo } from "../components/ProductTwo";
import { ProductFour } from "../components/ProductFour";

import "../styles/home.scss";

export const Products = () => {
  return (
    <section className="home-container">
      <div className="products">
        <ProductThree />
        <ProductTwo />
        <ProductOne />
        <ProductFour />
      </div>
    </section>
  );
};
