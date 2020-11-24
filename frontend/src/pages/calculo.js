import React from "react";
import "../styles/styles.css";

class Calculo extends React.Component {
  render() {
    return (
      <div className="container-fluid fondo">
        <div className="row">
          <div className="col-sm-4 col-md-4 col-lg-4"></div>
          <div className="col-sm-4 col-md-4 col-lg-4">
            <div className="row">
              <div className="col-lg-12">
                <br />
                <br />
                <h1 className="titulo"> Producto comprado</h1>
                <br />

                <input
                  class="form-control"
                  type="text"
                  placeholder=""
                  ón
                  readonly
                />
                <br />
                <h1 className="titulo"> Material </h1>
                <br />
                <input
                  class="form-control"
                  type="text"
                  placeholder=" "
                  readonly
                />
                <br />

                <h1 className="titulo">Tiempo de biodegradación(meses)</h1>
                <br />
                <input
                  class="form-control"
                  type="text"
                  placeholder=""
                  readonly
                />
                <br />
                <h1 className="titulo"> </h1>
                <br />
                <input
                  class="form-control"
                  type="text"
                  placeholder=""
                  readonly
                />
                <br />
                <h1 className="titulo"> </h1>
                <br />
                <input
                  class="form-control"
                  type="text"
                  placeholder=""
                  readonly
                />
                <br />
                <br />

                <div className="col text-center fondo ">
                  <button type="button" className="btn btn-outline-dark boton">
                    <a href="/calculo_total">Cálculo total</a>
                  </button>
                  <br />
                  <br />
                  <div className="col text-center fondo ">
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
                  </div>
                  <br />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Calculo;
