import React from "react";
import "../estilos/nav.css";
import { Link } from "react-router-dom";
import carZoneLogo from "../../img/logoCarZone.png";

function NAV() {
  return (
    <div className="navegacion">
      <section className="nav">
        <img src={carZoneLogo} alt="Logo CarZone" />
        <ul>
          <li><Link to="/">Inicio</Link></li>
          <li><Link to="/0km">0Km</Link></li>
          <li><Link to="/usados">Usados</Link></li>
          <li><Link to="/financiacion">Planes de financiación</Link></li>
          <li><Link to="/empresas">Empresas</Link></li>
          <li><Link to="/asesoria">Asesoría</Link></li>
          <li><Link to="/contacto">¿Dónde encontrarnos?</Link></li>
        </ul>
      </section>
    </div>
  );
}

export default NAV;
