import React from "react";
import "../styles/products.scss";

export const ProductOne = () => {
  return (
    <div className="card-container">
      <div className="card mb-3">
        <div className="row g-0">
          <div id="div-img-product" className="col-md-4">
            <img
              src={require("../images/pics-no-background/ecowax-product3.png")}
              className="img-fluid rounded"
              alt=""
            />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">
                Lavado EcológicoRestaurador de partes negras
              </h5>
              <p className="card-text">
                Es un producto ideal para hidratar y restaurar plásticos negros
                que se van desgastando a través de los rayos solares y el clima.
                Funciona en el tablero, partes plásticas externas, cojineria de
                cuero y llantas. da Brillo y protección. no contiene Silicona
              </p>
            </div>
            <div className="bottom-component">
              <p className="card-text">
                <span className="text-muted">Contenido: 500ml</span>
              </p>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://api.whatsapp.com/send?phone=573245532889"
              >
                <div className="price-div">
                  <h3>23.900 COP</h3>
                  <button>Adquire el producto</button>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

