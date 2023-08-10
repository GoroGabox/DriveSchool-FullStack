"use client";

import { createContext, useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuthContext } from "../hooks/useAuthContext";

const ShoppingContext = createContext(null);
export default ShoppingContext;

export const ShoppingProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [total, setTotal] = useState(0);
  const router = useRouter();
  let { user, authTokens } = useAuthContext();

  useEffect(() => {
    const savedProducts = JSON.parse(localStorage.getItem("cart")) || [];
    setProducts(savedProducts);
  }, []);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(products));
    updateTotal();
  }, [products]);

  const updateTotal = () => {
    const newTotal = products.reduce((acc, product) => {
      return acc + product.quantity * product.price;
    }, 0);
    setTotal(newTotal);
  };

  const addToKart = (product) => {
    const productExist = products.find((item) => item.id === product.id);
    if (!productExist) {
      const newProduct = {
        id: product.id,
        name: product.name,
        price: product.price,
        quantity: 1,
      };
      setProducts([...products, newProduct]);
    }
    router.push("/cart");
  };

  const removeFromKart = (id) => {
    const updatedProducts = products.filter((product) => product.id !== id);
    setProducts(updatedProducts);
  };

  const increaseQuantity = (id) => {
    const updatedProducts = products.map((product) => {
      if (product.id === id) {
        return {
          ...product,
          quantity: product.quantity + 1,
        };
      }
      return product;
    });
    setProducts(updatedProducts);
  };

  const decreaseQuantity = (id) => {
    const updatedProducts = products.map((product) => {
      if (product.id === id) {
        return {
          ...product,
          quantity: Math.max(product.quantity - 1, 1),
        };
      }
      return product;
    });
    setProducts(updatedProducts);
  };

  const pay = async () => {
    if (user) {
      for (const product of products) {
        await registerSale(product, user);
      }
      setProducts([]);
      return      
    }
    router.push("/register")
  };

  const registerSale = async (product, user) => {
    try {
      const saleData = {
        student: user.user_id,
        course: product.id,
        date: new Date().toISOString().slice(0, 10),
        price_paid: product.price * product.quantity,
        pay_system: "online",
        state: "paid",
      };
      console.log(JSON.stringify(saleData));

      const response = await fetch("http://127.0.0.1:8000/api/v1/courses/sales/",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${authTokens.access}`,
          },
          body: JSON.stringify(saleData),
        }
      );

      if (response.ok) {
        router.push("/dashboard/student");
      } else {
        alert("Something went wrong!");
      }
    } catch (error) {
      console.error("Error registering sale:", error);
    }
  };

  let contextData = {
    products: products,
    total: total,
    addToKart: addToKart,
    removeFromKart: removeFromKart,
    increaseQuantity: increaseQuantity,
    decreaseQuantity: decreaseQuantity,
    pay: pay,
  };

  return (
    <ShoppingContext.Provider value={contextData}>
      {children}
    </ShoppingContext.Provider>
  );
};
