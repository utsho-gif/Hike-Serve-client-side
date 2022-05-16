import React from "react";
import "./NotFound.css";
import {motion} from 'framer-motion';
import {BsFillEmojiWinkFill} from 'react-icons/bs';

const NotFound = () => {
  return (
    <div className="page">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 my-5">
            <div className="mt-5">
              <motion.h1 animate={{rotate: -45}} transition={{ ease: "easeOut", duration: 0.5 }} className="my-5">Opps!</motion.h1>
            </div>
            <div>
              <h2>We can't seem to find the page you're looking for.</h2>
            </div>
            <div>
              <h4 className="mt-5">
                PS: This page is under construction. Give us some time. Untill
                then make a trip elsewhere. <BsFillEmojiWinkFill className="text-success"></BsFillEmojiWinkFill>
              </h4>
            </div>
          </div>
          <div className="col-lg-6 ">
            <img className="img-fluid" src={'https://i.ibb.co/Kx8zvPQ/404.jpg'} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;