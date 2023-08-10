"use client";

import { useState } from "react";
import moment from "moment";
import "moment/locale/es";
import ListPractices from "./ListPractices";
import Selector from './Selector'

function CalendarioSemanal({professors}) {
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
  return (
    <div className="p-4">
      <h2 className="text-2xl font-semibold mb-4">Calendario Semanal</h2>
      <h2 className="text-2xl font-semibold mb-4">{mesActual}</h2>
      
      <div className="flex space-x-4 mb-4">
        <Selector array={professors}/>
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded"
          onClick={() =>
            setFechaActual(fechaActual.clone().subtract(7, "days"))
          }
        >
          Semana anterior
        </button>
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded"
          onClick={() => setFechaActual(fechaActual.clone().add(7, "days"))}
        >
          Siguiente semana
        </button>
        <button
          className="bg-red-500 text-white px-4 py-2 rounded"
          onClick={() => setClases([])}
        >
          Borrar clases
        </button>
      </div>
      <div className="flex">
        <div className="flex w-full">
          <div className="grid grid-cols-1">
            <div className="bg-cyan-600 text-white text-center py-2">Horario</div>
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
                    <div
                      key={i}
                      className="py-1 cursor-pointer border border-collapse"
                      onClick={() => handleHorarioClick(dia.clone(), horario)}
                    >Disponible
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="w-1/3">
          <ListPractices clases={clases} />
        </div>
      </div>
    </div>
  );
}

export default CalendarioSemanal;
