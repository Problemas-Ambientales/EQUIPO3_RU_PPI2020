import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Inicio from "../pages/inicio";
import Registro from "../pages/registro";
import Iniciosesion from "../pages/iniciosesion";
import Perfiles from "../pages/perfiles";
import Calculo from "../pages/calculo";
import Calculo_total from "../pages/calculo_total";
import Menu from "../pages/menu";
import Producto from "../pages/producto";
import Crear_producto from "../pages/crear_producto";
import Consultar_producto from "../pages/consultar_producto";
import Editar_producto from "../pages/editar_producto";
import Material from "../pages/material";
import Editar_material from "../pages/editar_material";
import Crear_material from "../pages/crear_material";
import Consultar_material from "../pages/consultar_material";
import Tiempo from "../pages/tiempo";
import Crear_tiempo from "../pages/crear_tiempo";
import Consultar_tiempo from "../pages/consultar_tiempo";
import Editar_tiempo from "../pages/editar_tiempo";
const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Inicio} />
        <Route exact path="/registro" component={Registro} />
        <Route exact path="/iniciosesion" component={Iniciosesion} />
        <Route exact path="/perfiles" component={Perfiles} />
        <Route exact path="/calculo" component={Calculo} />
        <Route exact path="/calculo_total" component={Calculo_total} />
        <Route exact path="/menu" component={Menu} />
        <Route exact path="/producto" component={Producto} />
        <Route exact path="/crear_producto" component={Crear_producto} />
        <Route exact path="/material" component={Material} />
        <Route exact path="/editar_material" component={Editar_material} />
        <Route exact path="/crear_material" component={Crear_material} />
        <Route
          exact
          path="/consultar_material"
          component={Consultar_material}
        />
        <Route exact path="/tiempo" component={Tiempo} />
        <Route
          exact
          path="/consultar_producto"
          component={Consultar_producto}
        />
        <Route exact path="/editar_producto" component={Editar_producto} />
        <Route exact path="/consultar_tiempo" component={Consultar_tiempo} />
        <Route exact path="/crear_tiempo" component={Crear_tiempo} />
        <Route exact path="/editar_tiempo" component={Editar_tiempo} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
