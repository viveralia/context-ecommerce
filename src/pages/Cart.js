import React, { useContext } from "react";
import Catalog from "../components/Home/Catalog/Catalog";
import { CartContext } from "../context/CartContext";

const Cart = () => {
  const { cart } = useContext(CartContext);

  return (
    <>
      <Catalog products={cart} />
    </>
  );
};

export default Cart;
