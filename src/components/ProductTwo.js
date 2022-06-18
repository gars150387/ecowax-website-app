import React from "react";

export const ProductTwo = () => {
  return (
    <div className="card-container">
      <div className="card mb-3">
        <div className="row g-0">
          <div id="div-img-product" className="col-md-4">
            <img
              src={require("../images/pics-no-background/ecowax-product2.png")}
              className="img-fluid rounded"
              alt=""
            />
          </div>

          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">Lavado ecológico para MOTOS</h5>
              <p className="card-text">
                Es un Producto Biodegradable que funciona como lavado en Seco
                para tu Moto, Limpia y brilla la pintura, accesorios y cojineria
                de la moto sin utilizar agua. Su Formula innovadora contiene
                filtros UV5, protege de rayos solares evitando el desgaste.
              </p>
            </div>
            <div className="bottom-component">
              <p className="card-text">
                <small className="text-muted">Contenido: 500ml</small>
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
