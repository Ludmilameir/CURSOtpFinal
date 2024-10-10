import React from "react";
import "../paginas/estilos/financiacion.css"
import PreguntasFrecuentes from "./codigoPreguntas/preguntasfrecuentesFINANCIACION";
import { Link } from 'react-router-dom';

// imagenes
import auto1 from "../img/usados/auto1.jpeg"
import auto2 from "../img/usados/auto2.jpg"
import bmwCarrusel from "../img/financiacion/BMW-carrusel.png"
import audiCarrusel from "../img/financiacion/Audi-carrusel.png"
import fiatcarrusel from "../img/financiacion/Fiat-carrusel.png"
import chevroletcarrusel from "../img/financiacion/chevrolet-carrusel.png"
import fordcarrusel from "../img/financiacion/ford-carrusel.png"
import jeepcarrusel from "../img/financiacion/Jeep-carrusel.png"
import toyotacarrusel from "../img/financiacion/Toyota-carrusel.png"
import bmw1 from "../img/financiacion/BMW1.jpg"
import bmw2 from "../img/financiacion/BMW2.jpg"
import bmw3 from "../img/financiacion/BMW3.jpg"
import ford1 from "../img/financiacion/ford1.jpg"
import ford2 from "../img/financiacion/ford2.jpg"
import ford3 from "../img/financiacion/ford3.jpg"
import hyundai1 from "../img/financiacion/Hyundai1.jpg"
import hyundai2 from "../img/financiacion/Hyundai2.jpg"
import hyundai3 from "../img/financiacion/Hyundai3.jpg"
import MerBEN1 from "../img/financiacion/Mer.Ben1.jpg"
import MerBEN2 from "../img/financiacion/Mer.Ben2.webp"
import MerBEN3 from "../img/financiacion/Mer.Ben3.jpg"
import toyota1 from "../img/financiacion/toyota1.jpg"
import toyota2 from "../img/financiacion/toyota2.jpeg"
import toyota3 from "../img/financiacion/toyota3.jpg"
import volkswagen1 from "../img/financiacion/volkswagen1.jpg"
import volkswagen2 from "../img/financiacion/volkswagen2.jpg"
import volkswagen3 from "../img/financiacion/volkswagen3.jpg"
import fotoduda from "../img/financiacion/fotosduda.png"


