import React, { Fragment, useState, useEffect } from 'react';
import uuid4 from 'uuid4';

import Formulario from './Formulario.jsx';
import Lista      from './Lista.jsx';
/*localtorage!!!    */
const STORAGE_KEY = 'dueños';

const RegistroDeMascotas = () => {
  const [listaDuenios, setListaDuenios] = useState([]);

/*UseEffecttt */
  useEffect(() => {
    const guardados = JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
    setListaDuenios(guardados);
  }, []);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(listaDuenios));
  }, [listaDuenios]);

  const manejarGuardado = ({ nombreMascota, tipoMascota, nombreDuenio, telefono }) => {
    const idx = listaDuenios.findIndex(d => d.nombreDuenio === nombreDuenio && d.telefono === telefono);

    if (idx !== -1) {
      const copia = [...listaDuenios];
      copia[idx].mascotas.push({ id: uuid4(), nombreMascota, tipoMascota });
      setListaDuenios(copia);
    } else {
      setListaDuenios([
        ...listaDuenios,
        {
          id: uuid4(),
          nombreDuenio,
          telefono,
          mascotas: [{ id: uuid4(), nombreMascota, tipoMascota }]
        }
      ]);
    }
  };

  return (
    <Fragment>
      <h1 className="text-center font-bold text-3xl my-5">🐈 Registro de Mascotas 🐕</h1>
      <Formulario onSave={manejarGuardado} />
      <Lista listaDuenios={listaDuenios} />
    </Fragment>
  );
};

export default RegistroDeMascotas;
