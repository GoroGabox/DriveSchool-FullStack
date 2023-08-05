import React from 'react';

const Footer = () => {
    return (
      <div className="bg-gray-800 py-16">
        <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-white text-lg">
          <div className="fo">
            <div className="font-bold text-xl mb-4">Contáctanos</div>
            <ul>
              <li>
                <div className="contactos-card">
                  <strong className="contactos-card-title">Sucursal Concepcion</strong>
                  <div className="contactos-card-adress flex items-center">
                    <div className="contactos-card-icon">*</div>
                    <p>La Concepcion #519, Quillota</p>
                  </div>
                  <p className="contactos-card-tel">Tel: +569 57100118</p>
                </div>
              </li>
              <li>
                <div className="contactos-card">
                  <strong className="contactos-card-title">Sucursal Los canelos</strong>
                  <div className="contactos-card-adress flex items-center">
                    <div className="contactos-card-icon">*</div>
                    <p>Labrador #1176, Quillota</p>
                  </div>
                  <p className="contactos-card-tel">Tel: +569 53477030</p>
                </div>
              </li>
            </ul>
          </div>
          <div className="fo">
            <div className="font-bold text-xl mb-4">Cursos</div>
            <ul>
              <li><a href="#">Clase A</a></li>
              <li><a href="#">Clase B</a></li>
              <li><a href="#">Clase C</a></li>
              <li><a href="#">Clase D</a></li>
            </ul>
          </div>
          <div className="fo">
            <ul>
              <li><a href="somos.html">Somos</a></li>
              <li><a href="ofertaTrabajo.html">Trabaja con nosotros</a></li>
              <li><a href="https://www.mtt.gob.cl/">Ministerio de Transporte</a></li>
              <li><a href="https://www.conaset.cl/">Conaset</a></li>
              <li><a href="https://www.educacionvial.cl/">Educacion Vial</a></li>
            </ul>
          </div>
          <div className="fo">
            <div className="font-bold text-xl mb-4">Siguenos</div>
            <ul>
              <li><a href="https://www.facebook.com/Escuela-de-Conductores-Al-Volante-924237930959635">Facebook</a></li>
              <li><a href="https://www.instagram.com/esc.alvolante/">Instagram</a></li>
            </ul>
          </div>
        </div>
      </div>
    );
};
  
export default Footer;
  