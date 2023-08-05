"use client";

import { createContext, useState, useEffect } from "react";

const ShoppingContext = createContext(null);
export default ShoppingContext;

export const ShoppingProvider = ({ children }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Aquí puedes realizar cualquier lógica para recuperar los productos guardados en el almacenamiento local
    // y actualizar el estado del carrito al cargar la página.
    // Por ejemplo:
    const savedProducts = JSON.parse(localStorage.getItem('cart')) || [];
    setProducts(savedProducts);
  }, []);

  useEffect(() => {
    // Aquí guardamos los productos en el almacenamiento local cada vez que cambie la lista de productos.
    localStorage.setItem('cart', JSON.stringify(products));
  }, [products]);

  let addToKart = (product) => {
    setProducts([...products, product]);
  };
  let removeFromKart = (id) => {
    const updatedProducts = products.filter((product) => product.id !== id);
    setProducts(updatedProducts);
  };

  let contextData = {
    products: products,
    addToKart: addToKart,
    removeFromKart: removeFromKart,
  };

  return (
    <ShoppingContext.Provider value={contextData}>
      {children}
    </ShoppingContext.Provider>
  );
};
