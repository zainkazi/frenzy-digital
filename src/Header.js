import React from "react";
import logo from "./assets/frenzy-digital.svg";
import Social from "./Social";

const Header = () => {
  return (
    <div className="flex justify-center md:justify-between items-center">
      <div className="w-96">
        <img src={logo} alt="Logo" />
      </div>
      <div className="flex">
        <a href="#appointment">
          <div className="hidden md:block text-xl bg-blue-700 max-w-max p-4 m-5 rounded-md border-2 border-blue-700 select-none cursor-default font-semibold transition md:hover:bg-white bold">
            Contact Us
          </div>
        </a>
        <div className="hidden items-center justify-center space-x-3 mx-4 md:flex">
          <Social />
        </div>
      </div>
    </div>
  );
};

export default Header;
