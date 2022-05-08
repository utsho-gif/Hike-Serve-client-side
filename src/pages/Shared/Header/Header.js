import React, { useState } from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import './Header.css'
import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';
import { useAuthState } from 'react-firebase-hooks/auth';
import { signOut } from 'firebase/auth';
import { HashLoader } from "react-spinners";
import { css } from "@emotion/react";

const override = css`
  display: block;
  margin: 5px auto;
  border-color: red;
`;

const Header = () => {
  const [user, loading, error] = useAuthState(auth);
  let [color, setColor] = useState("#36D7B7");

  let loadingEle;
  if(loading){
    loadingEle = (
      <p>
        <HashLoader color={color} css={override} size={35}></HashLoader>
      </p>
    )
  }
  console.log(user);
  const handleSignOut = () => {
    signOut(auth)
    .then(() => {})
    .catch((error) => {
      error(error.message);
    })
  }
    return (
        <Navbar collapseOnSelect expand="lg" variant="dark" className='fonts colors'>
  <Container>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
      <Nav.Link as={Link} to='/'>Home</Nav.Link>
      <Nav.Link as={Link} to='/inventory'>Inventory</Nav.Link>
      <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
      </NavDropdown>
    </Nav>
    <Nav>
    {!user && loadingEle}
      {user? <>
        {loadingEle}
        <p className='my-auto me-3 text-warning text-bold name-mod'>{user?.displayName}</p>
        <button onClick={handleSignOut} className='btn btn-outline-light my-auto h-25 modify'>Sign Out</button>
      </>  :  <Nav.Link as={Link} to='/signin'>Sign In</Nav.Link>}
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
    );
};

export default Header;