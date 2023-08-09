'use client'

import React, { useState } from 'react';
import moment from 'moment';
import 'moment/locale/es';

function CalendarioSemanalLaboral() {
  const [fechaActual, setFechaActual] = useState(moment());

  const diasLaborables = [];
  const diaActual = fechaActual.clone().startOf('week');

  // Filtrar solo los días de lunes a viernes
  for (let i = 0; i < 5; i++) {
    diasLaborables.push(diaActual.clone().add(i, 'days'));
  }

  return (
    <div>
      <h2>Calendario Semanal</h2>
      <button onClick={() => setFechaActual(fechaActual.clone().subtract(7, 'days'))}>Semana anterior</button>
      <button onClick={() => setFechaActual(fechaActual.clone().add(7, 'days'))}>Siguiente semana</button>
      <div className="dias-semana">
        {diasLaborables.map((dia, index) => (
          <div key={index} className="dia">
            <div className="nombre-dia">{dia.format('dddd')}</div>
            <div className="numero-dia">{dia.format('D')}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CalendarioSemanalLaboral;
