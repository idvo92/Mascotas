import React from 'react';
import ReactDOM from 'react-dom/client';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

import RegistroDeMascotas from './components/RegistroDeMascotas.jsx';

ReactDOM
.createRoot(document.getElementById('root'))
.render(
<React.StrictMode>
    <RegistroDeMascotas />
</React.StrictMode>
);
