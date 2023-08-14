'use client'
import useCalendarContext from "../../hooks/useCalendarContext";
import ItemPractice from "./ItemPractice";

export default function ListPractices() {
  let { clases, registerClasses } = useCalendarContext();
  return (
    <div className="p-6 max-h-[690px] overflow-y-auto">
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
      <div className="bg-blue-500 text-white px-4 py-2 rounded">
        <button onClick={()=>{registerClasses()}}>Registrar clases</button>
      </div>
    </div>
  );
}
