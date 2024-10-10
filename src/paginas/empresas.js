import React from "react";
import "../paginas/estilos/empresas.css"
import PreguntasFrecuentes from "./codigoPreguntas/preguntasFrecuentesEMPRESAS";

// imagenes
import Alfa from "../img/empresas/ALFA.png"
import audilogo from "../img/empresas/Audi-Logo-PNG.png"
import Audi from "../img/empresas/AUDI.png"
import bmwlogo from "../img/empresas/BMW_logo_PNG1.png"
import chevroletlogo from "../img/empresas/Chevrolet-Logo-1.png"
import chevrolet from "../img/empresas/CHEVROLET.jpg"
import citroen from "../img/empresas/CITROEN.png"
import dodge from "../img/empresas/DODGE.png"
import ferrari from "../img/empresas/FERRARI.png"
import fiatlogo from "../img/empresas/fiat-logo-2.png"
import fiat from "../img/empresas/FIAT.png"
import fordlogo from "../img/empresas/ford-logo-png-1798.png"
import ford from "../img/empresas/FORD.png"
import honda from "../img/empresas/HONDA.png"
import hyundai from "../img/empresas/HYUNDAI.png"
import jaguar from "../img/empresas/JAGUAR.png"
import jeeplogo from "../img/empresas/jeep-logo-0.png"
import jeep from "../img/empresas/JEEP.png"
import kia from "../img/empresas/KIA.png"
import mercedes from "../img/empresas/MERCEDES.png"
import nissanlogo from "../img/empresas/Nissan-Logo-PNG.png"
import nissan from "../img/empresas/NISSAN.png"
import PEUGEOT from "../img/empresas/PEUGEOT.png"
import porsche from "../img/empresas/PORSCHE.png"
import RENAULT from "../img/empresas/RENAULT.png"
import TESLA from "../img/empresas/TESLA.png"
import toyotalogo from "../img/empresas/toyota-logo-vector.png"
import toyota from "../img/empresas/TOYOTA.png"
import volkswagen from "../img/empresas/volkswagen.png"

function EMPRESAS() {
  return (
    <div className="empresas">
        <div className="contenedorr">
    <h1 class="todasmarcass">Todas las marcas que encontraras en nuestra concesionaria.</h1>

    <div className="columnass">

     <div className="marcass">
     <img src={ford}alt=""/>
     </div>

     <div className="marcass">
        <img src={chevrolet} alt=""/>
        </div>

        <div className="marcass">
           <img src={toyota} alt=""/>
            </div>

            <div className="marcass">
             <img src={Audi} alt=""/>
                </div>

                <div className="marcass">
                    <img src={citroen} alt=""/>
                    </div>

                    <div className="marcass">
                      <img src={hyundai} alt=""/>                     
                    </div>

                        <div className="marcass">
                            <img src={jeep} alt=""/>
                          </div>

                            
     <div className="marcass">
        <img src={fiat} alt=""/>
        </div>
   
        <div className="marcass">
           <img src={ferrari} alt=""/>
           </div>
   
           <div className="marcass">
               <img src={porsche}alt=""/>
               </div>
   
               <div className="marcass">
                   <img src={mercedes}alt=""/>
                   </div>
   
                   <div className="marcass">
                       <img src={dodge} alt=""/>
                       </div>
   
                       <div className="marcass">
                        <img src={honda} alt=""/>
            
                           </div>
   
                           <div className="marcass">
                               <img src={PEUGEOT} alt=""/>
                               </div>
                            
                               <div className="marcass">
                                <img src={nissan} alt=""/>
                                </div>


                                <div className="marcass">
                                    <img src={Alfa} alt=""/>
                                    </div>
                    
                                    <div className="marcass">
                                        <img src={jaguar} alt=""/>
                                        </div>
                    
                                        <div className="marcass">
                                            <img src={kia} alt=""/>
                                            </div>
                    
                                            <div className="marcass">
                                                <img src={RENAULT} alt=""/>
                                                </div>
                                             
                                                <div className="marcass">
                                                 <img src={TESLA} alt=""/>
                                                 </div>







    </div>



    <h1 className="titulo">MARCAS DESTACADAS</h1>
    



    <div className="carrusela">

        <div className="carrusel-fotosa">
            <div className="fotos"><img src={chevroletlogo} alt="imagen 1"/></div>
            <div className="fotos"><img src={fiatlogo} alt="Imagen 2"/></div>
            <div className="fotos"><img src={fordlogo} alt="Imagen 3"/></div>
            <div className="fotos"><img src={toyotalogo} alt="Imagen 4"/></div>
            <div className="fotos"><img src={jeeplogo} alt="Imagen 5"/></div>
            <div className="fotos"><img src={audilogo}alt="Imagen 6"/></div>
            <div className="fotos"><img src={bmwlogo} alt="Imagen 7"/></div>
            <div className="fotos"><img src={nissanlogo} alt="Imagen 8"/></div>
            
        </div>
    </div>

<PreguntasFrecuentes></PreguntasFrecuentes>

</div> 
    </div>
  );
}

export default EMPRESAS;
