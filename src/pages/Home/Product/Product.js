import React from "react";
import { useNavigate } from "react-router-dom";

const Product = ({ product }) => {
  const navigate = useNavigate();
  const { name, img, quantity, _id } = product;
  const handleNavigate = (id) => {
      navigate(`/inventory/${id}`);
  }
  return (
    <div className="col-12 col-lg-4 col-md-6">
      <div className='mb-4'>
        <h1>{name}</h1>
        <img src={img} alt="" />
        <h5>Quantity: {quantity}</h5>
      </div>

      <button onClick={() => handleNavigate(_id)} className="btn btn-outline-secondary">Update</button>
    </div>
  );
};

export default Product;
