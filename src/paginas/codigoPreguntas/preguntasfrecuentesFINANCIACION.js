import React from 'react';
import "../estilos/preguntasfrecuentes.css";

const PreguntasFrecuentesFINANCIACION = () => {
    const preguntas = [
        {
            pregunta: "¿Qué requisitos necesito para solicitar un plan de financiación?",
            respuesta: "Para solicitar un plan de financiación, generalmente necesitas presentar tu DNI, comprobante de ingresos, y en algunos casos, un recibo de servicios. Esto asegura que la concesionaria pueda evaluar tu capacidad de pago y ofrecerte un plan adecuado."
        },
        {
            pregunta: "¿Cuáles son las tasas de interés aplicables en los planes de financiación?",
            respuesta: "Las tasas de interés pueden variar según la concesionaria y el tipo de plan elegido. Es importante consultar la tabla de tasas que ofrece la concesionaria, ya que estas pueden estar sujetas a cambios y pueden incluir promociones especiales."
        },
        {
            pregunta: "¿Qué tipo de seguros son necesarios para financiar un vehículo?",
            respuesta: "La mayoría de las concesionarias exigen la contratación de un seguro a todo riesgo como condición para aprobar la financiación. Esto protege tanto al comprador como a la concesionaria en caso de accidentes o robos, garantizando así la seguridad de la inversión."
        },
        {
            pregunta: "¿Puedo financiar un auto usado?",
            respuesta: "Sí, muchas concesionarias ofrecen planes de financiación para autos usados. Sin embargo, las condiciones y requisitos pueden diferir de los aplicados a los vehículos nuevos. Es recomendable informarse sobre las opciones específicas para autos de segunda mano."
        },
        {
            pregunta: "¿Qué es el cuota 0 y cómo funciona?",
            respuesta: "El plan de cuota 0 es una modalidad de financiación que permite adquirir un vehículo sin pagar cuotas iniciales. El pago se realiza al finalizar un período determinado, lo que puede facilitar la compra. Sin embargo, es importante leer las condiciones y restricciones antes de optar por este plan."
        },
        {
            pregunta: "¿Qué pasa si no puedo cumplir con los pagos del plan de financiación?",
            respuesta: "En caso de no poder cumplir con los pagos, es fundamental comunicarse con la concesionaria lo antes posible. Existen opciones para reestructurar la deuda o renegociar los términos del contrato, pero es esencial actuar con rapidez para evitar complicaciones mayores."
        },
        {
            pregunta: "¿Es posible cancelar el plan de financiación antes de tiempo?",
            respuesta: "Sí, en general puedes cancelar el plan de financiación anticipadamente, aunque puede haber penalizaciones o cargos adicionales. Es recomendable revisar las condiciones del contrato y consultar a la concesionaria para entender el proceso y las posibles consecuencias."
        },
        {
            pregunta: "¿Qué documentación se necesita para formalizar un contrato de financiación?",
            respuesta: "Para formalizar un contrato de financiación, deberás presentar tu DNI, comprobantes de ingresos y, en algunos casos, referencias personales o laborales. Esta documentación permite a la concesionaria verificar tu identidad y evaluar tu situación financiera."
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

export default PreguntasFrecuentesFINANCIACION;
