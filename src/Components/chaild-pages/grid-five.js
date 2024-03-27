import React from "react";
import ArrowDown from "../images/arrowDown.svg";

const GridFive = () => {
  return (
    <>
      <div className="relative w-full  px-6 pt-10 pb-8 mt-8  sm:mx-auto sm:rounded-lg sm:px-10">
        <div className="mx-auto px-5">
          <div className="flex flex-col items-center">
            <p className="mt-5 text-center text-3xl font-bold tracking-tight md:text-5xl">
              Our most <span className="text-[#F86642]"> frequently</span> asked
              questions
            </p>
          </div>
          <div className="mx-auto mt-8 grid px-4 lg:px-10 divide-y divide-neutral-200">
            <div className="py-5 border-b-2 border-solid border-orange-500 faq">
              <details className="group ">
                <summary className="flex cursor-pointer list-none items-center justify-between font-semibold text-2xl">
                  <span> Do I really get unlimited design services?</span>
                  <span className="transition group-open:rotate-180">
                    <img src={ArrowDown} alt="arrowicon" />
                  </span>
                </summary>
                <p className="group-open:animate-fadeIn mt-3 text-neutral-600">
                  Springerdata offers a variety of billing options, including
                  monthly and annual subscription plans, as well as
                  pay-as-you-go pricing for certain services. Payment is
                  typically made through a credit card or other secure online
                  payment method.
                </p>
              </details>
            </div>

            
            <div className="py-5 border-b-2 border-solid border-orange-500 faq">
              <details className="group">
                <summary className="flex cursor-pointer list-none items-center justify-between font-semibold text-2xl">
                  <span> What is a realistic turnaround time?</span>
                  <span className="transition group-open:rotate-180">
                    <img src={ArrowDown} alt="arrowicon" />
                  </span>
                </summary>
                <p className="group-open:animate-fadeIn mt-3 text-neutral-600">
                  We offer a 30-day money-back guarantee for most of its
                  subscription plans. If you are not satisfied with your
                  subscription within the first 30 days, you can request a full
                  refund. Refunds for subscriptions that have been active for
                  longer than 30 days may be considered on a case-by-case basis.
                </p>
              </details>
            </div>
            <div className="py-5 border-b border-solid border-orange-500 faq">
              <details className="group">
                <summary className="flex cursor-pointer list-none items-center justify-between font-semibold text-2xl">
                  <span> I need my designs ASAP—can you help?</span>
                  <span className="transition group-open:rotate-180">
                    <img src={ArrowDown} alt="arrowicon" />
                  </span>
                </summary>
                <p className="group-open:animate-fadeIn mt-3 text-neutral-600">
                  To cancel your subscription, you can log in to your account
                  and navigate to the subscription management page. From there,
                  you should be able to cancel your subscription and stop future
                  billing.
                </p>
              </details>
            </div>
            <div className="py-5 border-b border-solid border-orange-500 faq">
              <details className="group">
                <summary className="flex cursor-pointer list-none items-center justify-between font-semibold text-2xl">
                  <span>What types of projects do you work on?</span>
                  <span className="transition group-open:rotate-180">
                    <img src={ArrowDown} alt="arrowicon" />
                  </span>
                </summary>
                <p className="group-open:animate-fadeIn mt-3 text-neutral-600">
                  We offer a free trial of our software for a limited time.
                  During the trial period, you will have access to a limited set
                  of features and functionality, but you will not be charged.
                </p>
              </details>
            </div>
            <div className="py-5 border-b border-solid border-orange-500 faq">
              <details className="group">
                <summary className="flex cursor-pointer list-none items-center justify-between font-semibold text-2xl">
                  <span> What if I want to cancel my service?</span>
                  <span className="transition group-open:rotate-180">
                    <img src={ArrowDown} alt="arrowicon" />
                  </span>
                </summary>
                <p className="group-open:animate-fadeIn mt-3 text-neutral-600">
                  If you need help with our platform or have any other
                  questions, you can contact the company's support team by
                  submitting a support request through the website or by
                  emailing support@ourwebsite.com.
                </p>
              </details>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default GridFive;
