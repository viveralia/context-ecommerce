import React, { useContext } from "react";
import { CartContext } from "../../../context/CartContext";

const Product = ({ product }) => {
  // -----------------
  // Hooks
  // -----------------
  const { cart, setCart } = useContext(CartContext);

  // -----------------
  // Helpers
  // -----------------
  const { name, image, price } = product;

  // -----------------
  // Component View
  // -----------------
  return (
    <article className="col-6 col-md-4 col-lg-3">
      <img src={image} alt={name} className="img-fluid" />
      <div className="mt-3 mb-5">
        <h3 className="font-weight-normal h6 mb-1 text-muted">{name}</h3>
        <p className="h5 mb-1">${price}.00</p>
        <button
          className="btn btn-dark btn-block rounded-0 text-uppercase"
          style={{ letterSpacing: "0.125rem", fontSize: "0.85rem" }}
          onClick={() => setCart([...cart, product])}
        >
          <small>Add to cart</small>
        </button>
      </div>
    </article>
  );
};

export default Product;
