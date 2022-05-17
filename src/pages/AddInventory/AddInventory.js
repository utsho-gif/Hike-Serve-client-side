import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { toast, ToastContainer } from "react-toastify";
import auth from "../../firebase.init";

const AddInventory = () => {
  const [user] = useAuthState(auth);
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    const url = `https://aqueous-taiga-75883.herokuapp.com/item`;
    fetch(url, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        toast.success("Added successfully!");
      });
    reset();
  };
  return (
    <div className="container">
      <h3 className="mt-5">Add a new item</h3>
      <div className="d-flex justify-content-center align-items-center">
        <div
          style={{
            height: "6px",
            borderRadius: "5px",
            backgroundColor: "#36D7B7",
          }}
          className="w-25"
        ></div>
      </div>
      <form
        className="d-flex flex-column w-50 mx-auto my-5"
        onSubmit={handleSubmit(onSubmit)}
      >
        <input
          className="mb-3 p-1"
          type="email"
          name="email"
          placeholder="Your Email"
          {...register("email", { required: true })}
        />
        <input
          className="mb-3 p-1"
          type="text"
          placeholder="Product name"
          {...register("name", { required: true, maxLength: 50 })}
        />
        <input
          className="mb-3 p-1"
          type="number"
          placeholder="Quantity"
          {...register("quantity", { required: true, maxLength: 20 })}
        />
        <input
          className="mb-3 p-1"
          type="number"
          placeholder="Price"
          {...register("price", { required: true, maxLength: 20 })}
        />
        <input
          className="mb-3 p-1"
          type="text"
          placeholder="Supplier"
          {...register("supplier", { required: true, maxLength: 20 })}
        />
        <input
          className="mb-2"
          placeholder="Photo URL"
          type="text"
          {...register("img")}
        />
        <textarea
          className="mb-2 p-1"
          placeholder="Description"
          {...register("description")}
        />
        <input
          className="w-25 mx-auto btn btn-outline-success border-2 mt-2"
          type="submit"
          value="Add Item"
        />
      </form>
      <ToastContainer></ToastContainer>
    </div>
  );
};

export default AddInventory;
