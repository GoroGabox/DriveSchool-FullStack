import useCalendarContext from "../../hooks/useCalendarContext";

export default function ItemPractice({ item, i }) {
  const horas = item.horario.split("-");
  return (
    <div className="grid grid-cols-3 pl-2">
      <div className="">{i}</div>
      <div className="">{item.dia}</div>
      <div className="">{horas[0]}</div>
    </div>
  );
}
