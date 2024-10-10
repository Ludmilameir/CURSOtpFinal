import React from "react";
import "../paginas/estilos/usados.css"
import PreguntasFrecuentes from "./codigoPreguntas/preguntasFrecuentesUSADOS";
// imagenes
import auto1 from "../img/usados/auto1.jpeg"
import auto2 from "../img/usados/auto2.jpg"
import auto3 from "../img/usados/auto3.jpeg"
import auto4 from "../img/usados/auto4.jpeg"
import auto5 from "../img/usados/auto5.jpg"
import auto6 from "../img/usados/auto6.jpg"
import auto7 from "../img/usados/auto7.jpg"
import auto8 from "../img/usados/auto8.jpg"
import auto9 from "../img/usados/auto9.jpg"
import auto10 from "../img/usados/auto10.jpeg"
import auto11 from "../img/usados/auto11.jpeg"
import auto12 from "../img/usados/auto12.jpeg"
import auto13 from "../img/usados/auto13.jpg"
import auto14 from "../img/usados/auto14.jpeg"
import auto15 from "../img/usados/auto15.jpeg"
import auto16 from "../img/usados/auto16.jpeg"
import auto17 from "../img/usados/auto17.jpg"
import auto18 from "../img/usados/auto18.jpg"
import banner from "../img/usados/Banner web sobre descuentos para tienda de ropa .png"

