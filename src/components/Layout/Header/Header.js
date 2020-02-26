import React, { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../../context/CartContext";

const Header = () => {
  // -----------------
  // Hooks
  // -----------------
  const [scrolling, setScrolling] = useState(false);
  useEffect(() => {
    makeWhiteOnScroll();
  }, []);
  const { cart } = useContext(CartContext);

  // -----------------
  // Helpers
  // -----------------
  const makeWhiteOnScroll = () => {
    window.addEventListener("scroll", () => {
      setScrolling(window.scrollY > 0 ? true : false);
    });
  };

  // -----------------
  // Component View
  // -----------------
  return (
    <header
      id="header"
      className={`container-fluid fixed-top w-100 pt-1 pb-1 ${
        scrolling ? "bg-white border-bottom" : "bg-transparent text-white"
      }`}
      style={{ transition: "all .25s ease" }}
    >
      <nav className="d-flex justify-content-between align-items-baseline pt-2 pb-2">
        <Link
          to="/"
          className="text-decoration-none"
          style={{ color: "inherit" }}
        >
          <h1 className="h6 mb-0">Sneakers Online</h1>
        </Link>
        <Link
          to="/cart"
          className="text-decoration-none"
          style={{ color: "inherit" }}
        >
          Cart ({cart.length})
        </Link>
      </nav>
    </header>
  );
};

export default Header;
