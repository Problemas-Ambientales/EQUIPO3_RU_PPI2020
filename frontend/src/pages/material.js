import React from "react";
import "../styles/styles.css";
import Swal from "sweetalert2";
class Material extends React.Component {
  _Alerta() {
    Swal.fire(
      "Material eliminado con exito",
      "Haz click en el boton",
      "success"
    );
  }
  render() {
    return (
      <div className="container-fluid fondo">
        <div className="row">
          <div className="col-sm-4 col-md-4 col-lg-4 col-xl-4"></div>
          <div className="col-sm-4 col-md-4 col-lg-4 col-xl-4">
            <div className="row">
              <div className=" col-lg-12">
                <div class="form-group titulo">
                  <label for="exampleInputEmail1 ">Código</label>
                  <input
                    type="text"
                    class="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                  />
                  <small id="emailHelp" class="form-text text-muted"></small>
                  <label for="exampleInputEmail1">Nombre</label>
                  <br />
                  <input
                    type="text"
                    class="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                  />
                  <br />
                  <small id="emailHelp" class="form-text text-muted"></small>
                  <label for="exampleInputEmail1">
                    Descripción del material
                  </label>
                  <br />
                  <input
                    type="text"
                    class="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                  />
                  <small id="emailHelp" class="form-text text-muted"></small>
                </div>

                <div className="col text-center">
                  <br />
                  <button type="button" className="btn btn-outline-dark boton">
                    <a href="/crear_material">Crear</a>
                  </button>

                  <br />
                  <br />

                  <button type="button" className="btn btn-outline-dark boton">
                    <a href="/consultar_material">Consultar</a>
                  </button>
                  <br />
                  <br />
                  <button
                    onClick={this._Alerta}
                    type="button"
                    className="btn btn-outline-dark boton"
                  >
                    <a href="/menu">Eliminar</a>
                  </button>
                  <br />
                  <br />
                  <button type="button" className="btn btn-outline-dark boton">
                    <a href="/editar_material ">Editar</a>
                  </button>
                  <br />
                  <br />
                  <button type="button" className="btn btn-outline-dark boton">
                    <a href="/menu">Atrás</a>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Material;
