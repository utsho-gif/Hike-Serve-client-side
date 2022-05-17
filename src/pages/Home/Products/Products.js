import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useProduct from "../../../hooks/useProduct";
import Product from "../Product/Product";

const Products = () => {
  const [products, setProducts, loading] = useProduct();
  return (
    <div className="container my-5">
      <h3>Products</h3>
      <div className="d-flex justify-content-center align-items-center">
        <div
          style={{
            height: "4px",
            borderRadius: "5px",
            backgroundColor: "#F7CD2E",
          }}
          className="w-25"
        ></div>
      </div>
      <div className="row my-3 g-5">
        {products.slice(0, 6).map((product) => (
          <Product key={product._id} product={product}></Product>
        ))}
        <Link to="/manageinventory">
          <button className="btn btn-outline-dark mb-3 border-2" type="button">
            Manage Inventories
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Products;
