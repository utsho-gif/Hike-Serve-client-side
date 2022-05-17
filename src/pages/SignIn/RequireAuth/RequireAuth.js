import React, { useState } from 'react';
import auth from '../../../firebase.init';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import { HashLoader } from "react-spinners";
import { css } from "@emotion/react";

const override = css`
  display: flex;
  margin: auto auto;
  border-color: red;
  margin-top: 20%;
`;

const RequireAuth = ({children}) => {
    let [color] = useState("#36D7B7");
    const location = useLocation();
    const [user, loading, error] = useAuthState(auth);
    if(loading){
        return  <HashLoader style={{marginBottom:'50px'}} color={color} css={override} size={50}></HashLoader>
    }
    if(!user){
        return <Navigate to='/signin' state={{from: location}} replace></Navigate>
    }
    return children;
};

export default RequireAuth;