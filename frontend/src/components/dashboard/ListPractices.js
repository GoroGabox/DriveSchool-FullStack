import React from "react";
import ItemPractice from "./ItemPractice";

export default function ListPractices({ clases }) {
  return (
    <div className="p-6 w-full max-h-[66vh] overflow-y-auto">
      <h2 className="text-xl font-semibold mb-4">Lista de clases prácticas</h2>
      <div className="grid grid-cols-3 text-sm font-medium">
        <div className="border p-2">N°</div>
        <div className="border p-2">Fecha</div>
        <div className="border p-2">Hora</div>
      </div>
      {clases.map((item, index) => (
        <div key={index} className="border-t py-2">
          <ItemPractice item={item} i={index + 1} />
        </div>
      ))}
    </div>
  );
}

