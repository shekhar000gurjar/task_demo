import React from "react";
import { ReactComponent as BotMessageSquare } from "../images/One.svg";
import { ReactComponent as Fingerprint } from "../images/two.svg";
import { ReactComponent as ShieldHalf } from "../images/three.svg";

export const features = [
  {
    icon: <BotMessageSquare />,
    text: "Costs 70% less",
    description:
      "We developed highly-optimized design processes to let us work fast and deliver incredible results—and we pass those savings on to you",
  },
  {
    icon: <Fingerprint />,
    text: "Multi-Platform Compatibility",
    description:
      "High-velocity is crucial to a startup’s success, and that’s why TDP delivers new designs every week so your momentum never falters",
  },
  {
    icon: <ShieldHalf />,
    text: "Built-in Templates",
    description:
      "TDP was built for flexibility—we quickly adapt and grow as you grow",
  },
];

const GridThree = () => {
  return (
    <div className="flex flex-col items-center mt-6 lg:my-20">
      <div className="flex justify-center items-center h-auto flex-col">
        <div className="text-center text-5xl font-bold leading-11 mb-6 capitalize">
          <p>
            A diverse team of
            <span className="text-orange-500"> passionate</span> tech nerds
            who are
          </p>
          <p>
            here to help your
            <span className="text-orange-500"> startup succeed</span>
          </p>
        </div>
      </div>
      <p className="my-2 text-lg text-center text-neutral-500 max-w-4xl">
        From ideation to expansion, TDP understands the unique demands of your
        startup—providing you with optimized design strategies and fast
        turnarounds for an affordable monthly subscription.
      </p>
      <div className="flex flex-wrap justify-center">
        {features.map((feature, index) => (
          <div
            key={index}
            className="w-full sm:w-1/2 lg:w-1/3 mb-8 mx-4 lg:mx-0 p-4"
          >
            <div className="flex flex-col items-center">
              <div className="p-2 text-orange-700 flex justify-center items-center">
                {feature.icon}
              </div>
              <h5 className="text-xl text-center mb-2">{feature.text}</h5>
              <p className="text-md text-neutral-500 text-center px-[70px]">
                {feature.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GridThree;
