import React from 'react';
import "../estilos/preguntasfrecuentes.css";

const preguntasfrecuentesASESORIA = () => {
    const preguntas = [
        {
            pregunta: "¿Qué documentos necesito para comprar un vehiculo?",
            respuesta: "Necesitas tu DNI, constancia de CUIT o CUIL, y comprobante de domicilio. Si el auto es usado, también necesitarás el CETA (para vehículos de más de $2.400.000 ARS) y el formulario 08."
        },
        {
            pregunta: "¿Qué ventajas ofrece comprar un vehículo en una concesionaria frente a un particular?",
            respuesta: "Comprar en una concesionaria ofrece mayor seguridad, ya que se verifica el estado del vehículo, se garantiza la legalidad de la documentación, y se ofrece una garantía mínima para el comprador, cumpliendo con la Ley de Defensa del Consumidor."
        },
        {
            pregunta: "¿Qué protección tiene el comprador ante problemas con el vehículo?",
            respuesta: "Según la Ley de Defensa del Consumidor, todo vehículo adquirido en una concesionaria debe contar con una garantía mínima, lo que protege al comprador ante fallas de fabricación o vicios ocultos que aparezcan en el vehículo dentro del período de garantía."
        },
        {
            pregunta: "¿Qué implica la reserva de un vehículo en una concesionaria?",
            respuesta: "La reserva implica un compromiso inicial para la compra del vehículo, a cambio del pago de un adelanto. Esto asegura que el vehículo no será vendido a otro comprador. Es importante leer y entender los términos de la reserva antes de firmar."
        },
        {
            pregunta: "¿Cuál es la importancia de revisar el historial del vehículo antes de comprar?",
            respuesta: "Es fundamental revisar el historial para asegurarse de que no haya deudas de patente, infracciones, o impedimentos legales que puedan afectar el registro del vehículo. Las concesionarias suelen encargarse de verificar estos aspectos para garantizar una compra segura."
        },
        {
            pregunta: "¿Qué es la transferencia del dominio del vehículo y quién se encarga de realizarla?",
            respuesta: "La transferencia de dominio es el proceso legal mediante el cual el vehículo pasa a ser propiedad del comprador. En una concesionaria, este trámite generalmente lo realiza la misma empresa, garantizando que todo se lleve a cabo de acuerdo con las leyes y regulaciones vigentes."
        },
        {
            pregunta: "¿Cuáles son los gastos adicionales a considerar al comprar un auto?",
            respuesta: "Además del precio del vehículo, se deben considerar costos adicionales como los gastos de transferencia, patentamiento, seguros, y eventualmente gastos de gestoría. Las concesionarias suelen informar sobre estos costos de manera transparente."
        },
        {
            pregunta: "¿¿Qué beneficios puedo obtener al comprar un auto con un plan de ahorro?V",
            respuesta: "Un plan de ahorro permite pagar el vehículo en cuotas sin interés o con intereses reducidos, lo cual puede ser conveniente para quienes desean planificar la compra a mediano o largo plazo. Sin embargo, el proceso de adjudicación puede depender de sorteos o licitaciones."
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

export default preguntasfrecuentesASESORIA;