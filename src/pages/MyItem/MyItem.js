import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { AiOutlineDelete } from "react-icons/ai";
import axiosPrivate from '../../api/axiosPrivate/axiosPrivate';

const MyItem = () => {
    const [item, setItem] = useState([]);
    const [user] = useAuthState(auth);

    useEffect(() => {
        
        const getItem = async() => {
            const email = user?.email;
            const url = `http://localhost:5000/myitem?email=${email}`;
            const {data} = await axiosPrivate.get(url);
            setItem(data);
        }
        getItem();

    },[user])

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
            const remaining = item.filter(i => i._id !== id);
            setItem(remaining)
          })
        }
      }
    return (
        <div className="container my-5">
      {item.map((i) => (
        <div
          className="border border-3 border-warning m-3 p-3 rounded-3"
          key={i._id}
        >
          <div className="d-flex justify-content-around align-items-center ms-5">
            <div>
              <img className='w-50' src={i.img} alt="" />
            </div>
            <div className="text-start">
              <p>{i.name}</p>
              <p>Quantity: {i.quantity}</p>
              <p>Supplier: {i.supplier}</p>
            </div>
            <div>
                <button className="btn-mod bg-danger rounded-pill" onClick={() => handleDelete(i._id)}><AiOutlineDelete className='icon'></AiOutlineDelete></button>
            </div>
          </div>
          
          
          
        </div>
      ))}
    </div>
    );
};

export default MyItem;