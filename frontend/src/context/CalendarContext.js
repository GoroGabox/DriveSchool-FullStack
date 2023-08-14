"use client";

import { useState, useEffect, createContext } from "react";
import moment from "moment";
import "moment/locale/es";

const CalendarContext = createContext(null);
export default CalendarContext;

export const CalendarProvider = ({ children }) => {
  const [fechaActual, setFechaActual] = useState(moment());
  const [spotsSeleccionados, setSpotsSeleccionados] = useState([]);
  const [clases, setClases] = useState([]);
  const [selectedSlot, setSelectedSlot] = useState(null);
  const [profesor, setProfesor] = useState(null);

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

  const handleProfesor = (event) => {
    const profe = event.target.value;
    setProfesor(profe)
  };

  const handleHorarioClick = (dia, horario) => {
    const nuevoSpot = { dia, horario };
    const spotYaSeleccionado = spotsSeleccionados.find(
      (spot) => spot.dia === dia && spot.horario === horario
    );
    if (spotYaSeleccionado) {
      setSpotsSeleccionados(spotsSeleccionados.filter((spot) => spot !== spotYaSeleccionado));
      setClases(clases.filter(clase => !(clase.dia === dia && clase.horario === horario)));
    } else {
      setSpotsSeleccionados([...spotsSeleccionados, nuevoSpot]);
      setClases([...clases, { dia: dia, horario: horario }]);
    }
  };

  const handlePastWeek = () => {
    setFechaActual(fechaActual.clone().subtract(7, "days"));
  };

  const handleNextWeek = () => {
    setFechaActual(fechaActual.clone().add(7, "days"));
  };

  const handleEraseClases = () => {
    setClases([])
  }

  const handleHorarioColorChange = (dia, horario) => {
    setSelectedSlot({ dia, horario });
  };

  const registerClasses = () => {
    console.log(profesor)
    console.log(clases)
  }

  let contextValue = {
    spotsSeleccionados: spotsSeleccionados,
    selectedSlot: selectedSlot,
    clases: clases,
    horarios: horarios,
    mesActual: mesActual,
    diasDeLaSemana: diasDeLaSemana,
    handleHorarioClick: handleHorarioClick,
    handlePastWeek: handlePastWeek,
    handleNextWeek: handleNextWeek,
    handleHorarioColorChange: handleHorarioColorChange,
    handleEraseClases : handleEraseClases,
    registerClasses: registerClasses,
    handleProfesor : handleProfesor,
  };

  return (
    <CalendarContext.Provider value={contextValue}>
      {children}
    </CalendarContext.Provider>
  );
};
