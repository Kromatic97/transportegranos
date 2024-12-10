import React from 'react';

import './Transport.css';
import camion1 from '../assets/images/camion1.jpg';
import camion2 from '../assets/images/camion2.jpg';
import camion3 from '../assets/images/camion3.jpg';

const Transport = () => {
  // Aquí añadimos todos los campos que mencionaste
  const transportList = [
    {
      id: 1,
      image: camion1,
      departure: 'Asunción',
      destination: 'Buenos Aires',
      departureTime: new Date('2024-12-15T08:00:00'),
      arrivalTime: new Date('2024-12-15T20:00:00'),
      price: '1.50 USD/km',
      cargoType: 'Granos de soja',
      departureDate: new Date('2024-12-15'),
    },
    {
      id: 2,
      image: camion2,
      departure: 'Santa Fe',
      destination: 'Asunción',
      departureTime: new Date('2024-12-16T09:00:00'),
      arrivalTime: new Date('2024-12-16T21:00:00'),
      price: '1.20 USD/km',
      cargoType: 'Maíz',
      departureDate: new Date('2024-12-16'),
    },
    {
      id: 3,
      image: camion3,
      departure: 'Rosario',
      destination: 'Santa Fe',
      departureTime: new Date('2024-12-17T07:00:00'),
      arrivalTime: new Date('2024-12-17T19:00:00'),
      price: '1.75 USD/km',
      cargoType: 'Trigo',
      departureDate: new Date('2024-12-17'),
    },
  ];

  const formatDate = (date) => {
    return date.toLocaleDateString('es-AR'); // dd/mm/yyyy
  };

  const formatTime = (date) => {
    return date.toLocaleTimeString('es-AR', { hour: '2-digit', minute: '2-digit', hour12: true }); // hh:mm AM/PM
  };

  return (
    <div className="transport-container">
      <h1 className="transport-title">Opciones de Transporte</h1>
      <div className="transport-list">
        {transportList.map((transport) => (
          <div key={transport.id} className="transport-item">
            <img src={transport.image} alt={`Camión de ${transport.departure} a ${transport.destination}`} className="transport-image" />
            <h3>{transport.departure} - {transport.destination}</h3>
            <p><strong>Fecha de salida:</strong> {formatDate(transport.departureDate)}</p>
            <p><strong>Horario de salida:</strong> {formatTime(transport.departureTime)}</p>
            <p><strong>Horario de llegada:</strong> {formatTime(transport.arrivalTime)}</p>
            <p><strong>Precio:</strong> {transport.price}</p>
            <p><strong>Tipo de carga:</strong> {transport.cargoType}</p>
            {/* Cambiar el botón para usar Link */}
           
          </div>
        ))}
      </div>
    </div>
  );
};

export default Transport;





