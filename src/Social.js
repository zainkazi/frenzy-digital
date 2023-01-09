import React from "react";
import facebookLogo from "./assets/facebook-small.svg";
import instagramLogo from "./assets/instagram-small.svg";
import twitterLogo from "./assets/twitter-small.svg";

const Social = () => {
  return (
    <>
      <a href="#appointment">
        <img
          src={facebookLogo}
          alt="Facebook Link"
          className="w-12 transition md:w-8 md:hover:scale-125"
        />
      </a>
      <a href="#appointment">
        <img
          src={instagramLogo}
          alt="Instagram Link"
          className="w-12 transition md:w-8 md:hover:scale-125"
        />
      </a>
      <a href="#appointment">
        <img
          src={twitterLogo}
          alt="Twitter Link"
          className="w-12 transition md:w-8 md:hover:scale-125"
        />
      </a>
    </>
  );
};

export default Social;
