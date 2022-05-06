import React from "react";
import { useNavigate } from "react-router-dom";

const Product = ({ product }) => {
  const navigate = useNavigate();
  const { name, img, quantity } = product;
  const handleNavigate = () => {
      navigate('/inventory');
  }
  return (
    <div className="col-12 col-lg-4 col-md-6">
      <div className='mb-4'>
        <h1>{name}</h1>
        <img src={img} alt="" />
        <h5>Quantity: {quantity}</h5>
      </div>

      <button onClick={handleNavigate} className="btn btn-outline-dark">Manage</button>
    </div>
  );
};

export default Product;
