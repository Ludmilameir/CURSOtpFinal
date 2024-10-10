import React from "react";
import "../paginas/estilos/0km.css";
import PreguntasFrecuentes from "../paginas/codigoPreguntas/preguntasfrecuentesFINANCIACION.js"
import Auto1 from "../img/0km/auto1.jpeg"
import Auto2 from "../img/0km/auto2.jpg"
import Auto3 from "../img/0km/auto3.jpeg"
import Auto4 from "../img/0km/auto4.jpeg"
import Auto5 from "../img/0km/auto5.jpg"
import Auto6 from "../img/0km/auto6.jpg"
import Auto7 from "../img/0km/auto7.jpg"
import Auto8 from "../img/0km/auto8.jpg"
import Auto9 from "../img/0km/auto9.jpg"
import Auto10 from "../img/0km/auto10.jpeg"
import Auto11 from "../img/0km/auto11.jpeg"
import Auto12 from "../img/0km/auto12.jpeg"
import Auto13 from "../img/0km/auto13.jpg"
import Auto14 from "../img/0km/auto14.jpeg"
import Auto15 from "../img/0km/auto15.jpeg"
import Auto16 from "../img/0km/auto16.jpeg"
import Auto17 from "../img/0km/auto17.jpg"
import Auto18 from "../img/0km/auto18.jpg"
import Audi from "../img/0km/port-audi.png"
import Golf from "../img/0km/port-golf.png"
import Toyota from "../img/0km/port-toyota.png"
import Ford from "../img/0km/Rustic Minimal Wedding Print Banner.png"

