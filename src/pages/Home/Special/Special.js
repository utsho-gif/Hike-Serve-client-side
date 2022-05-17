import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Special.css";

const Special = () => {
  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 1000,
      easing: "ease",
    });
  });
  return (
    <div className="container my-5">
      <h2 style={{ fontWeight: "normal" }} data-aos="flip-left">
        Our <strong>Feature</strong>
      </h2>
      <div className="d-flex justify-content-center align-items-center">
        <div
          style={{
            height: "4px",
            borderRadius: "5px",
            backgroundColor: "#F7CD2E",
          }}
          className="w-25 mb-5"
        ></div>
      </div>
      <div className="row g-5">
        <div className="col-12 col-lg-4 col-md-6" data-aos="fade-right">
          <div className="d-flex">
            <div className="me-2">
              <img src="https://i.ibb.co/wLHR9Gn/icon1.png" alt="" />
            </div>
            <div className="text-start">
              <h4 className="f-size">ECONOMICAL AIR FREIGHT</h4>
              <div
                style={{
                  height: "3px",
                  width: "40px",
                  borderRadius: "5px",
                  backgroundColor: "#F7CD2E",
                }}
                className="my-2"
              ></div>
              <p>
                We supply trough economical flight which are more faster than
                any other services worldwide.
              </p>
            </div>
          </div>
        </div>
        <div className="col-12 col-lg-4 col-md-6" data-aos="fade-down">
          <div className="d-flex">
            <div className="me-2">
              <img src="https://i.ibb.co/0YLxGYm/icon2.png" alt="" />
            </div>
            <div className="text-start">
              <h4 className="f-size">WAREHOUSING</h4>
              <div
                style={{
                  height: "3px",
                  width: "40px",
                  borderRadius: "5px",
                  backgroundColor: "#F7CD2E",
                }}
                className="my-2"
              ></div>
              <p>
                Large Warehousing system. Stored more than five hundred product
                of various kind. But we mainly store hiking stuffs.
              </p>
            </div>
          </div>
        </div>
        <div className="col-12 col-lg-4 col-md-6" data-aos="fade-left">
          <div className="d-flex">
            <div className="me-2">
              <img src="https://i.ibb.co/SQGT2zj/icon3.png" alt="" />
            </div>
            <div className="text-start">
              <h4 className="f-size">SAME DAY DELIVERY</h4>
              <div
                style={{
                  height: "3px",
                  width: "40px",
                  borderRadius: "5px",
                  backgroundColor: "#F7CD2E",
                }}
                className="my-2"
              ></div>
              <p>
                Delivery on 24 hours. Committed to this. And those are
                registared on this website. Completely transparent to anyone.
              </p>
            </div>
          </div>
        </div>
        <div className="col-12 col-lg-4 col-md-6" data-aos="fade-right">
          <div className="d-flex">
            <div className="me-2">
              <img src="https://i.ibb.co/qWm3HPv/icon4.png" alt="" />
            </div>
            <div className="text-start">
              <h4 className="f-size">PAKAGING & STORAGE</h4>
              <div
                style={{
                  height: "3px",
                  width: "40px",
                  borderRadius: "5px",
                  backgroundColor: "#F7CD2E",
                }}
                className="my-2"
              ></div>
              <p>
                Well packaging to preserve the products safely. Safety is one of
                the most vital role of us.
              </p>
            </div>
          </div>
        </div>
        <div className="col-12 col-lg-4 col-md-6" data-aos="fade-up">
          <div className="d-flex">
            <div className="me-2">
              <img src="https://i.ibb.co/KwWGhCM/icon5.png" alt="" />
            </div>
            <div className="text-start">
              <h4 className="f-size">TIME BOUND DELIVERIES</h4>
              <div
                style={{
                  height: "3px",
                  width: "40px",
                  borderRadius: "5px",
                  backgroundColor: "#F7CD2E",
                }}
                className="my-2"
              ></div>
              <p>
                Fixed time to delivery every product. It's starts with packaging
                and end up with delivery the products.
              </p>
            </div>
          </div>
        </div>
        <div className="col-12 col-lg-4 col-md-6" data-aos="fade-left">
          <div className="d-flex">
            <div className="me-2">
              <img src="https://i.ibb.co/QpmGGbS/icon6.png" alt="" />
            </div>
            <div className="text-start">
              <h4 className="f-size">MULTI-MODAL TRANSPORT</h4>
              <div
                style={{
                  height: "3px",
                  width: "40px",
                  borderRadius: "5px",
                  backgroundColor: "#F7CD2E",
                }}
                className="my-2"
              ></div>
              <p>
                We've different types of transportation system through the
                country. We pick what's suitable for you.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Special;
