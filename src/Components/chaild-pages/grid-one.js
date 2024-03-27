import React from "react";
import iconImage from "../images/check.svg";
import ContaImage from "../images/Image1.svg";

const GridOne = () => {
  return (
    <>
      <div className="bg-[#E0EAF3] pt-6">
        <div className="flex justify-center items-center h-auto flex-col">
          <div className="text-center text-5xl font-bold leading-11 mb-6">
            <p>
              Digital transformation is our{" "}
              <span className="text-orange-500">Motto</span>
            </p>
            <p>
              Let’s Create a Milestone{" "}
              <span className="text-orange-500">Together</span>
            </p>
          </div>
        </div>
        <div className="flex justify-center flex-wrap">
          <div className="flex items-center mb-2 px-4">
            <img src={iconImage} alt="Check Icon" className="w-6 h-6 mr-2" />
            <p className="text-center sm:text-left">No hiring headaches</p>
          </div>
          <div className="flex items-center mb-2 px-4">
            <img src={iconImage} alt="Check Icon" className="w-6 h-6 mr-2" />
            <p className="text-center sm:text-left">No hiring headaches</p>
          </div>
          <div className="flex items-center mb-2 px-4">
            <img src={iconImage} alt="Check Icon" className="w-6 h-6 mr-2" />
            <p className="text-center sm:text-left">No hiring headaches</p>
          </div>
        </div>

        <div className="flex justify-center mt-4">
          <button className="text-white bg-[#F86642] hover:bg-orange-500 focus:ring-4 focus:ring-primary-300 rounded-lg px-6 py-2 font-montserrat font-semibold text-lg leading-26 uppercase relative  lg:top-1 xl:top-2">
            Start your risk free trial
          </button>
        </div>
        <div className="flex justify-center">
          <img src={ContaImage} alt="Container img" className="w-96 h-auto" />
        </div>
      </div>
    </>
  );
};

export default GridOne;
