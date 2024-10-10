import React from 'react';
import "../estilos/preguntasfrecuentes.css"
const PreguntasFrecuentesINICIO = () => {
    const preguntas = [
        {
            pregunta: "¿Qué documentos necesito para adquirir un auto 0KM?",
            respuesta: "Para adquirir un auto 0KM, deberás presentar tu DNI, una constancia de CUIT o CUIL, y un comprobante de ingresos. Estos documentos son esenciales para que la concesionaria pueda verificar tu identidad y tu capacidad de pago, asegurando que cumples con los requisitos necesarios para la compra."
        },
        {
            pregunta: "¿Ofrecen financiación para la compra de vehículos?",
            respuesta: "Sí, ofrecemos opciones de financiación a través de entidades bancarias y planes propios. Las condiciones varían según el modelo y la forma de pago elegida."
        },
        {
            pregunta: "¿Puedo entregar mi auto usado como parte de pago?",
            respuesta: "Sí, aceptamos vehículos usados como parte de pago. Realizaremos una tasación para determinar su valor en la compra de un auto nuevo."
        },
        {
            pregunta: "¿Qué garantía tienen los autos que compramos?",
            respuesta: "Los autos 0KM vienen con garantía de fábrica, que generalmente cubre un período de 2 a 3 años. Asegúrate de consultar los detalles específicos según el modelo."
        },
        {
            pregunta: "¿Qué incluye el servicio postventa?",
            respuesta: "El servicio postventa incluye mantenimiento, reparaciones y asistencia técnica. También ofrecemos paquetes de mantenimiento que puedes adquirir al momento de la compra."
        },
        {
            pregunta: "¿Cómo puedo reservar un vehículo?",
            respuesta: "Puedes reservar un vehículo mediante un anticipo. Consulta con nuestro equipo comercial las condiciones específicas y los métodos de pago aceptados."
        },
        {
            pregunta: "¿Ofrecen seguros para los vehículos que venden?",
            respuesta: "Sí, trabajamos con diferentes compañías de seguros y podemos ofrecerte opciones que se adapten a tus necesidades y presupuesto al momento de la compra."
        },
        {
            pregunta: "¿Es posible realizar una prueba de manejo?",
            respuesta: "Sí, ofrecemos pruebas de manejo para que puedas experimentar el vehículo antes de tomar una decisión. Consulta con nuestro personal para coordinar una cita."
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

export default PreguntasFrecuentesINICIO;
