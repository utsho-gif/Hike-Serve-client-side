import React, { useState } from "react";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import { FcGoogle } from "react-icons/fc";
import { useLocation, useNavigate } from "react-router-dom";
import auth from "../../../firebase.init";
import { HashLoader } from "react-spinners";
import { css } from "@emotion/react";
import './SocialLogin.css';

const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;

const SocialLogin = () => {
  let [color, setColor] = useState("#36D7B7");
  const navigate = useNavigate();
  const location = useLocation();
  const from = location?.state?.from.pathname || '/';
  const [signInWithGoogle, googleUser, googleLoading, googleError] =
    useSignInWithGoogle(auth);
  let errorElement;
  if (googleLoading) {
    return <HashLoader color={color} css={override} size={50}></HashLoader>;
  }
  if (googleError) {
    errorElement = <p className="text-danger fw-bold">{googleError?.message}</p>;
  }

  if (googleUser) {
    navigate(from, {replace : true});
  }
  return (
    <div>
      <div className="d-flex justify-content-center align-items-center">
        <div style={{ height: "1px" }} className="bg-dark w-50"></div>
        <p className="mt-2 mx-2">or</p>
        <div style={{ height: "1px" }} className="bg-dark w-50"></div>
      </div>
      {errorElement}
      <div>
        <button
          onClick={() => signInWithGoogle()}
          className="btn btn-light shadow-sm border-secondary rounded-3 border-2 rounded-pill fw-bold text-secondary d-block mx-auto my-3 size"
        >
          <FcGoogle className="fw-bold mb-1 me-1 fs-5"></FcGoogle> Sign in with
          Google
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
