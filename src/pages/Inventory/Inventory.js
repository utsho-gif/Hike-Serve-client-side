import React, { useState, useEffect, useRef } from "react";
import { Link, useParams } from "react-router-dom";
import useProduct from "../../hooks/useProduct";
import "./Inventory.css";

const Inventory = () => {
  const { id } = useParams();
  const stockRef = useRef("");
  const [product, setProduct] = useState({});
  const [isReload, setReload] = useState(false);
  const [error, setError] = useState("");
  const { _id, name, img, description, price, quantity, supplier, sold } =
    product;

  useEffect(() => {
    const url = `http://localhost:5000/inventory/${id}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, [isReload]);

  const url = `http://localhost:5000/inventory/${id}`;
  const handleUpdateQ = (quantity) => {
    const delivery = parseInt(quantity);
    const newDelivery = delivery - 1;

    // console.log(newDelivery);

    //send to server
    fetch(url, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ quantity: newDelivery }),
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        setReload(!isReload);
      });
  };

  const handleSub = (event) => {
    event.preventDefault();
    event.target.reset();
  };

  const handleRestock = (quantity) => {
    const stock = parseInt(stockRef.current.value);
    // console.log(typeof stock);
    if (typeof stock === "number") {
      const newStock = stock;
      const restock = quantity + newStock;

      //send to server
      fetch(url, {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({ quantity: restock }),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          setReload(!isReload);
        });
    } else {
      setError("Please input a valid number");
    }
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
        className="my-4 p-4 width-mod mx-auto"
        style={{ border: "2px solid #36D7B7", borderRadius: "10px" }}
      >
        <div className="d-flex justify-content-center px-0 my-5 mx-auto">
          <div className="ms-5">
            <div className="text-start">
              <img src={img} alt="" />
              <div className="my-4">
                <h4>{name}</h4>
                <h6>Product Id: {_id}</h6>
                <h6>Quantity: {quantity}</h6>
                <h6>Supplier: </h6>
              </div>
              <div>
                <button
                  className="btn btn-outline-danger btn-mod"
                  onClick={() => handleUpdateQ(quantity)}
                >
                  Delivery
                </button>
              </div>
            </div>
          </div>
          <div></div>
        </div>
        <form onSubmit={handleSub}>
          <input
            className="d-block mx-auto re-mod ps-3"
            type="text"
            name="restock"
            placeholder="&#x21E2; Restock Quantity"
            ref={stockRef}
            pattern="[0-9]*"
            autoComplete="off"
          />
          {error} <br />
          <button
            className="btn btn-outline-success mt-3 border-3"
            onClick={() => handleRestock(quantity)}
          >
            Restock
          </button>
        </form>
      </div>
      <Link to="/manageinventory">
     <button className="btn btn-outline-dark mb-3 border-2 rounded-pill" type="button">
          Manage Inventories
     </button>
 </Link>
    </div>
  );
};

export default Inventory;
