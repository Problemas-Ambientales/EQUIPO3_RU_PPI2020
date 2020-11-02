import React from "react";
import "../styles/styles.css";
import Swal from "sweetalert2";
class Registro extends React.Component {
  _Alerta() {
    Swal.fire("Registro exitoso", "Haz click en el boton", "success");
  }
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
                <h1 className="titulo">Cédula</h1>

                <input
                  class="form-control"
                  type="text"
                  placeholder="Identificación"
                  ón
                  readonly
                />

                <h1 className="titulo">Nombre</h1>
                <input
                  class="form-control"
                  type="text"
                  placeholder="Nombre"
                  readonly
                />

                <h1 className="titulo">Apellido</h1>
                <input
                  class="form-control"
                  type="text"
                  placeholder="Apellido"
                  readonly
                />
                <h1 className="titulo">Correo</h1>
                <input
                  class="form-control"
                  type="E-mail"
                  placeholder="Correo"
                  readonly
                />

                <h1 className="titulo">Contraseña</h1>
                <input
                  class="form-control"
                  type="password"
                  placeholder="Contraseña"
                  readonly
                />
              </div>
              <br />
              <div className="col text-center fondo ">
                <br />
                <button
                  onClick={this._Alerta}
                  type="button"
                  className="btn btn-outline-dark boton"
                >
                  <a href="/perfiles">Guardar</a>
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
                      Regresar
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
    );
  }
}

export default Registro;
