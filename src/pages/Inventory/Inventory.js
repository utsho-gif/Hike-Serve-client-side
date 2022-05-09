import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./Inventory.css";

const Inventory = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const [item, setItem] = useState({});
  const { _id, name, img, description, price, quantity, supplier, sold } =
    product;

    const url = `https://aqueous-taiga-75883.herokuapp.com/inventory/${id}`;
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
    const url = `https://aqueous-taiga-75883.herokuapp.com/inventory/${id}`;
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
  const handleRestoke = event => {
      const upQuantity = parseInt(event.target.restoke.value);
      const {quantity, ...rest} = item;
      const newQuantity = parseInt(quantity) + upQuantity;
      const newValue = {quantity: `${newQuantity}`, ...rest};
      setItem(newValue);
      const url = `https://aqueous-taiga-75883.herokuapp.com/inventory/${id}`;
      fetch(url, {
          method: 'PUT',
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify({newValue})
      })
      .then(res => res.json())
      .then(data => setItem(data))
  }
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
      <div className="my-5 p-2" style={{ border: "2px solid #36D7B7", borderRadius: "10px" }}>
      <div
        className="d-flex justify-content-center px-0 my-5"
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
            Delivery
          </button>
        </div>
      </div>
          <form onSubmit={handleRestoke}>
            <input className="d-block mx-auto re-mod ps-5" type="text" name="restoke" placeholder="Restoke Quantity"/>
            <input className="mt-2 btn btn-outline-success" type="submit" value="Restoke" />
          </form>
      </div>
    </div>
  );
};

export default Inventory;
