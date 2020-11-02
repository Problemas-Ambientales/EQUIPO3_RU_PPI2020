import React from "react";
import "../styles/styles.css";
class Calculo_total extends React.Component {
  render() {
    return (
      <div className="container-fluid fondo">
        <div className="row container-fluid fondoIniciosesion">
          <div className="col-sm-4 col-md-4 col-lg-4"></div>
          <div className="col-sm-4 col-md-4 col-lg-4">
            <div className="container fluid">
              <div className="col-lg-12">
                <h1 className="titulo">
                  Total de tiempo de la degradacion de la compra
                </h1>
                <br />
                <input
                  class="form-control"
                  type="text"
                  placeholder="XXXXXX"
                  readonly
                />
              </div>
              <br />
              <br />
              <button
                type="button"
                className="btn btn-outline-dark fondo boton"
              >
                <a className="container-fluid " href="/">
                  Salir
                </a>
              </button>
              <br />
              <br />
              <br />
              <br />
              <button
                type="button"
                className="btn btn-outline-dark fondo boton"
              >
                <a className="container-fluid " href="/calculo">
                  Atras
                </a>
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Calculo_total;
