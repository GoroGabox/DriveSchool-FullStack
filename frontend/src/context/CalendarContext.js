"use client";

import { useState, useEffect, createContext } from "react";
import moment from "moment";
import "moment/locale/es";

const CalendarContext = createContext(null);
export default CalendarContext;

export const CalendarProvider = ({ children }) => {
  const [fechaActual, setFechaActual] = useState(moment());
  const [fechaSeleccionada, setFechaSeleccionada] = useState(null);
  const [horaSeleccionada, setHoraSeleccionada] = useState(null);
  const [clases, setClases] = useState([]);

  const diasDeLaSemana = [];
  const diaActual = fechaActual.clone().startOf("week");
  const mesActual = fechaActual.format("MMMM").toUpperCase();

  for (let i = 0; i < 7; i++) {
    diasDeLaSemana.push(diaActual.clone().add(i, "days"));
  }

  const horarios = [
    "08:00-08:45",
    "09:00-09:45",
    "10:00-10:45",
    "11:00-11:45",
    "12:00-12:45",
    "13:00-13:45",
    "16:00-16:45",
    "17:00-17:45",
    "18:00-18:45",
    "19:00-19:45",
    "20:00-20:45",
  ];

  const handleHorarioClick = (fecha, hora) => {
    setFechaSeleccionada(fecha);
    setHoraSeleccionada(hora);
    setClases([...clases, { fecha: fecha, hora: hora }]);
  };
  const contextValue = {
    
  };

  return (
    <CalendarContext.Provider value={contextValue}>
      {children}
    </CalendarContext.Provider>
  );
};
