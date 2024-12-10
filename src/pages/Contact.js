// /src/pages/Contact.js
import React, { useState } from 'react';
import './Contact.css'; // Importa el archivo CSS para estilos

const Contact = () => {
  // Estado para manejar los datos del formulario
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  // Maneja el cambio de los campos del formulario
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Maneja el envío del formulario
  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Formulario enviado con éxito');
    // Aquí puedes manejar la lógica de envío del formulario, como una API o correo electrónico
  };

  return (
    <div className="contact-container">
      <h1>Contáctanos</h1>
      <form onSubmit={handleSubmit} className="contact-form">
        <div className="form-group">
          <label htmlFor="name">Nombre</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Correo Electrónico</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="message">Mensaje</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className="submit-btn">
          Enviar
        </button>
      </form>
    </div>
  );
};

export default Contact;

