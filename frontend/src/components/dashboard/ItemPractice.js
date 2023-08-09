import React from "react";

export default function ItemPractice({item, i}) {
  const horas = item.hora.split('-')
  return (
    <div className="grid grid-cols-3 pl-2">
      <div className="">{i}</div>
      <div className="">{item.fecha.format("DD/MM")}</div>
      <div className="">{horas[0]}</div>
    </div>
  );
}
