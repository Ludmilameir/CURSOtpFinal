import React, { useState, useEffect } from 'react';
import "./estilos/Carrousel.css"

import imagen1 from '../img/imagen 1.jpeg';
import imagen2 from '../img/imagen 2.jpeg';
import imagen3 from '../img/imagen 3.jpeg';


const Carrousel = () => {
    const [indice, setIndice] = useState(0);
    const imagenes = [imagen1, imagen2, imagen3];

    // const cambiarImagen = (n) => {
    //     setIndice((prevIndice) => {
    //         let nuevoIndice = prevIndice + n;
    //         if (nuevoIndice >= imagenes.length) {
    //             nuevoIndice = 0;
    //         } else if (nuevoIndice < 0) {
    //             nuevoIndice = imagenes.length - 1;
    //         }
    //         return nuevoIndice;
    //     });
    // };

    useEffect(() => {
        const intervalo = setInterval(() =>3000);
        return () => clearInterval(intervalo);
    }, []);

    return (
        <div className="carrusel">
            <div className="imagenes" style={{ transform: `translateX(-${indice * 100}%)` }}>
                {imagenes.map((src, index) => (
                    <img key={index} src={src} alt={`Imagen ${index + 1}`} />
                ))}
            </div>
            {/* <button id="botonSeleccionar" onClick={() => cambiarImagen(1)}>
                Cambiar imagen
            </button> */}
        </div>
    );
};

export default Carrousel;