function FINANCIACION() {
  return (
    <div className="financiacion">
        <h1>Planes de Financiación</h1>
        <div className="carousels">
            <div className="carousel-inners">
              <div className="carousel-items"><img src={audiCarrusel} alt="Imagen 1"/></div>
              <div className="carousel-items"><img src={bmwCarrusel} alt="Imagen 2"/></div>
              <div className="carousel-items"><img src={chevroletcarrusel} alt="Imagen 3"/></div>
              <div className="carousel-items"><img src={fiatcarrusel} alt="Imagen 4"/></div>
              <div className="carousel-items"><img src={fordcarrusel} alt="Imagen 5"/></div>
              <div className="carousel-items"><img src={jeepcarrusel} alt="Imagen 6"/></div>
              <div className="carousel-items"><img src={toyotacarrusel} alt="Imagen 7"/></div>
            </div>
        </div>
          
    <div className="principal-section">
        
        <h2>Elige el plan de financiación ideal para tu auto</h2>
        <h3>Desde 0KM a usados en el mejor estado </h3>
    </div>

    <div className="contenedor-autos">
        {/* <!-- Contenedores de toyota -- */}
        <div className="car-card">
            <img src={toyota1} alt="Auto 1"/>
            <h3>Toyota Yaris</h3>
            <p>Plan 100%</p>
            <p>Sorteo/Licitación.</p>
            <p><b>Cuotas de $190.376</b></p>
        </div>
        <div className="car-card">
            <img src={toyota2} alt="Auto 2"/>
            <h3>Toyota Land Cruiser</h3>
            <p>Plan 70/30</p>
            <p>Adjudicación en cuota 2</p>
            <p><b>Cuotas de 267.000</b></p>
        </div>
        <div className="car-card">
            <img src={toyota3} alt="Auto 3"/>
            <h3>Toyota Tacoma</h3>
            <p>Plan 75/25</p>
            <p>Sorteo/Licitación.</p>
            <p><b>Cuotas de $252.178</b></p>
        </div>
         {/* <!-- Contenedores de volkswagen --> */}
        <div className="car-card">
            <img src={volkswagen1} alt="Auto 1"/>
            <h3>Volkswagen Atlas Peak</h3>
            <p>Plan 60/40</p>
            <p>Adjudicación en cuota 2 con el 40%.</p>
            <p><b>Cuotas de $247.352</b></p>
        </div>
        <div className="car-card">
            <img src={volkswagen2} alt="Auto 2"/>
            <h3>Volkswagen ID.7</h3>
            <p>Plan 70/30</p>
            <p>Adjudicación en cuota 2 con el 30%.</p>
            <p><b>Cuotas de $241.693</b></p>
        </div>
        <div className="car-card">
            <img src={volkswagen3} alt="Auto 3"/>
            <h3>Volkswagen Golf GTI</h3>
            <p>Plan 100%</p>
            <p>Sorteo/Liquidacion.</p>
            <p><b>Cuotas de $225.489</b></p>
        </div>
         {/* <!-- Contenedores de ford --> */}
        <div className="car-card">
            <img src={ford1} alt="Auto 1"/>
            <h3>Ford F-350</h3>
            <p>Plan 70/30</p>
            <p>Adjudicación en cuotas 2 con el 30%.</p>
            <p><b>Cuota de $348.236</b></p>
        </div>
        <div className="car-card">
            <img src={ford2} alt="Auto 2"/>
            <h3>Ford Transit Courier</h3>
            <p>Plan 70/30</p>
            <p>Adjudicación en cuota 2</p>
            <p><b>Cuotas de 307.000</b></p>
        </div>
        <div className="car-card">
            <img src={ford3} alt="Auto 3"/>
            <h3>Ford Mondeo Titanium</h3>
            <p>Plan 60/40</p>
            <p>Recibimos tu usado.</p>
            <p><b>Cuotas de $300.452</b></p>
        </div>
         {/* <!-- Contenedores de Mercedes Benz --> */}
        <div className="car-card">
            <img src={MerBEN1} alt="Auto 1"/>
            <h3>Mercedes-Benz GLE First</h3>
            <p>Plan 75/25</p>
            <p>Recibimos tu usado.</p>
            <p><b>Cuotas de 278.000</b></p>
        </div>
        <div className="car-card">
            <img src={MerBEN2} alt="Auto 2"/>
            <h3>Mercedes-Benz C 220 </h3>
            <p>Plan 70/30</p>
            <p>Adjudicación asegurada en cuota 2 con el 40%.</p>
            <p><b>Cuotas de $335.781</b></p>
        </div>
        <div className="car-card">
            <img src={MerBEN3} alt="Auto 3"/>
            <h3>Mercedes-Benz CLA</h3>
            <p>Plan 100&</p>
            <p>Sorteo/Liquidacion</p>
            <p><b>Cuotas de 266.876 </b></p>
        </div>
         {/* <!-- Contenedores de BMW --> */}
        <div className="car-card">
            <img src={bmw1} alt="Auto 1"/>
            <h3>BMW Launches 220</h3>
            <p>Plan 70/30</p>
            <p>Adjudicación asegurada en cuota 2 con el 40%.</p>
            <p><b>Cuotas de 154.000</b></p>
        </div>
        <div className="car-card">
            <img src={bmw2} alt="Auto 2"/>
            <h3>BMW 118d</h3>
            <p>Plan 60/40</p>
            <p>Adjudicación asegurada en cuota 2 con el 40%.</p>
            <p><b>Cuotas de 188.900</b></p>
        </div>
        <div className="car-card">
            <img src={bmw3} alt="Auto 3"/>
            <h3>BMW X1</h3>
            <p>Plan 100%</p>
            <p>Adjudicación en cuota 3 con el 40%.</p>
            <p><b>Cuotas de $335.000</b></p>
        </div>
         {/* <!-- Contenedores de hyundai --> */}
        <div className="car-card">
            <img src={hyundai1} alt="Auto 1"/>
            <h3>Hyundai Kona</h3>
            <p>Plan 60/40</p>
            <p>Adjudicación en cuota 2 con el 30%.</p>
            <p><b>Cuotas de 344.000</b></p>
        </div>
        <div className="car-card">
            <img src={hyundai2} alt="Auto 2"/>
            <h3>Hyundai Veloster</h3>
            <p>Plan 70/30</p>
            <p>Adjudicación en cuota 3 con el 40%.</p>
            <p><b>Cuotas de $320.367</b></p>
        </div>
        <div className="car-card">
            <img src={hyundai3} alt="Auto 3"/>
            <h3>Hyundai Sonata </h3>
            <p>Plan 80/20</p>
            <p>Recibimos tu usado.</p>
            <p><b>Cuotas de 345.000 </b></p>
        </div>
    </div>

    <div className="image-dudacliente">
        <img src={fotoduda} alt="imagenacesor"/>
        <Link to="/contacto" > <button className="button-consulta"><b>CONSULTAR</b></button> </Link>
    </div>
    <PreguntasFrecuentes></PreguntasFrecuentes>
    </div>
  );
}

export default FINANCIACION;
