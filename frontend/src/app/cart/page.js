"use client";

import { useShoppingContext } from "../../hooks/useShoppingContext";
import CursosList from "../../components/Cursos/CursosList";

export default function Sells() {
  let { removeFromKart, products } = useShoppingContext();
  return (
    <main className="flex min-h-screen w-full flex-col items-center justify-evenly px-8">
      <div>
        {products.map((product) => {
          return (
            <div key={product.id}>
              <div className="" >
                {product.name}
              </div>
              <div className="" >
                {product.price}
              </div>
              <button
                onClick={() => removeFromKart(product.id)}
                className="mt-5 rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Eliminar del carro
              </button>
            </div>
          );
        })}
      </div>
    </main>
  );
}
