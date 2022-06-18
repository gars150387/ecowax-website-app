import React from "react";

export const ProductFour = () => {
  return (
    <div className="card-container">
      <div className="card mb-3">
        <div className="row g-0">
          <div id="div-img-product" className="col-md-4">
            <img
              src={require("../images/pics-no-background/ecowax-product4.png")}
              className="img-fluid rounded"
              alt=""
            />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">Paños de Microfibra</h5>
              <p className="card-text">
                Larga duración -Ultra Absorbentes -80% Poliester, 20% Poliamida
                -40,6cm x 40x6 cm -Producto importado y de Alta Calidad.
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
                  <h3>29.900 COP</h3>
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
