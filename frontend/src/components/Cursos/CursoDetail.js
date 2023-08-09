"use client";

import { useShoppingContext } from "../../hooks/useShoppingContext";

export default function CursoDetail({ curso }) {
  let { addToKart } = useShoppingContext();
  return (
    <div>
      <div className="">
        <div key={curso.id} className="group">
          <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
            <img
              src={curso.imageSrc}
              alt="imagen referencial"
              className="h-full w-full object-cover object-center group-hover:opacity-75"
            />
          </div>
          <h3 className="mt-4 text-sm text-gray-700">{curso.name}</h3>
          <p className="mt-1 text-lg font-medium text-gray-900">
            ${curso.price}
          </p>
          <h3 className="mt-4 text-sm text-gray-700">
            Cantidad de clases practicas
          </h3>
          <p className="mt-1 text-lg font-medium text-gray-900">
            {curso.cant_clases}
          </p>
          <h3 className="mt-4 text-sm text-gray-700">
            Acceso a clases teoricas
          </h3>
          <p className="mt-1 text-lg font-medium text-gray-900">
            {curso.theory_access ? "Si" : "No"}
          </p>
          <button
            onClick={() => addToKart(curso)}
            className="mt-5 rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Agregar al carro
          </button>
        </div>
      </div>
    </div>
  );
}
