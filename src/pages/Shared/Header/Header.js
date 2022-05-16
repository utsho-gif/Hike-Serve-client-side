import React, { useState } from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import './Header.css'
import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';
import { useAuthState } from 'react-firebase-hooks/auth';
import { signOut } from 'firebase/auth';
import { ScaleLoader } from "react-spinners";
import { css } from "@emotion/react";
import CustomLink from '../CustomLink/CustomLink';

const override = css`
  display: block;
  margin: 0px 3px;
  border-color: red;
`;

const Header = () => {
  const [user, loading, error] = useAuthState(auth);
  let [color, setColor] = useState("#36D7B7");

  let loadingEle;
  if(loading){
    loadingEle = (
      <p>
        <ScaleLoader color={color} css={override} size={15}></ScaleLoader>
      </p>
    )
  }
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
      <Nav.Link as={CustomLink} to='/'>Home</Nav.Link>
      <NavDropdown title="More" id="collasible-nav-dropdown">
        { user? 
        <>
          <NavDropdown.Item as={CustomLink} to='/manageinventory'>Manage Item</NavDropdown.Item> 
          <NavDropdown.Item as={CustomLink} to='/addinventory'>Add Items</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item as={CustomLink} to='/myitems'>My Item</NavDropdown.Item>
        </>
        : <NavDropdown title="More" id="collasible-nav-dropdown" disabled></NavDropdown> 
      }
        
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