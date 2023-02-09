import React from "react";
import Amazon from "./assets/amazon.svg";
import Facebook from "./assets/facebook.svg";
import Google from "./assets/google.svg";
import colors from "./colors";

const Companies = () => {
  return (
    <div className={`text-center my-20 py-8 ${colors.THEME_COLOR}`}>
      <h1 className="text-5xl font-mono mx-5">Companies that trust us</h1>
      <div className="flex flex-col space-y-12 items-center my-12 justify-evenly text-2xl md:space-y-0 md:flex-row">
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
