import React from "react";
import Amazon from "./assets/amazon.svg";
import Facebook from "./assets/facebook.svg";
import Google from "./assets/google.svg";

const Companies = () => {
  return (
    <div className="text-center my-20 py-8 border-2 border-blue-700 bg-blue-700">
      <h1 className="text-5xl font-mono">Companies that trust us</h1>
      <div className="flex items-center my-12 justify-evenly text-2xl">
        <div>
          <img src={Amazon} alt="Amazon" />
          <p>Amazon</p>
        </div>
        <div>
          <img src={Facebook} alt="Facebook" />
          <p>Facebook</p>
        </div>
        <div>
          <img src={Google} alt="Google" />
          <p>Google</p>
        </div>
      </div>
    </div>
  );
};

export default Companies;
