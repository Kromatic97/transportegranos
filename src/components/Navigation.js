// /src/components/Navigation.js
import React from 'react';
import { Link } from 'react-router-dom';


const Navigation = () => {
  return (
    <nav className="navbar">
      <ul className="nav-links">
        <li><Link to="/">Inicio</Link></li>
        <li><Link to="/transport">Transportes</Link></li>
        <li><Link to="/contacto">Contacto</Link></li> {/* Enlace a la página de Contacto */}
      </ul>
    </nav>
  );
};

export default Navigation;


