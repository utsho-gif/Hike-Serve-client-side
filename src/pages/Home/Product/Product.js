import React from "react";
import { useNavigate } from "react-router-dom";

const Product = ({ product }) => {
  const navigate = useNavigate();
  const { name, img, quantity, _id, description, supplier, price} = product;
  const handleNavigate = (id) => {
      navigate(`/inventory/${id}`);
  }
  return (
    <div className="col-12 col-lg-4 col-md-6">
      <div className='mb-4 h-75'>
        <img className="w-50" src={img} alt="" />
        <div className="mt-4 text-start ms-5">
        <h4>{name}</h4>
        <h6>Description: {description.slice(0,50) + ' ...'} </h6>
        <h5>Price: {price}</h5>
        <h6>Quantity: {quantity}</h6>
        <h6>Supplier: {supplier}</h6>
        </div>
        
      </div>

      <button onClick={() => handleNavigate(_id)} className="btn btn-outline-secondary border-2 mt-5">Update</button>
    </div>
  );
};

export default Product;
