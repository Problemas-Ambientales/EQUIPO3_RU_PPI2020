import React from "react";
import "../styles/styles.css";
import Swal from "sweetalert2";
class Consultar_material extends React.Component {
  _Alerta() {
    Swal.fire(
      " Material econtrado  con exito",
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
                <div className="form-group">
                  <div className="col text-center">
                    <h1 className="titulo"> Buscar un material</h1>
                    <br />
                    <br />

                    <nav className="navbar ">
                      <form className="form-inline">
                        <input
                          className="form-control mr-sm-2 campo"
                          type="search"
                          placeholder="Ingresar material"
                          aria-label="Search"
                        />
                        <button
                          onClick={this._Alerta}
                          className="btn btn-outline-success my-2 my-sm-0"
                          type="submit"
                        >
                          Buscar
                        </button>
                      </form>
                    </nav>

                    <div className=" col-xl-8">
                      <br />
                      <br />
                      <br />
                      <button
                        type="button"
                        className="btn btn-outline-dark boton"
                      >
                        <a href="/material">Atras</a>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Consultar_material;
