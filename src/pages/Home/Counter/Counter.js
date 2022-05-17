import React, { useEffect } from "react";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";

const Counter = () => {
  return (
    <div className="container bg-warning my-5">
      <div className="p-5">
         <h1 className="text-light">Today's Delivery</h1> 
        <h3><CountUp end={235} duration={5} suffix=' pieces' redraw={true}>
          {({ countUpRef, start }) => (
            <VisibilitySensor onChange={start} delayedCall>
              <span ref={countUpRef} />
            </VisibilitySensor>
          )}
        </CountUp></h3>
      </div>
    </div>
  );
};

export default Counter;
