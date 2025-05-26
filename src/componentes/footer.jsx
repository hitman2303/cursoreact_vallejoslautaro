import React from 'react';
import logo from '../assets/logo.png'; 
import {Link} from 'react-router-dom';
const Footer = () => {
  return (
<footer className="footer d-flex justify-content-between align-items-center flex-wrap px-4 py-3">
  <div className="footer-column">
    <h4>Secciones</h4>
    <ul>
      <li><a as={Link} to="/home">Inicio</a></li>
      <li><a as={Link} to="/Descuentos">Descuentos</a></li>
      <li><a as={Link} to="/catalogo">Catalogo</a></li>
    </ul>
  </div>

  <div className="footer-column text-center">
    <img src={logo} alt="Logo" className="footer-logo" />
  </div>

  <div className="footer-column text-end text-md-end w-100 w-md-auto mt-3 mt-md-0">
    <p className="mb-0">© Derechos reservados 2025</p>
  </div>
</footer>
  );
};

export default Footer;
