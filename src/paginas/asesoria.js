import React from "react";
import "../paginas/estilos/asesoria.css"
import PreguntasFrecuentes from "./codigoPreguntas/preguntasfrecuentesASESORIA"
// imagenes
import mobiFoto from "../img/asesoria/mobiFoto.jpg"
import sanderoFoto from "../img/asesoria/sanderoFoto.webp"
import cronosFoto from "../img/asesoria/cronosFoto.jpg"
import moneyIcon from "../img/asesoria/moneyIcon.png"
import securityIcon from "../img/asesoria/securityIcon.png"
import autoIcono from "../img/asesoria/autoIcono.png"
import contactanos from "../img/asesoria/contactanos.png"
import introduccion from "../img/asesoria/introduccionAsesoria.jpg"
function ASESORIA() {
    return (
        <div className="asesoria">
             <img src={introduccion}  className="content" alt=""/>
                <div id="espacio"> </div>
                <div className="vehiculosRecomendados">
                    <h1> Vehiculos Recomendados.</h1>

                    <div id="AutosRecomendados">
                        <div className="Recomendado">
                            <img src={mobiFoto} alt=""/>
                                <p>Fiat Mobi</p>
                                <p>0km</p>
                                <p>Combustible Nafta</p>
                                <p>Transmision Manual</p>
                        </div>

                        <div className="Recomendado">
                            <img src={sanderoFoto} alt=""/>
                                <p>Renaut Sandero</p>
                                <p>0km</p>
                                <p>Combustible Nafta</p>
                                <p>Transmision Manual</p>
                        </div>

                        <div className="Recomendado">
                            <img src={cronosFoto} alt=""/>
                                <p>Fiat Cronos</p>
                                <p>0km</p>
                                <p>Combustible Nafta</p>
                                <p>Transmision Automatica</p>
                        </div>
                    </div>
                
                </div>
                <div id="espacio"> </div>
                <section className="asesoriaExplicacion">

                    <div className="introduccionAsesoria">
                        <h1> ¿No sabes qué elegir?</h1>
                        <p> Nosotros te ayudamos a encontrar tu modelo ideal.</p>
                    </div>

                    <div className="tipsAsesoria">
                        <div className="tip">
                            <img src={autoIcono} alt=""/>
                                <h2> Definí tus necesidades y estilo de vida</h2>
                                <p>Considera cuántas personas viajarán en el vehículo regularmente, el tipo de conducción que harás, y si necesitas espacio para equipaje o actividades al aire libre.</p>
                        </div>

                        <div className="tip">
                            <img src={moneyIcon} alt=""/>
                                <h2> Establece tu presupuesto y opciones de financiamiento</h2>
                                <p>Conoce cuánto estás dispuesto a invertir, incluyendo el pago inicial, cuotas mensuales, y gastos como seguro y mantenimiento.</p>
                        </div>

                        <div className="tip">
                            <img src={securityIcon} alt=""/>
                                <h2>Investiga la seguridad y tecnología</h2>
                                <p>Asegúrate de que el vehículo que elijas cuente con las características de seguridad más recientes y revisa qué tecnologías ofrece en términos de conectividad.</p>
                        </div>

                    </div>
                </section>

                <div id="espacio"> </div>

                <section id="preguntas">
                    <PreguntasFrecuentes></PreguntasFrecuentes>
                </section>

                <div id="espacio"> </div>

                <div className="introduccionAsesoria">
                    <h1> Decidir entre un Usado o un 0Km</h1>
                    <p> Muchas veces sucede que no sabes la opcion mas conveniente. Pensa estas cosas para poder tomar una decision</p>
                </div>

                <div className="kmUsado">
                <div className="cont">
                    <img src={autoIcono} alt=""/>
                        <h2>Vehiculo 0km</h2>
                        <p>Razones para elegir un 0km:</p>
                        <ul>
                            <li>Tecnologia y eficiencia actualizadas</li>
                            <li>Garantia de fabrica</li>
                            <li>Historial limpio</li>
                            <li>Todas las características a tu gusto</li>
                        </ul>
                </div>

                <div className="cont">
                    <img src={autoIcono} alt=""/>
                        <h2>Vehiculo Usado</h2>
                        <p>Razones para elegir un usado:</p>
                        <ul>
                            <li>Precio mas bajo</li>
                            <li>Menor depreciacion</li>
                            <li>Menor costo de seguro</li>
                            <li>Variedad de características</li>
                        </ul>
                </div>

                </div>
                
                <div id="espacio"></div>

                <div className="fotoContactar">
                    <a href="contacto.html"><img src={contactanos} alt=""/></a>
                </div>
        </div >
    );

}
export default ASESORIA;