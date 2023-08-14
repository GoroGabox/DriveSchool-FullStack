import React from "react";
import useCalendarContext from "../../hooks/useCalendarContext";

export default function CalendarSpot({ dia, horario, spotsSeleccionados }) {
    let { handleHorarioClick } = useCalendarContext();
    const isSelected = spotsSeleccionados?.some(
      spot => spot.dia === dia && spot.horario === horario
    );
  
    return (
      <div
        className={`py-1 cursor-pointer border border-collapse ${
          isSelected ? 'bg-green-300' : ''
        }`}
        onClick={() => {
          handleHorarioClick(dia, horario);
        }}
      >
        Disponible
      </div>
    );
  }
  
