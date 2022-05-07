import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from "../../../firebase.init";
import {MdOutlineAppRegistration} from "react-icons/md";
import { css } from "@emotion/react";
import { HashLoader } from "react-spinners";


const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;

const SignUp = () => {
  let [color, setColor] = useState("#36D7B7");
  const navigate = useNavigate();
  const [
    createUserWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useCreateUserWithEmailAndPassword(auth);

  let loadingEle;
  if(loading){
    loadingEle = (
      <p>
        <HashLoader color={color} css={override} size={50}></HashLoader>
      </p>
    )
  }

  let errorEle;
  if(error){
    errorEle = (
      <p className="text-warning text-bold">
        {error?.message}
      </p>
    )
  }

  const [updateProfile, updating, updateError] = useUpdateProfile(auth);
  const handleSignup = async event => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    const displayName = event.target.name.value;
    await createUserWithEmailAndPassword(email, password);
    await updateProfile({displayName});
  }
  if(user){
    navigate('/home');
  }
    return (
        <div className='container'>
             <div className="container w-50 mb-4">
      <h2 className="text-secondary text-center my-5">Sign Up <MdOutlineAppRegistration></MdOutlineAppRegistration></h2>
      <Form onSubmit={handleSignup}>
        <Form.Group className="mb-5 d-flex justify-content-center" controlId="formBasicEmail">
          <Form.Control name="name" type="text" placeholder="Name &#x26F9;" />
        </Form.Group>

        <Form.Group className="mb-5" controlId="formBasicEmail">
          <Form.Control
            name="email"
            type="email"
            placeholder="Email &#x2709;"
            required
          />
        </Form.Group>

        <Form.Group className="mb-5" controlId="formBasicPassword">
          <Form.Control
            name="password"
            type="password"
            placeholder="Password &#128477;"
            required
          />
        </Form.Group>

        <Form.Group className="mb-5" controlId="formBasicPassword">
          <Form.Control
            name="ConfPassword"
            type="password"
            placeholder="Confirm Password &#x1F510;"
            required
          />
        </Form.Group>
        {error ? errorEle : loadingEle}
        <Button
          className="w-50 mx-auto d-block rounded-pill mb-1"
          variant="primary"
          type="submit"
        >
          Sign Up
        </Button>
      </Form>
    </div>
        </div>
    );
};

export default SignUp;