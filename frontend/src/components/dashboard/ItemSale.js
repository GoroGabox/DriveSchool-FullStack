import React from "react";

export default function ItemSale({ sale, cursos, stds }) {
  const curso = cursos.filter((item)=>item.id===sale.course)[0]
  const std = stds.filter((item)=>item.id===sale.student)[0]
  return (
    <tr>
      <td className="px-6 py-4 whitespace-no-wrap">{sale.id}</td>
      <td className="px-6 py-4 whitespace-no-wrap">{std.name} {std.lastname}</td>
      <td className="px-6 py-4 whitespace-no-wrap">{curso.name}</td>
      <td className="px-6 py-4 whitespace-no-wrap">{sale.state}</td>
    </tr>
  );
}