function USADOS() {
  return (
    <div className="usados">
        <section className="fotointroduccion">
        <div><img src= {banner} alt=""/></div>
       
        </section>  
    <section id="CatalogoAutos">  
    <h1>Catálogo de Autos</h1>
    <div id="Contenedor"> 
        <div className="divIzquierdo">
        <div className="filtrarLista"> 
                
                <div classname="ordernarPor">
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
                            </li></ul></li>
                   
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
                            <ul>
                            <li>
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

                            </li></ul>
                            </li>
                            <li>
                                <p>Segmentos</p>
                                <ul>
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

                            </ul>
                            </li> 
                </ul>
            </div>
        </div>

        <div className="divDerecho"> 
            <div className="catalogo">
                <div className="auto">
                    <img src={auto1} alt="Modelo de auto 1"/>
                    <h2>Volkswagen up!</h2>
                    <p>Take Aa 5p L14</p>
                    <p>Año/kilometraje: 2017/115.000Km</p>
                    <p>Combustible: Nafta</p>
                    <p>Precio: $14.500.000</p>
                    
                </div>
        
                <div className="auto">
                    <img src= {auto2} alt="Modelo de auto 2"/>
                    <h2>Peugeot 207</h2>
                    <p>Compact 1.4 5 P Xsallure</p>
                    <p>Año/Kilometraje: 2016/72.000km</p>
                    <p>Combustible: Gnc</p>
                    <p>Precio: $15.500.000</p>
                    
                </div>
        
                <div className="auto">
                    <img src= {auto3} alt="Modelo de auto 3"/>
                    <h2> Ford Fiesta</h2>
                    <p>1.6 titanium kd 4p L13</p>
                    <p>Año/kilometraje: 2024/84.700km</p>
                    <p>Combustible: Nafta</p>
                    <p>Precio: 15.500.000</p>
                    
                </div>
                <div className="auto">
                    <img src= {auto4} alt="Modelo de auto 4"/> 
                    <h2>Ford Ranger</h2>
                    <p>3.2 Tdi 4x4 Dc Ltd At L16</p>
                    <p>Año/kilometraje: 2016/117.000km</p>
                    <p>Combustible: Diesel</p>
                    <p>Precio: $34.500.000</p>
                </div>
                <div className="auto">
                    <img src= {auto5} alt="Modelo de auto 5"/> 
                    <h2>Chevrolet Traiblazer</h2>
                    <p>2.8 4x4 Ltz Premier At</p>
                    <p>Año/kilometraje: 2021/91.900km</p>
                    <p>Combustible: Diesel</p>
                    <p>Precio: $49.000.000</p>
                </div>
                <div className="auto">
                    <img src= {auto6} alt="Modelo de auto 6"/>
                    <h2>Renault Alaskan</h2>
                    <p>2.3 Tdi 4x4 Iconic At L20</p>
                    <p>Año/kilometraje: 2021/49.200km</p>
                    <p>Combustible: Diesel</p>
                    <p>Precio: 42.000.000</p>
                </div>
                <div className="auto">
                    <img src= {auto7} alt="Modelo de auto 7"/>
                    <h2>Audi A3</h2>
                    <p>2.0 T Sedan S-tronic L17</p>
                    <p>Año/kilometraje: 2018/87.100km</p>
                    <p>Combustible: nafta</p>
                    <p>Precio: UDS 29.900</p>
                </div>
                <div className="auto">
                    <img src= {auto8} alt="Modelo de auto 8"/>
                    <h2>Clrysler 300 C</h2>
                    <p>3.6 V6 L13</p>
                    <p>Año/kilometraje: 2013/37.500km</p>
                    <p>Combustible: Nafta</p>
                    <p>Precio: USD 42.500</p>
                </div>
                <div className="auto">
                    <img src= {auto9} alt="Modelo de auto 9"/>
                    <h2>Jeep Compras</h2>
                    <p>2.4 Longitude At6 4x2 L18</p>
                    <p>Año/kilometraje: 2021/60.700km</p>
                    <p>Combustible: Nafta</p>
                    <p>Precio: 39.300.000</p>
                </div>
                <div className="auto">
                    <img src= {auto10} alt="Modelo de auto 10"/>
                    <h2>Jeep Renegade</h2>
                    <p>1.3 T 270 Serie-s At6</p>
                    <p>Año/kilometraje: 2023/61.200km</p>
                    <p>Combustible: nafta</p>
                    <p>Precio: $38.900.000</p>
                </div>
                <div className="auto">
                    <img src= {auto11} alt="Modelo de auto 11"/> 
                    <h2>Citroen C 4 Cactus</h2>
                    <p>1.6 Vti Feel L18</p>
                    <p>Año/kilometraje: 2023/16.200</p>
                    <p>Combustible: Nafta</p>
                    <p>Precio: $28.900.000</p>
                </div>
                <div className="auto">
                    <img src= {auto12} alt="Modelo de auto 12"/>
                    <h2>Honda Hrv</h2>
                    <p>1.8 Ex Cvt L15</p>
                    <p>Año/kilometraje: 2016/81.300km</p>
                    <p>Combustible: Nafta</p>
                    <p>Precio: $26.900.000</p>
                </div>
                <div className="auto">
                    <img src= {auto13} alt="Modelo de auto 13"/>
                    <h2>Ram Rampage</h2>
                    <p>2.0 Gme 4x4 Rebel At9</p>
                    <p>Año/kilometraje: 2024/4.100km</p>
                    <p>Combustible: Nafta</p>
                    <p>Precio: $47.900.000</p>
                </div>
                <div className="auto">
                    <img src= {auto14} alt="Modelo de auto 14"/> 
                    <h2>Peugeot 3008</h2>
                    <p>2.0 Hdi Line Tiptronic L17</p>
                    <p>Año/kilometraje: 2019/85.700km</p>
                    <p>Combustible: Diesel</p>
                    <p>Precio: $40.900.000</p>
                </div>
                <div className="auto">
                    <img src= {auto15} alt="Modelo de auto 15"/> 
                    <h2>Toyota Corolla Cross</h2>
                    <p>1.8 Seg Hv E-cvt</p>
                    <p>Año/kilometraje: 2021/66.000km</p>
                    <p>Combustible: Hibrido</p>
                    <p>Precio: $39.000.000</p>
                </div>
                <div className="auto">
                    <img src= {auto16} alt="Modelo de auto 16"/>
                    <h2>Ram 150</h2>
                    <p>5.7 Dc 4x4 Laramie At</p>
                    <p>Año/kilometraje: 2022/32.100km</p>
                    <p>Combustible: Nafta</p>
                    <p>Precio: USD 59.000</p>
                </div>
                <div className="auto">
                    <img src= {auto17} alt="Modelo de auto 17"/>
                    <h2>Ford Ranger</h2>
                    <p>2.2 Tdi 4x2 Dc Xl L19</p>
                    <p>Año/kilometraje: 2021/150.500km</p>
                    <p>Combustible: Diesel</p>
                    <p>Precio: $31.500.000</p>
                </div>
                <div className="auto">
                    <img src= {auto18} alt="Modelo de auto 18"/>
                    <h2>Nissan Frontier</h2>
                    <p>2.3 4x2 Dc Xe L18</p>
                    <p>Año/kilometraje: 2018/146.600km</p>
                    <p>Combustible: Diesel</p>
                    <p>Precio: $29.000.000</p>
                </div>
            </div>
        </div>
        </div> 

    </section> 
        <PreguntasFrecuentes></PreguntasFrecuentes>

<section>

</section>
   </div> 
  );
}

export default USADOS;
