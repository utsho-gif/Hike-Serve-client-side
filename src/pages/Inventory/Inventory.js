import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './Inventory.css';

const Inventory = () => {
    const {id} = useParams();
    const [service, setService] = useState({});
    const {_id,name,img,description,price,quantity,supplier,sold} = service;

    useEffect(() => {
        const url = `http://localhost:5000/inventory/${id}`;
        fetch(url)
        .then(res => res.json())
        .then(data => setService(data))
    },[id])
    return (
        <div className='container'>
            <h3 className='mt-5'>Update the product</h3>
            <div className="d-flex justify-content-center align-items-center">
        <div style={{ height: "6px", borderRadius: "5px", backgroundColor: "#36D7B7" }} className="w-50"></div>
      </div>
            <div className='d-flex justify-content- p-4 my-5' style={{border: "2px solid #36D7B7"}}>
                <div>
                    <img src={img} alt="" />
                </div>
                <div className='ms-5'>
                <div className='text-start'>
                    <h4>{name}</h4>
                    <h6>Product Id: {_id}</h6>
                    <h6>Quantity: {quantity}</h6>
                    <h6>Supplier: </h6>
                </div>
                </div>
                
            </div>
        </div>
    );
};

export default Inventory;