import React from 'react';
import "../estilos/preguntasfrecuentes.css";

const PreguntasFrecuentesOKM = () => {
    const preguntas = [
        {
            pregunta: "¿Qué documentos necesito para comprar un auto 0KM?",
            respuesta: "Para adquirir un auto 0KM, deberás presentar tu DNI, una constancia de CUIT o CUIL, y un comprobante de ingresos. Estos documentos son esenciales para que la concesionaria pueda verificar tu identidad y tu capacidad de pago, asegurando que cumples con los requisitos necesarios para la compra."
        },
        {
            pregunta: "¿Qué garantías ofrecen los autos 0KM?",
            respuesta: "Las garantías de los autos 0KM varían según el fabricante, pero generalmente oscilan entre 3 y 5 años, o un límite de kilometraje. Esta garantía cubre defectos de fabricación y te protege en caso de que aparezcan problemas en el vehículo dentro de ese período, brindándote tranquilidad como comprador."
        },
        {
            pregunta: "¿Puedo financiar un auto 0KM?",
            respuesta: "Sí, muchas concesionarias ofrecen planes de financiación para la compra de autos 0KM. Esto puede incluir financiamiento directo a través de la concesionaria o mediante bancos asociados. Estas opciones permiten que puedas adquirir el vehículo sin necesidad de desembolsar el monto total de forma inmediata."
        },
        {
            pregunta: "¿Qué incluye el precio de un auto 0KM?",
            respuesta: "El precio de un auto 0KM generalmente incluye el vehículo en sí, la garantía de fábrica y, en algunos casos, servicios adicionales como mantenimiento inicial o accesorios. Es importante revisar el contrato de compra para asegurarte de que todos los elementos estén claros y de que no haya costos ocultos."
        },
        {
            pregunta: "¿Puedo hacer un test drive antes de comprar?",
            respuesta: "Sí, la mayoría de las concesionarias permite a los clientes realizar pruebas de manejo antes de comprar un auto 0KM. Esto es fundamental, ya que te permite evaluar cómo se siente el vehículo en la carretera y asegurarte de que es el adecuado para tus necesidades y preferencias."
        },
        {
            pregunta: "¿Qué tipo de seguros necesito para un auto 0KM?",
            respuesta: "Se recomienda contratar un seguro a todo riesgo, que cubra daños al vehículo y a terceros, así como un seguro de responsabilidad civil. Este tipo de cobertura es fundamental para proteger tu inversión y garantizar que estés cubierto en caso de accidentes o imprevistos."
        },
        {
            pregunta: "¿Hay incentivos para comprar autos ecológicos?",
            respuesta: "Sí, algunas provincias en Argentina ofrecen subsidios y beneficios fiscales para la compra de autos ecológicos, como vehículos eléctricos o híbridos. Estos incentivos buscan fomentar la movilidad sostenible y pueden incluir descuentos en impuestos y tasas, lo que representa un ahorro significativo para los compradores."
        },
        {
            pregunta: "¿Qué debo hacer si hay un defecto en el auto nuevo?",
            respuesta: "Si encuentras un defecto en tu auto nuevo, debes contactar a la concesionaria donde lo adquiriste y hacer uso de la garantía. Es importante documentar el problema y seguir los procedimientos establecidos por la concesionaria para asegurarte de que se resuelva adecuadamente y en el menor tiempo posible."
        },
    ];

    const handleToggle = (e) => {
        const respuesta = e.currentTarget.querySelector(".respuesta");
        respuesta.classList.toggle("show");
        const otros = document.querySelectorAll(".respuesta");
        otros.forEach((res) => {
            if (res !== respuesta) {
                res.classList.remove("show");
            }
        });
    };

    return (
        <section id="preguntas">
            <h2 className="title">Preguntas frecuentes</h2>
            {preguntas.map((item, index) => (
                <div className="contenedor" key={index} onClick={handleToggle}>
                    <div className="pregunta">
                        <h3>{item.pregunta}</h3>
                        <svg width="15" height="10" viewBox="0 0 42 25">
                            <path d="M3 3L21 21L39 3" strokeWidth="7" strokeLinecap="round" />
                        </svg>
                    </div>
                    <div className="respuesta">
                        <p>{item.respuesta}</p>
                    </div>
                </div>
            ))}
        </section>
    );
};

export default PreguntasFrecuentesOKM;
