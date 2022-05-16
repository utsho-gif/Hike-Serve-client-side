import React from "react";
import useProduct from "../../hooks/useProduct";
import { AiOutlineDelete } from "react-icons/ai";
import "./ManageInv.css";
import { useNavigate } from "react-router-dom";

const ManageInv = () => {
  const [products, setProducts] = useProduct();
  const navigate = useNavigate();
  const handleDelete = (id) => {
    const proceed = window.confirm("Are you sure?");
    if (proceed) {
      const url = `http://localhost:5000/inventory/${id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          // console.log(data);
          const remaining = products.filter((product) => product._id !== id);
          setProducts(remaining);
        });
    }
  };
  const handleNavigate = () => {
    navigate("/addinventory");
  };
  const handleNav = (id) => {
    navigate(`/inventory/${id}`);
  };
  return (
    <div className="container my-5">
      {products.map((product) => (
        <div
          className="border border-3 border-warning m-3 p-3 rounded-3"
          key={product._id}
        >
          <div className="d-flex justify-content-around align-items-center ms-5">
            <div>
              <img className="w-50" src={product.img} alt="" />
            </div>
            <div className="text-start">
              <p>{product.name}</p>
              <p>Quantity: {product.quantity}</p>
              <p>Supplier: {product.supplier}</p>
            </div>
            <div>
              <div>
                <button
                  onClick={() => handleNav(product._id)}
                  className="btn btn-outline-secondary border-2 mt-5"
                >
                  Update
                </button>
              </div>

              <button
                className="btn-mod bg-danger rounded-pill"
                onClick={() => handleDelete(product._id)}
              >
                <AiOutlineDelete className="icon"></AiOutlineDelete>
              </button>
            </div>
          </div>
        </div>
      ))}
      <button
        className="btn btn-outline-success border-3 fw-bold"
        onClick={handleNavigate}
      >
        Add Item
      </button>
    </div>
  );
};

export default ManageInv;
