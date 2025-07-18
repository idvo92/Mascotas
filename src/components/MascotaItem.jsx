import React from 'react';

const MascotaItem = ({mascota}) => {
  const {nombreMascota, tipoMascota} = mascota;

  return (
    <li className="list-group-item d-flex justify-content-between align-items-center">
      <span>
        <strong>{nombreMascota}</strong> ({tipoMascota})
      </span>
    </li>
  );
};

export default MascotaItem;
