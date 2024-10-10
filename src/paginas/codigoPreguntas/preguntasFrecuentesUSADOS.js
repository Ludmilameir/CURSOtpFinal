import React from 'react';
import "../estilos/preguntasfrecuentes.css";

const PreguntasFrecuentesUSADOS = () => {
    const preguntas = [
        {
            pregunta: "¿Qué documentos necesito para comprar un auto usado?",
            respuesta: "Para comprar un auto usado, es necesario contar con el DNI, la cédula verde del vehículo y el título de propiedad. Estos documentos son fundamentales para poder realizar la transferencia de dominio y asegurar que el vehículo está legalmente en condiciones de ser vendido."
        },
        {
            pregunta: "¿Qué es la verificación policial y es necesaria?",
            respuesta: "La verificación policial es un trámite que se realiza para asegurar que el auto no tiene denuncias por robo o problemas legales asociados. Es un requisito obligatorio para la transferencia de dominio y ayuda a proteger al comprador de posibles inconvenientes legales en el futuro."
        },
        {
            pregunta: "¿Qué garantía ofrecen las concesionarias para autos usados?",
            respuesta: "Las concesionarias pueden ofrecer diferentes tipos de garantía para autos usados, que varían según la política de cada empresa. Algunas pueden brindar garantías de un año o más en ciertos componentes del vehículo, lo que proporciona tranquilidad al comprador respecto a posibles fallas mecánicas."
        },
        {
            pregunta: "¿Cómo se realiza la transferencia de un vehículo usado?",
            respuesta: "La transferencia de un vehículo usado es el proceso legal mediante el cual el vehículo pasa a ser propiedad del comprador. En una concesionaria, este trámite generalmente lo realiza la misma empresa, garantizando que todo se lleve a cabo de acuerdo con las leyes y regulaciones vigentes. Esto incluye la firma de ambas partes y la presentación de los documentos requeridos."
        },
        {
            pregunta: "¿Qué mantenimiento necesito considerar al comprar un auto usado?",
            respuesta: "Al comprar un auto usado, es crucial revisar el historial de mantenimiento del vehículo. Esto incluye verificar los cambios de aceite, los reemplazos de filtros y el estado de los neumáticos. Considerar estos aspectos asegura que el vehículo esté en buenas condiciones y evitará gastos imprevistos en el futuro."
        },
        {
            pregunta: "¿Qué cubre el informe de dominio de un auto usado?",
            respuesta: "El informe de dominio de un auto usado es un documento que muestra el historial legal del vehículo. Esto incluye información sobre propietarios anteriores, posibles deudas, embargos y cualquier otro impedimento legal que pueda afectar la compra. Es fundamental para garantizar que el vehículo esté libre de problemas legales."
        },
        {
            pregunta: "¿Los autos usados tienen que pasar una verificación técnica?",
            respuesta: "Sí, todos los autos usados deben contar con la VTV (Verificación Técnica Vehicular) al momento de la venta. Esta verificación asegura que el vehículo cumple con las normas de seguridad y emisiones establecidas, y es un requisito indispensable para poder circular legalmente."
        },
        {
            pregunta: "¿Qué opciones de seguros existen para autos usados?",
            respuesta: "Existen diversas opciones de seguros para autos usados, que incluyen seguros a terceros, seguros a todo riesgo y seguros combinados. Es importante elegir el tipo de seguro que mejor se adapte a tus necesidades y presupuesto, teniendo en cuenta factores como la frecuencia de uso del vehículo y su valor."
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

export default PreguntasFrecuentesUSADOS;
