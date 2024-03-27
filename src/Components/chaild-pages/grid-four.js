import React from "react";
import { ReactComponent as First } from "../images/01.svg";
import { ReactComponent as Second } from "../images/02.svg";
import { ReactComponent as Third } from "../images/03.svg";
import { ReactComponent as Group1 } from "../images/Group1.svg";
import { ReactComponent as Group2 } from "../images/Group2.svg";
import { ReactComponent as Group3 } from "../images/Group3.svg";

export const features = [
  {
    icon: <First />,
    Image: <Group1 />,
    text: "Sign up for one of our services",
    description:
      "Sign up for one of our affordable subscription play which offer a variety of options to fit your unique needs.",
  },
  {
    icon: <Second />,
    Image: <Group2 />,
    text: "Meet your perfect match",
    description:
      "We match you with the best TDP design expert for your needs. Then we schedule a call to learn about your startup.",
  },
  {
    icon: <Third />,
    Image: <Group3 />,
    text: "The first sprint begins (hold on tight)",
    description:
      "TDP manages the project, learns the intimate details of what your users want, and delivers impactful design iterations.",
  },
];

const GridFour = () => {
  return (
    <>
      <div className="flex flex-col items-center mt-6 lg:mt-14">
        <div className="flex justify-center items-center h-auto flex-col">
          <div className="text-center text-5xl font-bold leading-11 mb-6 capitalize">
            <p>
              How <span className="text-orange-500"> signing up</span> with The
              Design Project <span className="text-orange-500"> works</span>!?
            </p>
          </div>
        </div>
        <p className="mt-2 text-center text-[#1D1D1B] max-w-4xl">
          Take a minute to imagine how you’d feel watching your user count grow,
          and retention rates stay consistently high. When you prioritize
          effective UX, better retention and growth are natural consequences.
          Backed by countless hours of research and testing, TDP blends UX, UI,
          and Product design into a deliciously smooth process that fuels
          productivity and success.
        </p>
        <div className="flex flex-wrap justify-center mt-10">
          {features.map((feature, index) => (
            <div
              key={index}
              className="w-full sm:w-1/2 lg:w-1/3 mx-4 lg:mx-0 p-4"
            >
              <div className="flex flex-col items-center">
                <div className="flex h-10 w-10 p-2 bg-gradient-to-br from-red-500 via-red-600 to-orange-500 text-orange-700 justify-center items-center rounded-full mb-4">
                  {feature.icon}
                </div>
                <h5 className="text-xl text-[#F86642] text-center mb-4 lg:px-[140px]">{feature.text}</h5>
                <div className="p-2 text-orange-700 flex justify-center items-center">
                  {feature.Image}
                </div>
                <p className="text-md text-neutral-500 text-center lg:px-[90px]">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default GridFour;
