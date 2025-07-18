import React from 'react';

const TarjetaMascota = ({mascota, nombreDuenio, telefono}) => {
  const {nombreMascota, tipoMascota} = mascota;

  const icono = /*para los iconos de cada tarjeta */
    tipoMascota === 'perro'
      ? '🐶'
      : tipoMascota === 'gato'
      ? '🐱'
      : '🐾';

  return (
    <div className="card h-100">
      <div className="card-body text-center">
        <div className="display-1 mb-2">{icono}</div>
        <h5 className="card-title">{nombreMascota}</h5>
        <p className="card-text text-capitalize">{tipoMascota}</p>
        <hr />
        <p className="mb-1">
          <strong>Dueño:</strong> {nombreDuenio}
        </p>
        <p>
          <strong>Celular:</strong> {telefono}
        </p>
      </div>
    </div>
  );
};

export default TarjetaMascota;
