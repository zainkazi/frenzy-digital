import React from "react";
import colors from "./colors";

const Revenue = () => {
  return (
    <div className="text-center mx-auto md:mx-40 my-20">
      <div
        className={`flex flex-col flex-wrap font-mono ${colors.REVENUE} border-b-4 mx-20 md:mx-0 ${colors.BORDER_COLOR}`}
      >
        <div className="text-3xl md:text-5xl text-black font-semibold">
          TOTAL REVENUE GENERATED
        </div>
        <div className="text-6xl md:text-9xl tracking-tight">$1.2 MILLION</div>
      </div>
      <div className="flex flex-col items-center justify-evenly space-y-5 text-xl my-10 md:flex-row md:space-y-0">
        <div>
          <div className={`text-10xl border-b-4 ${colors.BORDER_COLOR}`}>
            27
          </div>
          <div className="mt-3">Clients Helped</div>
        </div>
        <div>
          <div className={`text-10xl border-b-4 ${colors.BORDER_COLOR}`}>
            238K
          </div>
          <div className="mt-3">Ad Spend</div>
        </div>
        <div>
          <div className={`text-10xl border-b-4 ${colors.BORDER_COLOR}`}>
            07
          </div>
          <div className="mt-3">Services Offered</div>
        </div>
      </div>
    </div>
  );
};

export default Revenue;
