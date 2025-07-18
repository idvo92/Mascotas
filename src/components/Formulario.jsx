import React, { Fragment, useRef } from 'react';

const Formulario = ({ onSave }) => {
  const refNombrePet  = useRef();
  const refTipoPet    = useRef();
  const refNombreDue  = useRef();
  const refTelefono   = useRef();

  const handleSubmit = () => {
    const nombreMascota = refNombrePet.current.value.trim();
    const tipoMascota   = refTipoPet.current.value;
    const nombreDuenio  = refNombreDue.current.value.trim();
    const telefono      = refTelefono.current.value.trim();

    if (!nombreMascota || !tipoMascota || !nombreDuenio || !telefono) {alert('Todos los campos son obligatorios');
      return;
    }
    if (!/^\+569\d{8}$/.test(telefono)) {alert('Teléfono celular inválido. Debe tener formato +56912345678'); /*numero chilno necesario */
      return;
    }

    onSave({nombreMascota, tipoMascota, nombreDuenio, telefono});

    refNombrePet.current.value = '';
    refTipoPet.current.value   = '';
    refNombreDue.current.value = '';
    refTelefono.current.value  = '';
  };

  return (
    <Fragment>
      <h2 className="h5 mt-5">Ingrese datos para registrar su mascota</h2>
      <div className="row g-2">
        <div className="col-md-6">
          <input type= "text" className= "form-control" placeholder= "Nombre de la mascota*" ref= {refNombrePet}/>
        </div>
        <div className="col-md-6">
          <select className="form-select" ref= {refTipoPet} defaultValue="">
            <option value="">— Tipo de mascota —</option>
            <option value="perro">Perro</option>
            <option value="gato">Gato</option>
            <option value="otro">Otro</option>
          </select>
        </div>
      </div>
      <div className="row g-2 mt-2">
        <div className="col-md-6">
          <input type="text" className="form-control" placeholder= "Nombre del dueño*" ref= {refNombreDue}/>
        </div>
        <div className="col-md-6">
          <input type= "tel" className="form-control" placeholder= "Teléfono celular* (+56912345678)" ref= {refTelefono}/>
        </div>
      </div>
      <div className="mt-5">
        <button className="btn btn-primary block mx-auto font-bold py-2 px-4 rounded hover:bg-green-200" onClick={handleSubmit}>
          Registre su mascota
        </button>
      </div>
    </Fragment>
  );
};

export default Formulario;
