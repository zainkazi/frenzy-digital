import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import emailjs from "@emailjs/browser";

const Appointment = () => {
  const navigate = useNavigate();
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_v2edmjm",
        "template_2oqd62j",
        form.current,
        "xwJwtypssgLcbA5tP"
      )
      .then(
        () => {
          navigate("/booked");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="mt-20 py-8 bg-blue-700" id="appointment">
      <div className="text-center">
        <h1 className="text-5xl font-mono">Book an appointment</h1>
        <p className="text-xl p-5">
          Fill out this form to schedule an appointment with us!
        </p>
      </div>
      <form
        ref={form}
        className="flex flex-col items-center justify-center text-center"
      >
        <div className="my-3">
          <div className=" text-2xl">Name</div>
          <input
            type="text"
            name="from_name"
            className="w-72 p-2 border-2 border-black outline-none rounded"
          />
        </div>
        <div className="my-3">
          <div className=" text-2xl">Email</div>
          <input
            type="email"
            name="from_email"
            className="w-72 p-2 border-2 border-black outline-none rounded"
          />
        </div>
        <div className="my-3">
          <div className=" text-2xl">More Details</div>
          <textarea
            rows="8"
            cols="100"
            defaultValue=""
            name="message"
            className="p-2 border-2 w-72 md:w-max border-black outline-none rounded"
          ></textarea>
        </div>
        <div
          className="text-xl max-w-max select-none bg-blue-500 p-4 my-5 rounded-md border-2 border-black cursor-default font-semibold transition md:hover:bg-white bold"
          onClick={sendEmail}
        >
          Submit
        </div>
      </form>
    </div>
  );
};

export default Appointment;
