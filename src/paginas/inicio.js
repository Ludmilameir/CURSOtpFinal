import React from "react";
import "../paginas/estilos/style.css";
import PreguntasFrecuentes from "./codigoPreguntas/preguntasfrecuentesINICIO";
import Carrousel from "./iniciocarrousel";
import { Link } from 'react-router-dom';

// imágenes
import imagen1 from "../img/imagen 1.jpeg";
import imagen2 from "../img/imagen 2.jpeg";
import imagen3 from "../img/imagen 3.jpeg";

import logoford from "../img/logoFord.png";
import logovolks from "../img/logoVolkswagen.avif";
import logotoyota from "../img/logoToyota.jpg";
import logochevrolet from "../img/logoChevrolet.jfif";

import persona1 from "../img/persona1.jpg";
import persona2 from "../img/persona2.jpg";


function INICIO() {
  return (
    <div className="inicio">
       <div className="carousel">
            <div className="carousel-inner">
              <div className="carousel-item"><img src={imagen1} alt="Imagen 1"/></div>
              <div className="carousel-item"><img src={imagen2} alt="Imagen 2"/></div>
              <div className="carousel-item"><img src={imagen3} alt="Imagen 3"/></div>
        
            </div>
        </div>

{/*     
      <div id="EncontrarAuto">
        <h1>Encontrá el auto ideal para vos entre nuestro catálogo de 0Km y Usados</h1>
        <form action="/buscar" method="get" className="buscarAuto">
          <div id="tipoAuto">
            <label>
              <input type="button" value="0Km" id="botonSeleccionar" />
            </label>
            <label>
              <input type="button" value="Usados" id="botonSeleccionar" />
            </label>
          </div>
          <input type="text" placeholder="Escribí la marca o modelo del vehículo" required />
          <label><input type="button" value="Buscar" className="botones" ></input></label>
        </form>
      </div>  */}

      <h1>TOP MARCAS LÍDERES.</h1>

      <div className="marcasLideres">
        <div className="marcaLider">  
          <img src={logotoyota} alt="Toyota" />
          <p>Toyota</p>
          <p>Camionetas auténticas.</p>
          <Link to ="/0km"><label><input type="button" className="botones" value="Ver Modelos" ></input></label> </Link>
        </div>
        <div className="marcaLider">
          <img src={logovolks} alt="Volkswagen" />
          <p>Volkswagen</p>
          <p>Autos fieles para el día a día.</p>
          <Link to ="/0km"><label><input type="button" className="botones" value="Ver Modelos" ></input></label> </Link>
        </div>
        <div className="marcaLider">
          <img src={logoford} alt="Ford" />
          <p>Ford</p>
          <p>Camionetas auténticas.</p>
          <Link to ="/0km"><label><input type="button" className="botones" value="Ver Modelos" ></input></label> </Link>
        </div>
        <div className="marcaLider">
          <img src={logochevrolet} alt="Chevrolet" />
          <p>Chevrolet</p>
          <p>Camionetas auténticas.</p>
          <Link to ="/0km"><label><input type="button" className="botones" value="Ver Modelos" ></input></label> </Link>
        </div>
      </div>

      <div id="espacio"></div>

      <div className="avisosglob">
        <div className="avisos">
          <img className="persona1" src={persona1} alt="Personal atendiendo" />
          <p>Accedé con un plan de ahorro</p>
          <p>Conocé los planes disponibles y subite a tu próximo auto con financiación</p>
          <Link to="/financiacion"><label><input type="button" value="Ver Planes" className="botones"></input></label> </Link>
          {/* <button>Ver Planes</button> */}
        </div>
        <div className="avisos">
          <img className="persona1" src={persona2} alt="Personal revisando" />
          <p>Nosotros te asesoramos.</p>
          <p>Te ayudamos en tu decisión o búsqueda.</p>
          <Link to="/asesoria"><label><input type="button" value="Agendar un PreTurno" className="botones"></input></label> </Link>
        </div>
      </div>

      <div id="espacio"></div>

      <PreguntasFrecuentes />
    </div>
  );
}

export default INICIO;

