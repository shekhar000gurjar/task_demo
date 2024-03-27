import React from 'react'
import ContaImage from "../images/Image1.svg";

const GridNine = () => {
  return (
    <>
      <div className="pt-10">
        <div className="flex justify-center items-center h-auto flex-col">
          <div className="text-center text-5xl font-bold leading-11 mb-6">
            <p>
            Let’s
              <span className="text-orange-500">build</span>
              something
            </p>
            <p>
              <span className="text-orange-500">awesome</span>
              together!
            </p>
          </div>
        </div>
       

        <div className="flex justify-center mt-4 mb-8">
          <button className="text-white bg-[#F86642] hover:bg-orange-500 focus:ring-4 focus:ring-primary-300 rounded-lg px-6 py-2 font-montserrat font-semibold text-lg leading-26 uppercase">
            Start your risk free trial
          </button>
        </div>
        <div className="flex justify-center">
          <img src={ContaImage} alt="Container img" className="w-96 h-auto" />
        </div>
      </div>
    </>
  )
}

export default GridNine
