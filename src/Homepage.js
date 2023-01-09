import React from "react";
import homepageIcon from "./assets/computer.png";
import Social from "./Social";

const Homepage = () => {
  return (
    <div className="mx-auto md:mx-40 my-10 md:my-20">
      <div className="flex justify-center items-center text-center flex-col md:flex-row md:text-left">
        <div className="w-64">
          <img src={homepageIcon} alt="Homepage Icon" />
        </div>
        <div className="my-5 mx-10">
          <div className="text-blue-700 text-3xl font-mono">
            Facebook Marketing Agency <br /> For Local Businesses
          </div>
          <a href="#appointment">
            <div className="text-xl md:max-w-max select-none bg-blue-700 p-5 my-5 rounded-md border-2 border-blue-700 cursor-default font-semibold transition md:hover:bg-white bold">
              Scale Your Business
            </div>
          </a>
        </div>
      </div>
      <div className="flex items-center justify-center space-x-5 mx-4 md:hidden">
        <Social />
      </div>
    </div>
  );
};

export default Homepage;
