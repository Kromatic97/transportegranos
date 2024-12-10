// /src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Home from './pages/Home';
import TransportDetail from './pages/TransportDetail';
import Contact from './pages/Contact'; // Importa la página de Contacto
import Header from './components/Header';
import Footer from './components/Footer';
import Transport from './pages/Transport';

const App = () => {
  return (
    <Router>
      <Header />
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/transporte" element={<TransportDetail />} />
        <Route path="/contacto" element={<Contact />} /> {/* Ruta de la página de Contacto */}
        <Route path="/transport" element={<Transport />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;





