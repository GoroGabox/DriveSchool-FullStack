// pages/pricing.js
import Link from 'next/link';
import React from 'react';

const Product = ({ name, price, href }) => {
  return (
    <div className="w-full sm:w-full p-4">
      <div className="border p-4 rounded-lg shadow-md">
        <h3 className="text-xl font-semibold mb-2">{name}</h3>
        <p className="text-gray-600 mb-4">${price}</p>
        <Link href={href} className="bg-blue-500 text-white px-4 py-2 rounded-md">
          Ver info
        </Link>
      </div>
    </div>
  );
};

const Pricing = () => {
  const products = [
    { id: 1, name: 'Plan Completo', price: 140000, href:'/cursos/1' },
    { id: 2, name: 'Plan Express', price: 120000, href:'/cursos/2' },
    { id: 3, name: 'Plan Perfeccionamiento', price: 90000, href:'/cursos/3' },
  ];

  return (
    <div className="container mx-auto p-10">
      <h2 className="text-5xl font-semibold mb-8">Obtener tu licencia nunca <br/>habia sido tan facil</h2>
      <div className="grid md:grid-cols-3 gap-6 grid-cols-1">
        {products.map((product) => (
          <Product key={product.id} name={product.name} price={product.price} href={product.href}/>
        ))}
      </div>
      <div className="mt-6">
        <Link href='/cursos' className=" text-blue-500 px-4 py-2">
          Ver todos los cursos <span aria-hidden="true">→</span>
        </Link>
      </div>
    </div>
  );
};

export default Pricing;
