import React from "react";

const Revenue = () => {
  return (
    <div className="text-center mx-auto md:mx-40 my-20">
      <div className="flex flex-col flex-wrap font-mono text-blue-700 border-b-4 mx-20 md:mx-0 border-blue-700">
        <div className="text-3xl md:text-5xl">TOTAL REVENUE GENERATED</div>
        <div className="text-6xl md:text-9xl">$1.2 MILLION</div>
      </div>
      <div className="flex flex-col items-center justify-evenly space-y-5 text-xl my-10 md:flex-row md:space-y-0">
        <div>
          <div className="text-10xl border-b-4 border-blue-700">27</div>
          <div className="mt-3">Clients Helped</div>
        </div>
        <div>
          <div className="text-10xl border-b-4 border-blue-700">238K</div>
          <div className="mt-3">Ad Spend</div>
        </div>
        <div>
          <div className="text-10xl border-b-4 border-blue-700">07</div>
          <div className="mt-3">Services Offered</div>
        </div>
      </div>
    </div>
  );
};

export default Revenue;
