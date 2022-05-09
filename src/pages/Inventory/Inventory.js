import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./Inventory.css";

const Inventory = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const [item, setItem] = useState({});
  const { _id, name, img, description, price, quantity, supplier, sold } =
    product;

  const url = `http://localhost:5000/inventory/${id}`;
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, [url]);
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setItem(data));
  }, [url, setItem]);
  const handleUpdateQ = () => {
    const { quantity, ...rest } = item;
    const newQuantity = JSON.stringify(quantity - 1);
    const newValue = { quantity: `${newQuantity}`, ...rest };
    setItem(newValue);
    //send to server
    // const url = `http://localhost:5000/inventory/${id}`;
    fetch(url, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ newValue }),
    })
      .then((res) => res.json())
      .then((data) => setItem(data));
    window.location.reload();
  };
  return (
    <div className="container">
      <h3 className="mt-5">Update the product</h3>
      <div className="d-flex justify-content-center align-items-center">
        <div
          style={{
            height: "6px",
            borderRadius: "5px",
            backgroundColor: "#36D7B7",
          }}
          className="w-50"
        ></div>
      </div>
      <div
        className="d-flex justify-content-center py-4 px-0 my-5"
        style={{ border: "2px solid #36D7B7", borderRadius: "10px" }}
      >
        <div>
          <img src={img} alt="" />
        </div>
        <div className="ms-5">
          <div className="text-start">
            <h4>{name}</h4>
            <h6>Product Id: {_id}</h6>
            <h6>Quantity: {quantity}</h6>
            <h6>Supplier: </h6>
          </div>
        </div>
        <div>
          <button
            className="btn btn-outline-danger btn-mod ms-3 mt-4"
            onClick={handleUpdateQ}
          >
            Update
          </button>
        </div>
      </div>
    </div>
  );
};

export default Inventory;
