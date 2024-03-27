import React from "react";
import { Link } from "react-router-dom";
import FooterLogo from "../images/footerlogo.svg";
import GmailIcon from "../images/gmail.svg";
import InstaIcon from "../images/compny.svg";
import LinkdinIcon from "../images/linkdin.svg";

const Footer = () => {
  return (
    <div className="bg-[#1D1D1D]">
      <footer className="bg-[#1D1D1D] shadow dark:bg-gray-800">
        <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between md:py-10 lg:py-16 xl:py-20">
          <div className="md:flex-row md:items-center">
            <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
              <Link to="#">
                <img src={FooterLogo} alt="footerlogo" />
              </Link>
            </span>
            <div className="flex flex-col md:flex-row my-4 sm:px-5 md:px-5 lg:px-0">
              <Link
                to="#"
                className="flex text-white px-2 hover:underline mb-2 md:mb-0"
              >
                <img src={GmailIcon} alt="mailicon" className="pr-3" /> triontechsolution@gmail.com
              </Link>
              <Link
                to="#"
                className="flex text-white px-2 hover:underline mb-2 md:mb-0"
              >
                <img src={InstaIcon} alt="companyicon" className="pr-3" /> triontechsolution
              </Link>
              <Link
                to="#"
                className="flex text-white px-2 hover:underline mb-2 md:mb-0"
              >
                <img src={LinkdinIcon} alt="linkdinicon" className="pr-3" /> trion tech solution
              </Link>
            </div>
          </div>
          <ul className="items-center justify-start text-start mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
            <li>
              <Link
                to="#"
                className="hover:underline me-4 md:me-6 font-bold text-white text-15 py-1 block"
              >
                How it works
              </Link>
            </li>
            <li>
              <Link
                to="#"
                className="hover:underline me-4 md:me-6 font-bold text-white text-15 py-1 block"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="#"
                className="hover:underline me-4 md:me-6 font-bold text-white text-15 py-1 block"
              >
                Our work
              </Link>
            </li>
            <li>
              <Link
                to="#"
                className="hover:underline me-4 md:me-6 font-bold text-white text-15 py-1 block"
              >
                Blog
              </Link>
            </li>
            <li>
              <Link
                to="#"
                className="hover:underline font-bold text-white text-15 py-1 block"
              >
                Contact us
              </Link>
            </li>
          </ul>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
