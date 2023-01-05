import React from "react";
import logo from "./assets/frenzy-digital.svg";

const Confirmation = () => {
  return (
    <div className="text-center mx-5 md:mx-40 my-10 font-mono">
      <div className="flex items-center justify-center mb-10">
        <img src={logo} alt="logo" />
      </div>
      <h1 className="text-3xl md:text-5xl text-blue-700">You're Booked!</h1>
      <p className="text-xl p-7">
        We have received your email and will contact you shortly.
      </p>
      <p>
        We wil call you via Zoom or phone at our free time slots. The time and
        date will be shared with you via email.
      </p>
      <br />
      <p className="text-xl">We look forward to helping you scale. CHEERS!</p>
    </div>
  );
};

export default Confirmation;
