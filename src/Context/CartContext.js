import React, { createContext, useEffect, useState } from "react";
import { json, useLocation } from "react-router-dom";

export const Context = createContext();

const AppContext = ({ children }) => {
  let cart = [];
  if (localStorage.getItem("cart")) {
    cart = JSON.parse(localStorage.getItem("cart"));
  }
  const [cartItems, setCartItems] = useState(cart);
  const [cartCount, setCartCount] = useState(0);
  const [cartSubTotal, setCartSubTotal] = useState(0);

  useEffect(() => {
    let count = 0;
    cartItems.map((item) => (count += item?.attributes?.quantity));
    setCartCount(count);
    let SubTotal = 0;
    cartItems.map(
      (item) => (SubTotal += item?.attributes?.quantity * item.attributes.price)
    );
    setCartSubTotal(SubTotal);
  }, [cartItems]);

  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
  const handleAddToCart = (product, quantity) => {
    console.log(product, quantity);
    let items = [...cartItems];
    let index = items?.findIndex((p) => p.id === product?.id);
    if (index !== -1) {
      items[index].attributes.quantity += quantity;
    } else {
      product.attributes.quantity = quantity;
      items = [...items, product];
    }
    localStorage.setItem("cart", JSON.stringify(items));
    setCartItems(items);
  };

  const handleRemoveFromCart = (product) => {
    let items = [...cartItems];
    items = items?.filter((p) => p.id !== product.id);
    setCartItems(items);
  };
  const handleCartProductQuantity = (type, product) => {
    let items = [...cartItems];
    let index = items?.findIndex((p) => p.id === product?.id);
    if (type === "inc") {
      items[index].attributes.quantity += 1;
    } else if (type === "dec") {
      if (items[index].attributes.quantity === 1) return;
      items[index].attributes.quantity -= 1;
    }
    setCartItems(items);
  };
  return (
    <Context.Provider
      value={{
        cartItems,
        setCartItems,
        cartCount,
        cartSubTotal,
        handleAddToCart,
        handleRemoveFromCart,
        handleCartProductQuantity,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default AppContext;
