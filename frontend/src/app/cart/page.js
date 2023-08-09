"use client";

import { useShoppingContext } from "../../hooks/useShoppingContext";

export default function Sells() {
  let {
    removeFromKart,
    products,
    increaseQuantity,
    decreaseQuantity,
    total,
    pay,
  } = useShoppingContext();

  return (
    <main className="flex min-h-screen w-full items-center justify-evenly px-8">
      <div className="w-1/2">
        {products.map((product) => {
          return (
            <div key={product.id} className="w-full border-solid border-b pb-2">
              <div className="text-xl">{product.name}</div>
              <div className="flex justify-between items-center">
                <div className="">$ {product.price}</div>
                <div className="">cant x{product.quantity}</div>
                <div className="flex flex-col">
                  <button
                    onClick={() => increaseQuantity(product.id)}
                    className="rounded-md w-10 text-xl text-white bg-blue-700 hover:bg-indigo-500"
                  >
                    +
                  </button>
                  <button
                    onClick={() => decreaseQuantity(product.id)}
                    className="rounded-md w-10 text-xl text-white bg-blue-700 hover:bg-indigo-500"
                  >
                    -
                  </button>
                </div>
                <button
                  onClick={() => removeFromKart(product.id)}
                  className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Eliminar
                </button>
              </div>
            </div>
          );
        })}
      </div>
      <div className="w-1/3">
        <div className="flex flex-col rounded-md border-solid border-2 border-indigo-600 px-4 p-6">
          <div className=" text-gray-500">Subtotal : </div>
          <div className="text-gray-500">
            {products.map((product) => {
              return (
                <div
                  key={product.id}
                  className="w-full border-solid border-b pb-2"
                >
                  <div className="">$ {product.price * product.quantity}</div>
                  <br />
                </div>
              );
            })}
          </div>
          <div className=" text-gray-500">Total : </div>
          <div className="text-gray-500">$ {total}</div>
          <br />
          <button
            onClick={pay}
            className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Pagar
          </button>
        </div>
      </div>
    </main>
  );
}
