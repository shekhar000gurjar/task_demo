import React from "react";
import { Link } from "react-router-dom";
import Packages from "../images/Packages.svg"
const GridSeven = () => {
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
      <div className="mx-auto max-w-screen-md text-center mb-8 lg:mb-12">
  <div className="flex justify-center pb-10">
    <img className="object-cover max-w-full h-auto" src={Packages} alt="Skilline Image" />
  </div>
  {/* <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
    Pricing
  </h2> */}
</div>

        <div className="space-y-8 lg:grid lg:grid-cols-3 sm:gap-6 xl:gap-6 lg:space-y-0 lg:px-28">
          {/* Pricing Card 1 */}
          <div className="flex flex-col lg:p-6 mx-auto text-center text-gray-900 rounded-lg border-2 border-[#FF734F] shadow justify-around">
            <h3 className="mb-4 text-2xl font-semibold">Silver</h3>
            <p className="font-light text-black">
              Great for basic UI/UX design needs
            </p>
            <div className="flex justify-center items-center flex-col my-8 border-b-2 border-[#FF734F] p-4">
              <div className="flex items-center">
                <span className="text-4xl font-extrabold text-[#FF734F]">
                  $2,600
                </span>
              </div>
              <div>
                <span className="dark:text-gray-400 text-[#FF734F]">
                  per month
                </span>
              </div>
            </div>
            <ul className="mb-8 space-y-2 space-x-6 text-center">
              <li className="flex items-center space-x-3">
                <span className="font-semibold uppercase">What’s included:</span>
              </li>
              <li className="flex items-center space-x-3">
                <span>UI execution</span>
              </li>
              <li className="flex items-center space-x-3">
                <span>Connect on Slack</span>
              </li>
              <li className="flex items-center space-x-3">
                <span>One 30 minute meeting a week</span>
              </li>
            </ul>
            <ul className="mb-8 space-y-2 space-x-6  text-center">
              <li className="flex items-center space-x-3">
                <span className="font-semibold uppercase">Design Team</span>
              </li>
              <li className="flex items-center space-x-4">
                <span>
                  1 designer working with 4-5 other customers at the same time
                </span>
              </li>
            </ul>
            <Link
              to="#"
              className="text-black border-2 border-black hover:bg-primary-700 font-bold rounded-lg text-sm p-2 text-center uppercase"
            >
              Try free
              <span className="inline-flex items-center justify-center w-4 h-4 ms-2 text-xl font-extrabold text-black">
                →
              </span>
            </Link>
          </div>

          {/* Pricing Card 2 */}
          <div className="flex flex-col lg:p-6 mx-auto text-center bg-[#FF734F] text-gray-900 rounded-lg border-2 border-[black] shadow justify-around">
            <h3 className="mb-4 text-2xl font-semibold">Gold</h3>
            <p className="font-light text-black">
            Great for end-to-end product design
            </p>
            <div className="flex justify-center items-center flex-col my-8 border-b-2 border-[white] p-4">
              <div className="flex items-center">
                <span className="text-4xl font-extrabold text-[black]">
                $3,595
                </span>
              </div>
              <div>
                <span className="text-gray-500 dark:text-gray-400">
                  per month
                </span>
              </div>
            </div>
            <ul className="mb-8 space-y-2 space-x-6 text-center text-white">
              <li className="flex items-center space-x-3">
                <span className="font-semibold uppercase">What’s included:</span>
              </li>
              <li className="flex items-center space-x-3">
                <span>Everything in Essential</span>
              </li>
              <li className="flex items-center space-x-3">
                <span>Full UI/UX design and research</span>
              </li>
              <li className="flex items-center space-x-3">
                <span>Dev ready Figma files</span>
              </li>
              <li className="flex items-center space-x-3">
                <span>One 1 hour meeting a week</span>
              </li>
            </ul>
            <ul className="mb-8 space-y-2 space-x-6 text-center text-white">
              <li className="flex items-center space-x-3">
                <span className="font-semibold uppercase">Design Team</span>
              </li>
              <li className="flex items-center space-x-3">
                <span>1 design lead</span>
              </li>
              <li className="flex items-center space-x-3">
                <span>1 designer working on 2-3 other <br/> customers at the same time</span>
              </li>
            </ul>
            <Link
              to="#"
              className="text-black border-2 border-black hover:bg-primary-700 font-bold rounded-lg text-sm p-2 text-center uppercase"
            >
              Try free
              <span className="inline-flex items-center justify-center w-4 h-4 ms-2 text-xl font-extrabold text-black">
                →
              </span>
            </Link>
          </div>

          {/* Pricing Card 3 */}
          <div className="flex flex-col lg:p-6 mx-auto text-center text-gray-900 rounded-lg border-2 border-[#FF734F] shadow justify-around">
            <h3 className="mb-4 text-2xl font-semibold">Premium</h3>
            <p className="font-light text-black">
            Great for products that require more design horsepower and tight timelines
            </p>
            <div className="flex justify-center items-center flex-col my-8 border-b-2 border-[#FF734F] p-4">
              <div className="flex items-center">
                <span className="text-4xl font-extrabold text-[#FF734F]">
                  $5,200
                </span>
              </div>
              <div>
                <span className=" dark:text-gray-400 text-[#FF734F]">
                  per month
                </span>
              </div>
            </div>
            <ul className="mb-8 space-y-2 space-x-6 text-start">
              <li className="flex items-center space-x-3">
                <span className="font-semibold uppercase">What’s included:</span>
              </li>
              <li className="flex items-center space-x-3">
                <span>Everything in Essential and Pro</span>
              </li>
              <li className="flex items-center space-x-3">
                <span>User Testing</span>
              </li>
              <li className="flex items-center space-x-3">
                <span>Figma Prototypes</span>
              </li>
              <li className="flex items-center space-x-3">
                <span>Flexible meetings</span>
              </li>
              <li className="flex items-start space-x-3">
                <span>Custom workflows to speed <br/> up delivery</span>
              </li>
            </ul>
            <ul className="mb-8 space-y-2 space-x-6  text-center">
              <li className="flex items-center space-x-3">
                <span className="font-semibold uppercase">Design Team</span>
              </li>
              <li className="flex items-center space-x-4">
                <span>
                1 design lead
                </span>
              </li>
              <li className="flex items-center space-x-4">
                <span>
                1 designer working on 1 other <br/> customer at the same time
                </span>
              </li>
            </ul>
            <Link
              to="#"
              className="text-black border-2 border-black hover:bg-primary-700 font-bold rounded-lg text-sm p-2 text-center uppercase"
            >
              Try free
              <span className="inline-flex items-center justify-center w-4 h-4 ms-2 text-xl font-extrabold text-black">
                →
              </span>
            </Link>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center mt-6 lg:mt-10">
        <div className="border-t-2 border-black p-4 lg:p-8">
          <h5 className="mt-4 text-lg sm:text-xl lg:text-xl text-center tracking-wide font-bold">
            Hey! Need a custom plan? <span className="text-[#F86642]"> Contact us!</span>
          </h5>
          <p className="mt-2 text-base lg:text-md text-center text-neutral-500 max-w-4xl">
            Try us risk-free for 7 days, if you don’t love us, get your money
            back.
          </p>
          <div className="flex justify-center my-6 lg:my-8">
            <Link
              to="#"
              className="bg-gradient-to-r text-white bg-[#FF734F] py-2 px-9 rounded-md text-base lg:text-sm uppercase"
            >
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GridSeven;
