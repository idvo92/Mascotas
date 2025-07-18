import React, { Fragment } from 'react';
import TarjetaMascota from './TarjetaMascota.jsx';

const Lista = ({listaDuenios}) => (
  <Fragment>
    <h2 className="h5 mt-4 text-center"> Mascotas Registradas </h2>

    {listaDuenios.length === 0 ? (
      <p className="text-muted">No existen registros aun, esperando ingresos...</p>) : (
      listaDuenios.map(dueño => (
        <div key={dueño.id} className="mb-5">
          <div className="fw-bold mb-3">
            {dueño.nombreDuenio} — {dueño.telefono}
          </div>
          <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
            {dueño.mascotas.map(mascota => (
              <div key={mascota.id} className="col">
                <TarjetaMascota
                  mascota={mascota}
                  nombreDuenio={dueño.nombreDuenio}
                  telefono={dueño.telefono}
                />
              </div>
            ))}
          </div>
        </div>
      ))
    )}
  </Fragment>
);

export default Lista;