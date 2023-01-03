import React from "react";
import homepageIcon from "./assets/computer.png";

const Homepage = () => {
  return (
    <div className="mx-40 my-20 border-2 border-blue-700">
      <div className="flex justify-center text-center flex-col md:flex-row md:text-left">
        <div className="w-64">
          <img src={homepageIcon} alt="Homepage Icon" />
        </div>
        <div className="my-5 mx-10">
          <div className="text-blue-700 text-3xl font-mono">
            Facebook Marketing Agency <br /> For Local Businesses
          </div>
          <div className="text-xl max-w-max bg-blue-700 p-5 my-5 rounded-md border-2 border-blue-700 cursor-default font-semibold transition hover:bg-white bold">
            Scale Your Business
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;