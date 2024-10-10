import React from 'react';
import "../estilos/preguntasfrecuentes.css";

const PreguntasFrecuentesEMPRESAS = () => {
    const preguntas = [
        {
            pregunta: "¿Pueden las empresas deducir impuestos al comprar un auto?",
            respuesta: "Sí, las empresas tienen la posibilidad de deducir ciertos impuestos relacionados con la adquisición de vehículos. Esto incluye no solo el IVA en la compra, sino también los gastos vinculados al mantenimiento y operación del vehículo. Esta deducción se realiza en el marco de las normativas fiscales que rigen para las actividades comerciales."
        },
        {
            pregunta: "¿Qué tipo de vehículos pueden ser adquiridos por una empresa?",
            respuesta: "Las empresas pueden adquirir una amplia variedad de vehículos, siempre y cuando estén destinados a actividades comerciales. Esto incluye autos, camionetas, furgones y vehículos especializados. Es fundamental que el uso del vehículo esté claramente relacionado con la actividad económica de la empresa para poder justificar la deducción de impuestos."
        },
        {
            pregunta: "¿Qué documentos necesito para comprar un auto a nombre de la empresa?",
            respuesta: "Para realizar la compra de un vehículo a nombre de una empresa, es necesario presentar ciertos documentos clave. Esto incluye la escritura de constitución de la empresa, el número de CUIT, y el documento de identificación del representante legal que actúa en nombre de la empresa. Estos documentos aseguran que la transacción se realice de manera legal y formal."
        },
        {
            pregunta: "¿Existen beneficios fiscales para vehículos eléctricos?",
            respuesta: "Sí, en muchas provincias de Argentina se han implementado incentivos fiscales para fomentar el uso de vehículos eléctricos. Estos beneficios pueden incluir exenciones de impuestos, subsidios a la compra, y reducciones en el costo de la patente. Estos estímulos buscan promover la movilidad sostenible y reducir la huella de carbono de las empresas."
        },
        {
            pregunta: "¿Puedo financiar un auto a nombre de la empresa?",
            respuesta: "Sí, las entidades financieras ofrecen diversas opciones de financiación para empresas que desean adquirir vehículos. Esto incluye préstamos, leasing y otras modalidades que permiten a las empresas financiar la compra sin comprometer su flujo de caja. Es recomendable comparar las condiciones de diferentes entidades para encontrar la opción más favorable."
        },
        {
            pregunta: "¿Qué tipo de seguros son recomendables para autos de empresas?",
            respuesta: "Para proteger adecuadamente los vehículos de una empresa, se recomienda optar por un seguro a todo riesgo, que cubra daños propios y a terceros, así como un seguro de responsabilidad civil. Estos seguros son fundamentales para mitigar los riesgos asociados con la operación de vehículos en el ámbito empresarial, asegurando así la continuidad de las actividades comerciales."
        },
        {
            pregunta: "¿Qué obligaciones tengo como empresa al comprar un vehículo?",
            respuesta: "Al adquirir un vehículo, la empresa tiene varias obligaciones que debe cumplir. Esto incluye registrar el vehículo a su nombre en la oficina de registros automotor, así como asegurarse de cumplir con las normativas fiscales correspondientes, como la declaración de impuestos. Estas obligaciones son esenciales para mantener la legalidad de la operación y evitar sanciones."
        },
        {
            pregunta: "¿Qué costos adicionales debo considerar al comprar un auto para la empresa?",
            respuesta: "Al comprar un auto para la empresa, es crucial considerar varios costos adicionales más allá del precio de compra. Estos pueden incluir impuestos de transferencia, costos de seguros, mantenimiento regular, combustible y gastos operativos asociados. Evaluar estos costos permitirá a la empresa planificar mejor su presupuesto y garantizar una gestión financiera adecuada."
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

export default PreguntasFrecuentesEMPRESAS;

