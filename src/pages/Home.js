import React from 'react';
import './Home.css'; // Para el estilo de la página
import { Link } from 'react-router-dom'; // Importar Link de React Router

const Home = () => {
  return (
    <div className="home-container">
      <h1 className="home-title">¡Bienvenido a TranspoGran!</h1>
      <p className="home-description">
        La plataforma ideal para gestionar el transporte eficiente de granos. Encuentra opciones confiables y rápidas para tus necesidades.
      </p>

      <div className="home-content">
      <img
            src={require ('../assets/wolfgang-hasselmann-nbRgZltoOck-unsplash.jpg')}

            alt="Transporte de granos"
            className="home-image"
        />
         <Link to="/transport" className="transport-button">Ver Transportes Disponibles</Link>
      </div>
    </div>
  );
};

export default Home;




