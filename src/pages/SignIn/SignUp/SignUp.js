import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import {
  useCreateUserWithEmailAndPassword,
  useUpdateProfile,
} from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import auth from "../../../firebase.init";
import { MdOutlineAppRegistration } from "react-icons/md";
import { HashLoader } from "react-spinners";
import { css } from "@emotion/react";
import SocialLogin from "../SocialLogin/SocialLogin";

const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;

const SignUp = () => {
  const [passErr, setPassErr] = useState("");
  let [color, setColor] = useState("#36D7B7");
  const navigate = useNavigate();
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });

  const [updateProfile, updating, updateError] = useUpdateProfile(auth);

  let loadingEle;
  if (loading) {
    loadingEle = (
      <p>
        <HashLoader color={color} css={override} size={50}></HashLoader>
      </p>
    );
  }

  let errorEle;
  if (error) {
    errorEle = <p className="text-danger fw-bold">{error?.message}</p>;
  }
  let passEle;
  if (passErr) {
    passEle = <p className="text-danger fw-bold">{passErr}</p>;
  }

  const handleSignup = async (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    const confpass = event.target.ConfPassword.value;
    const displayName = event.target.name.value;
    if (password === confpass) {
      await createUserWithEmailAndPassword(email, password);
      const url = `https://aqueous-taiga-75883.herokuapp.com/login`;
      fetch(url, {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({ email }),
      })
        .then((res) => res.json())
        .then((data) => {
          localStorage.setItem("accessToken", data.accessToken);
        });
    } else {
      setPassErr("Password doesn't match");
    }
    await updateProfile({ displayName });
  };
  if (user) {
    navigate("/home");
  }
  return (
    <div className="container">
      <div className="container w-50 mb-4">
        <h2 className="text-secondary text-center my-5">
          Sign Up <MdOutlineAppRegistration></MdOutlineAppRegistration>
        </h2>
        <Form onSubmit={handleSignup}>
          <Form.Group
            className="mb-5 d-flex justify-content-center"
            controlId="formBasicEmail"
          >
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
          {passErr ? passEle : loadingEle}
          {error ? errorEle : loadingEle}
          <Button
            className="w-50 mx-auto d-block rounded-pill mb-1"
            variant="primary"
            type="submit"
          >
            Sign Up
          </Button>
        </Form>
        <p className="mt-4">
          Already have an account?
          <Link to="/signin" className="text-decoration-none ms-2">
            Sign In
          </Link>
        </p>
        <SocialLogin></SocialLogin>
      </div>
    </div>
  );
};

export default SignUp;
