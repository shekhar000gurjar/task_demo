import React from 'react';
import Frame from "../images/Frame.svg";

const GridTwo = () => {
  return (
    <>
      <div className="bg-[#292526] flex justify-center items-center p-4">
        <div className="flex flex-col items-center">
          <h5 className="text-4xl text-center tracking-wide text-white sm:p-6 uppercase">
            We helped our customers raise <span className="text-orange-500">$1B+</span>
          </h5>
          <img src={Frame} alt="frame" className="object-center w-full sm:w-1/2 py-2" />
        </div>
      </div>
    </>
  );
};

export default GridTwo;
