import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import useProduct from "../../hooks/useProduct";
import "./Inventory.css";

const Inventory = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  // const [products, isReload, setReload] = useProduct();
  const [isReload, setReload] = useState(false);
  const { _id, name, img, description, price, quantity, supplier, sold } =
    product;

  useEffect(() => {
    const url = `http://localhost:5000/inventory/${id}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, [isReload]);

  const handleUpdateQ = (quantity) => {
    const delivery = parseInt(quantity);
    const newDelivery = delivery - 1;

    // console.log(newDelivery);

    //send to the server
    const url = `http://localhost:5000/inventory/${id}`;
    fetch(url, {
      method: 'PUT',
      headers: {
        'content-type' : 'application/json',
      },
      body: JSON.stringify({quantity: newDelivery})
    })
    .then(res => res.json())
    .then(data => {
      // console.log(data);
      // setProduct(data);
      setReload(!isReload); 
      // {isReload}
    })


  };
  const handleRestoke = (event) => {};
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
        className="my-5 p-2"
        style={{ border: "2px solid #36D7B7", borderRadius: "10px" }}
      >
        <div className="d-flex justify-content-center px-0 my-5">
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
              onClick={() => handleUpdateQ(quantity)}
            >
              Delivery
            </button>
          </div>
        </div>
        <form onSubmit={handleRestoke}>
          <input
            className="d-block mx-auto re-mod ps-5"
            type="text"
            name="restoke"
            placeholder="Restoke Quantity"
          />
          <input
            className="mt-2 btn btn-outline-success"
            type="submit"
            value="Restoke"
          />
        </form>
      </div>
    </div>
  );
};

export default Inventory;
