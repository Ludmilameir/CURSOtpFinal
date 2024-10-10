import React, { useState } from "react";
import "../paginas/estilos/contacto.css";
import persona from "../img/hombreContacto.jpg";

function CONTACTO() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Aquí puedes manejar el envío del formulario
    console.log(formData); // Solo como ejemplo, puedes quitarlo después
  };

  return (
    <div className="contacto">

      <div id="ContenedorDER2">
        <img src={persona} alt="Persona de contacto" />
      </div>
      
      <div id="ContenedorIZQ2">
        <h2>Contactame.</h2>
        <p>Nosotros nos comunicaremos contigo cuanto antes posible. ¡Deja tu contacto aquí para conectarnos!</p>
        <form onSubmit={handleSubmit}>
          <input 
            type="text" 
            name="name" 
            placeholder="Nombre completo" 
            required 
            value={formData.name} 
            onChange={handleChange} 
          />
          <input 
            type="email" 
            name="email" 
            placeholder="E-mail" 
            required 
            value={formData.email} 
            onChange={handleChange} 
          />
          <input 
            type="tel" 
            name="phone" 
            placeholder="Número de teléfono" 
            required 
            value={formData.phone} 
            onChange={handleChange} 
          />
          <textarea 
            name="message" 
            placeholder="Mensaje" 
            required 
            value={formData.message} 
            onChange={handleChange} 
          ></textarea>
          <label><input type="button" className="botones" value="ENVIAR" ></input></label>
          </form>
      </div>

    </div>
  );
}

export default CONTACTO;


