import React, { useRef, useState } from "react";
import { Button, Form } from "react-bootstrap";
import {
  useSignInWithEmailAndPassword,
  useSendPasswordResetEmail,
} from "react-firebase-hooks/auth";
import { CgLogIn } from "react-icons/cg";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { HashLoader } from "react-spinners";
import auth from "../../../firebase.init";
import { css } from "@emotion/react";
import SocialLogin from "../SocialLogin/SocialLogin";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;

const SignIn = () => {
  const emailRef = useRef("");
  let [color, setColor] = useState("#36D7B7");
  const navigate = useNavigate();
  const location = useLocation();
  const from = location?.state?.from.pathname || "/";
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);

  const [sendPasswordResetEmail, sending, resetError] =
    useSendPasswordResetEmail(auth);

  let loadingEle;
  if (loading) {
    loadingEle = (
      <p>
        <HashLoader color={color} css={override} size={50}></HashLoader>
      </p>
    );
  }

  let errorEle;
  if (error || resetError) {
    errorEle = (
      <p className="text-danger fw-bold">
        {error?.message || resetError?.message}
      </p>
    );
  }

  // if(user){
  //   navigate(from, { replace : true });
  // }

  const handleSubmit = async (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    await signInWithEmailAndPassword(email, password);
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
        navigate(from, { replace: true });
      });
  };
  const handleResetPass = async (event) => {
    const email = emailRef.current.value;
    if (email) {
      await sendPasswordResetEmail(email);
      toast.success("Email Send");
    } else {
      toast.error("Invalid Email");
    }
  };
  return (
    <div className="container">
      <div className="container w-50 mb-4">
        <h2 className="text-secondary text-center my-5">
          {" "}
          <span>Sign In</span>{" "}
          <span>
            <CgLogIn></CgLogIn>
          </span>
        </h2>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-5 w-100" controlId="formBasicEmail">
            <Form.Control
              ref={emailRef}
              name="email"
              type="email"
              placeholder="&#x2709;"
              required
            />
          </Form.Group>

          <Form.Group className="mb-5" controlId="formBasicPassword">
            <Form.Control
              name="password"
              type="password"
              placeholder="&#128477;"
              required
            />
          </Form.Group>
          {error ? errorEle : loadingEle}

          <Button
            className="w-50 mx-auto d-block rounded-pill mb-1"
            variant="primary"
            type="submit"
          >
            Sign In
          </Button>
        </Form>
        <p className="mt-4">
          Don't have account?
          <Link to="/signup" className="text-decoration-none ms-2">
            Create new Account
          </Link>
        </p>
        <p>
          Forget Password?
          <button
            onClick={handleResetPass}
            className="btn text-primary text-decoration-none"
          >
            Reset Password
          </button>
        </p>
        <SocialLogin></SocialLogin>
        <ToastContainer />
      </div>
    </div>
  );
};

export default SignIn;