import moveSlide  from "./km0slide.js";
function KM0() {
  return (
    <div className="km0">
      <div className="carousel">
        <div className="carousel-images">
            
            <img src={Ford} alt="Imagen 1"/>
            <img src={Golf}  alt="Imagen 2"/>
            <img src={Audi}  alt="Imagen 3"/>
            <img src={Toyota}  alt="Imagen 4"/>
        </div>
               
               
      <moveSlide> </moveSlide>

        <button className="prev" onClick={() => moveSlide(-1)}>{'<'}</button>
        <button className="next" onClick={() => moveSlide(1)}>{'>'}</button>       
        

      </div>

    <h2 className="frase">Encontrá tu próximo 0km en nuestro catálogo</h2><hr/>
    
    <section id="CatalogoAutos">  
    
        <div id="Contenedor"> 
            <div className="divIzquierdo">
            <div className="filtrarLista"> 
                  
                    <div className="ordernarPor">
                        <label for="order">Ordenar por</label>
                        <select id="order">
                            <option value="menor">Menor Precio</option>
                            <option value="mayor">Mayor Precio</option>
                            <option value="recientes">Más Recientes</option>
                        </select>
                    </div>
                   
                    <ul className="filtros">
                        
                        <li>
                            <p>Gama</p>
                            <ul><li>
                                    <input type="radio" id="alta-gama"/>
                                    <label for="alta-gama">Alta Gama (1)</label>
                            </li></ul>
                        </li>
                     
                        <li>
                            <p>Marcas</p>
                            <ul>
                                <li>
                                    <input type="radio" id="audi"/>
                                    <label for="audi">Audi (1)</label>
                                </li>
                                <li>
                                    <input type="radio" id="chevrolet"/>
                                    <label for="chevrolet">Chevrolet (17)</label>
                                </li>
                                <li>
                                    <input type="radio" id="chrysler"/>
                                    <label for="chrysler">Chrysler (1)</label>
                                </li>
                                <li>
                                    <input type="radio" id="citroen"/>
                                    <label for="citroen">Citroen (15)</label>
                                </li>
                                <li>
                                    <input type="radio" id="fiat"/>
                                    <label for="fiat">Fiat (36)</label>
                                </li>
                                <li>
                                    <input type="radio" id="ford"/>
                                    <label for="ford">Ford (26)</label>
                                </li>
                                <li>
                                    <input type="radio" id="honda"/>
                                    <label for="honda">Honda (2)</label>
                                </li>
                                <li>
                                    <input type="radio" id="jeep"/>
                                    <label for="jeep">Jeep (13)</label>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <p>Transmision</p>
                            <ul><li>
                                <li>
                                    <input type="radio" id="automatico"/>
                                    <label for="radio">Automatico</label>                                
                                </li>
                                <li>
                                    <input type="radio" id="manual"/>
                                    <label for="radio">Manual</label>                                
                                </li>
    
                            </li></ul>
                        </li>
    
                                <li>
                                <p>Combustible</p>
                                <ul><li>
                                    <li>
                                    <input type="radio" id="nafta"/>
                                    <label for="alta-gama">Nafta</label>                                    
                                    </li>
                                    <li>
                                    <input type="radio" id="diesel"/>
                                    <label for="alta-gama">Diesel</label>                                    
                                    </li>
                                    <li>
                                    <input type="radio" id="gnc"/>
                                    <label for="alta-gama">Gnc</label>                                    
                                    </li>
    
                                </li></ul></li>
                                <li>
                                    <p>Segmentos</p>
                                    <ul><li>
                                        <li>
                                        <input type="radio" id="deportivo"/>
                                        <label for="alta-gama">Deportivo (1)</label>
                                        </li>
                                        <li>                                    
                                        <input type="radio" id="familiar"/>
                                        <label for="alta-gama">Familiar</label> 
                                        </li>
                                        <li>
                                        <input type="radio" id="pickup"/>
                                        <label for="alta-gama">Pick-up</label>    
                                        </li>
                                        <li>
                                         <input type="radio" id="sedan"/>
                                        <label for="alta-gama">Sedan</label>                                       
                                        </li>
                                        <li>
                                        <input type="radio" id="sedanplus"/>
                                        <label for="alta-gama">Sedan Plus</label>                                        
                                        </li>
                                        <li>
                                        <input type="radio" id="SUV"/>
                                        <label for="alta-gama">Suv</label>                                        
                                        </li>
    
                                </li>
                                    </ul></li>
                                
                    </ul>
                </div>
            </div>
    

    <div className="divDerecho"> 
        <div className="catalogo">
            <div className="auto">
                <img src={Auto1} alt="Modelo de auto 1"/>
                <h2>Volkswagen up</h2>
                <p>Take Aa 5p L14</p>
                <p>Kilometraje: 0km</p>
                <p>Combustible: Nafta</p>
                <p>Precio: $14.500.000</p>
                
            </div>
    
            <div className="auto">
                <img src={Auto2} alt="Modelo de auto 2"/>
                <h2>Peugeot 207</h2>
                <p>Compact 1.4 5 P Xsallure</p>
                <p>Kilometraje: 0km</p>
                <p>Combustible: Gnc</p>
                <p>Precio: $15.500.000</p>
                
            </div>
    
            <div className="auto">
                <img src={Auto3} alt="Modelo de auto 3"/>
                <h2> Ford Fiesta</h2>
                <p>1.6 titanium kd 4p L13</p>
                <p>Kilometraje: 0km</p>
                <p>Combustible: Nafta</p>
                <p>Precio: $15.500.000</p>
                
            </div>
            <div className="auto">
                <img src={Auto4} alt="Modelo de auto 4"/>
                <h2>Ford Ranger</h2>
                <p>3.2 Tdi 4x4 Dc Ltd At L16</p>
                <p>Kilometraje: 0km</p>
                <p>Combustible: Diesel</p>
                <p>Precio: $34.500.000</p>
            </div>
            <div className="auto">
                <img src={Auto5} alt="Modelo de auto 5"/>
                <h2>Chevrolet Traiblazer</h2>
                <p>2.8 4x4 Ltz Premier At</p>
                <p>Kilometraje: 0km</p>
                <p>Combustible: Diesel</p>
                <p>Precio: $49.000.000</p>
            </div>
            <div className="auto">
                <img src={Auto6} alt="Modelo de auto 6"/>
                <h2>Renault Alaskan</h2>
                <p>2.3 Tdi 4x4 Iconic At L20</p>
                <p>Kilometraje: 0km</p>
                <p>Combustible: Diesel</p>
                <p>Precio: 42.000.000</p>
            </div>
            <div className="auto">
                <img src={Auto7} alt="Modelo de auto 7"/>
                <h2>Audi A3</h2>
                <p>2.0 T Sedan S-tronic L17</p>
                <p>Kilometraje: 0km</p>
                <p>Combustible: nafta</p>
                <p>Precio: $29.900.000</p>
            </div>
            <div className="auto">
                <img src={Auto8} alt="Modelo de auto 8"/>
                <h2>Clrysler 300 C</h2>
                <p>3.6 V6 L13</p>
                <p>Kilometraje: 0km</p>
                <p>Combustible: Nafta</p>
                <p>Precio: $42.500.000</p>
            </div>
            <div className="auto">
                <img src={Auto9} alt="Modelo de auto 9"/>
                <h2>Jeep Compras</h2>
                <p>2.4 Longitude At6 4x2 L18</p>
                <p>Kilometraje: 0km</p>
                <p>Combustible: Nafta</p>
                <p>Precio: $39.300.000</p>
            </div>
            <div className="auto">
                <img src={Auto10} alt="Modelo de auto 10"/>
                <h2>Jeep Renegade</h2>
                <p>1.3 T 270 Serie-s At6</p>
                <p>Kilometraje: 0km</p>
                <p>Combustible: nafta</p>
                <p>Precio: $38.900.000</p>
            </div>
            <div className="auto">
                <img src={Auto11} alt="Modelo de auto 11"/>
                <h2>Citroen C 4 Cactus</h2>
                <p>1.6 Vti Feel L18</p>
                <p>Kilometraje: 0km</p>
                <p>Combustible: Nafta</p>
                <p>Precio: $28.900.000</p>
            </div>
            <div className="auto">
                <img src={Auto12} alt="Modelo de auto 12"/>
                <h2>Honda Hrv</h2>
                <p>1.8 Ex Cvt L15</p>
                <p>Kilometraje: 0km</p>
                <p>Combustible: Nafta</p>
                <p>Precio: $26.900.000</p>
            </div>
            <div className="auto">
                <img src={Auto13} alt="Modelo de auto 13"/>
                <h2>Ram Rampage</h2>
                <p>2.0 Gme 4x4 Rebel At9</p>
                <p>Kilometraje: 0km</p>
                <p>Combustible: Nafta</p>
                <p>Precio: $47.900.000</p>
            </div>
            <div className="auto">
                <img src={Auto14} alt="Modelo de auto 14"/>
                <h2>Peugeot 3008</h2>
                <p>2.0 Hdi Line Tiptronic L17</p>
                <p>Kilometraje: 0km</p>
                <p>Combustible: Diesel</p>
                <p>Precio: $40.900.000</p>
            </div>
            <div className="auto">
                <img src={Auto15} alt="Modelo de auto 15"/>
                <h2>Toyota Corolla Cross</h2>
                <p>1.8 Seg Hv E-cvt</p>
                <p>Año/kilometraje: 2024/0km</p>
                <p>Combustible: Hibrido</p>
                <p>Precio: $39.000.000</p>
            </div>
            <div className="auto">
                <img src={Auto16} alt="Modelo de auto 16"/>
                <h2>Ram 150</h2>
                <p>5.7 Dc 4x4 Laramie At</p>
                <p>Kilometraje: 0km</p>
                <p>Combustible: Nafta</p>
                <p>Precio: $59.000.000</p>
            </div>
            <div className="auto">
                <img src={Auto17} alt="Modelo de auto 17"/>
                <h2>Ford Ranger</h2>
                <p>2.2 Tdi 4x2 Dc Xl L19</p>
                <p>Kilometraje: 0km</p>
                <p>Combustible: Diesel</p>
                <p>Precio: $31.500.000</p>
            </div>
            <div className="auto">
                <img src={Auto18} alt="Modelo de auto 18"/>
                <h2>Nissan Frontier</h2>
                <p>2.3 4x2 Dc Xe L18</p>
                <p>Kilometraje: 0km</p>
                <p>Combustible: Diesel</p>
                <p>Precio: $29.000.000</p>
            </div>
        </div>
    </div>
    </div>
</section>
<PreguntasFrecuentes></PreguntasFrecuentes>
</div>
  );

}

export default KM0;
