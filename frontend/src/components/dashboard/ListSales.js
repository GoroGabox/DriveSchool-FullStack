import ItemSale from "./ItemSale";

export default function ListSales({ sales, cursos, stds }) {

  return (
    <div className="p-8">
      <h3>Ventas</h3>
      <table className="min-w-full divide-y divide-gray-200">
        <thead>
          <tr>
            <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
              ID
            </th>
            <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
              Estudiante    
            </th>
            <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
              Curso    
            </th>
            <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
              Estado    
            </th>
          </tr>
        </thead>
        <tbody className=" divide-y divide-gray-200">
          {sales.map((sale, i) => (
            <ItemSale key={i} sale={sale} cursos={cursos} stds={stds}/>
          ))}
        </tbody>
      </table>
    </div>
  );
}
