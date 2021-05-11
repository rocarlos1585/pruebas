import logo from './logo.svg';
import './App.css';
import homeIcon from './recursos/Icon-feather-home.svg'
import historialIcon from './recursos/icon-historial.svg'
import pedidosIcon from './recursos/icon-pedidos.svg'
import incidenciasIcon from './recursos/icon-incidencias.svg'

function Menu() {
  return (
    <div className="menuContainer">
      <ul>
          <li>
              <img src={homeIcon}/>&nbsp;
              Inicio
          </li>

          <li>
              <img src={pedidosIcon}/>&nbsp;
              Pedidos
          </li>

          <li>
              <img src={historialIcon}/>&nbsp;
              Historial
          </li>

          <li>
              <img src={incidenciasIcon}/>&nbsp;
              Incidencias
          </li>
      </ul>
    </div>
  );
}

export default Menu;
