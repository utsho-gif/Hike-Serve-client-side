import React from "react";
import useProduct from "../../hooks/useProduct";

const ManageInv = () => {
  const [products, setProducts] = useProduct();
  
  const handleDelete = id => {
    const proceed = window.confirm('Are you sure?');
    if(proceed){
      const url = `http://localhost:5000/inventory/${id}`
      fetch(url, {
        method: 'DELETE'
      })
      .then(res => res.json())
      .then(data => {
        // console.log(data);
        const remaining = products.filter(product => product._id !== id);
        setProducts(remaining)
      })
    }
  }
  return (
    <div className="container my-5">
      {products.map((product) => (
        <div
          className="border border-3 border-warning m-3 p-3 rounded-3"
          key={product._id}
        >
          <div className="d-flex justify-content-around align-items-center ms-5">
            <div>
              <img src={product.img} alt="" />
            </div>
            <div className="text-start">
              <p>{product.name}</p>
              <p>Quantity: {product.quantity}</p>
              <p>Supplier: </p>
            </div>
            <div>
                <button onClick={() => handleDelete(product._id)}>Delete</button>
            </div>
          </div>
          
          
          
        </div>
      ))}
    </div>
  );
};

export default ManageInv;
