import {
    MDBBtn,
    MDBCol,
    MDBContainer,
    MDBFooter,
    MDBInput,
    MDBRow,
  } from "mdb-react-ui-kit";
  import React from "react";
  import { Link } from "react-router-dom";
  import "./Footer.css";
//   import pop1 from "../../../images/works/works9.jpg";
//   import pop2 from "../../../images/works/works1.jpg";
//   import pop3 from "../../../images/works/works8.jpg";
  import { Button, Form, FormControl } from "react-bootstrap";
  import {ImLocation} from 'react-icons/im';
  import {BsFillTelephoneFill, BsFacebook, BsInstagram} from 'react-icons/bs';
  import {FiTwitter} from 'react-icons/fi';
  import {FaCopyright} from 'react-icons/fa';
  
  const Footer = () => {
    return (
      <MDBFooter className="text-center w-100" color="white" bgColor="dark">
        <MDBContainer className="p-4">
          <section className="">
            <MDBRow>
              <MDBCol lg="4" md="6" className="mb-4 mb-md-0">
                <h6 className="text-uppercase text-start">Popular Posts</h6>
  
                <ul className="list-unstyled mb-0">
                  <li className="mb-2">
                    <Link to={"/"}>
                      <img
                        className="p-1 border border-secondary border-2 w-25"
                        height="90"
                        alt=""
                      />
                    </Link>
                  </li>
                  <li className="mb-2">
                    <Link to={"/"}>
                      <img
                        className="p-1 border border-secondary border-2 w-25"
                        height="90"
                        alt=""
                      />
                    </Link>
                  </li>
                  <li>
                    <Link to={"/"}>
                      <img
                        className="p-1 border border-secondary border-2 w-25"
                        height="90"
                        alt=""
                      />
                    </Link>
                  </li>
                </ul>
              </MDBCol>
  
              <MDBCol lg="4" md="6" className="mb-4 mb-md-0">
                <h6 className="text-uppercase text-start">Tags</h6>
  
                <ul className="list-unstyled mb-0 taglist d-flex flex-wrap">
                  <li>
                    <Link to={"/"}>web</Link>
                  </li>
                  <li>
                    <Link to={"/"}>photography</Link>
                  </li>
                  <li>
                    <Link to={"/"}>Illustration</Link>
                  </li>
                  <li>
                    <Link to={"/"}>Fun</Link>
                  </li>
                  <li>
                    <Link to={"/blog"}>blog</Link>
                  </li>
                  <li>
                    <Link to={"/"}>Commercial</Link>
                  </li>
                  <li>
                    <Link to={"/"}>Journal</Link>
                  </li>
                  <li>
                    <Link to={"/"}>Nature</Link>
                  </li>
                  </ul>
                  <h6 className="text-uppercase mt-4 text-start">Elsewhere</h6>
                  <div className="d-flex">
                    <p className="me-4"><FiTwitter></FiTwitter></p>
                    <p className="me-4"><BsFacebook></BsFacebook></p>
                    <p><BsInstagram></BsInstagram></p>
                  </div>
                  
                  
              </MDBCol>
  
              <MDBCol lg="4" md="6" className="mb-4 mb-md-0">
                <h6 className="text-uppercase text-start">Search</h6>
                <Form className="d-flex">
                  <FormControl
                    type="search"
                    placeholder="Search"
                    className="ms-3"
                    aria-label="Search"
                  />
                  <Button variant="outline-success ms-3">Search</Button>
                </Form>
                <h6 className="mt-5 text-start text-uppercase">Get in touch</h6>
                <p><ImLocation></ImLocation> 143/1(B), North Matikata, Cantonment</p>
                <p className="text-start ms-4"><BsFillTelephoneFill></BsFillTelephoneFill> +8801644781588</p>
              </MDBCol>
            </MDBRow>
          </section>
        </MDBContainer>
  
        <div
          className="text-center p-3"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
        >
         <FaCopyright className="mb-1"></FaCopyright> {(new Date().getFullYear())} Copyright: All Right Reserved by Hike Serve.
        </div>
      </MDBFooter>
    );
  };
  
  export default Footer;