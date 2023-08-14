"use client";

import Selector from "./Selector";
import useCalendarContext from "../../hooks/useCalendarContext";
import CalendarSpot from "./CalendarSpot";

function CalendarioSemanal({ professors }) {
  let {
    horarios,
    mesActual,
    diasDeLaSemana,
    handlePastWeek,
    handleNextWeek,
    spotsSeleccionados,
    handleEraseClases,
  } = useCalendarContext();

  return (
    <div className="p-4 w-full">
      <h2 className="text-2xl font-semibold mb-4">Calendario Semanal</h2>
      <h2 className="text-2xl font-semibold mb-4">{mesActual}</h2>

      <div className="flex space-x-4 mb-4">
        <Selector array={professors} />
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded"
          onClick={() => handlePastWeek()}
        >
          Semana anterior
        </button>
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded"
          onClick={() => handleNextWeek()}
        >
          Siguiente semana
        </button>
        <button
          className="bg-red-500 text-white px-4 py-2 rounded"
          onClick={() => handleEraseClases()}
        >
          Borrar clases
        </button>
      </div>
      <div className="grid">
        <div className="flex w-full">
          <div className="grid grid-cols-1">
            <div className="bg-cyan-600 text-white text-center py-2">
              Horario
            </div>
            {horarios.map((horario, i) => (
              <div key={i} className="p-1 border">
                {horario}
              </div>
            ))}
          </div>
          <div className="grid grid-cols-7">
            {diasDeLaSemana.map((dia, index) => (
              <div key={index} className="">
                <div className="flex bg-cyan-600 text-white text-center px-4 py-2">
                  <div className="mr-2">{dia.format("ddd").toUpperCase()}</div>
                  <div>{dia.format("D")}</div>
                </div>
                <div className="">
                  {horarios.map((horario, i) => (
                    <CalendarSpot
                      key={i}
                      horario={horario}
                      dia={dia.format("DD/MM")}
                      spotsSeleccionados={spotsSeleccionados} 
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default CalendarioSemanal;
