import React from "react";
import catalog from "../../../constants/catalogDummy";
import Product from "./Product";

const Catalog = ({ products = catalog }) => {
  return (
    <div className="container mt-5">
      <div className="row">
        {products.map(product => (
          <Product key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Catalog;
