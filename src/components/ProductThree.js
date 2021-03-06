import React from "react";

import "../images/pics-no-background/ecowax-product-removebg-preview.png";

export const ProductThree = () => {
  return (
    <div className="card-container">
      <div className="card mb-3">
        <div className="row g-0">
          <div id="div-img-product" className="col-md-4">
            <img
              src={require("../images/pics-no-background/ecowax-product-removebg-preview.png")}
              className="img-fluid rounded"
              alt=""
            />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">Lavado Ecológico</h5>
              <p className="card-text">
                Es un producto Ecológico ideal para limpiar el carro sin
                utilizar Agua, gracias a sus componentes biodegradables protege
                y brilla la pintura del Auto de forma fácil y práctica. Rinde de
                6 a 7 Lavadas una carro particular. Es permitido en conjunto
                residenciales.
              </p>
              
            </div>
            <div className="bottom-component">
                          <p className="card-text">
                <span className="text-muted">Contenido: 500ml</span>
              </p>
              <a target="_blank" rel="noopener noreferrer"  href="https://api.whatsapp.com/send?phone=573245532889">
              <div className="price-div">
                <h3>39.900 COP</h3>
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
