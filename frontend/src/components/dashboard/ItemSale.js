import React from "react";

export default function ItemSale({ sale }) {
  return (
    <tr>
      <td className="px-6 py-4 whitespace-no-wrap">{sale.id}</td>
      <td className="px-6 py-4 whitespace-no-wrap">{sale.student}</td>
      <td className="px-6 py-4 whitespace-no-wrap">{sale.course}</td>
      <td className="px-6 py-4 whitespace-no-wrap">{sale.state}</td>
    </tr>
  );
}
