import React from "react";
import { motion } from "framer-motion";
import { Carousel } from "react-bootstrap";

const Banner = () => {
  return (
    <Carousel fade>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://i.ibb.co/bJSfsXT/banner3.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <motion.h2
            style={{fontFamily: "Open Sans", lineHeight: '38px', fontWeight: '700', fontSize: '34px',}}
            animate={{ y: [0, -140], x: [0, 130] }}
            transition={{ ease: "easeOut", duration: 1.5 }}
            redraw={true}
          >
            All types of expensive and fragile goods
            
          </motion.h2>
          <motion.p
            animate={{ y: [0, -140], x: [0, 300] }}
            transition={{ ease: "easeOut", duration: 2 }}
            className="fw-bold"
          >
            Best infrstructure & Equipment
          </motion.p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://i.ibb.co/VWcr4xN/banner2.jpg"
          alt="Second slide"
        />

        <Carousel.Caption  className="text-dark">
        <motion.h1
            style={{fontFamily: "Open Sans", lineHeight: '38px', fontWeight: '700', fontSize: '34px',}}
            animate={{ y: [0, -300], x: [0, 200] }}
            transition={{ ease: "easeOut", duration: 1.5 }}
            redraw={true}
          >
            The Largest Fleet
            
          </motion.h1>
          <motion.p
            animate={{ y: [0, -300], x: [0, 240] }}
            transition={{ ease: "easeOut", duration: 2 }}
            className="fw-bold"
          >
            Ready to deliver goods 
          </motion.p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://i.ibb.co/MBNsXn5/10158-1500x720.jpg"
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
  );
};

export default Banner;
