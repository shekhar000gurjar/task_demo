import React, { useState } from "react";
import { Link } from "react-router-dom";
import { MdMenu, MdClose } from "react-icons/md"; // Import icons from react-icons

const Topbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <header>
        <nav className="bg-[#E0EAF3] border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-gray-800">
          <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
            <Link href="https://flowbite.com" className="flex items-center font-bold">
              {/* <img src="#" className="mr-3 h-6 sm:h-9" alt="Logo" />
              <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">Task</span> */}
            </Link>
            <div className="flex items-center lg:order-2 font-bold">
              <Link
                to="#"
                className="text-white bg-[#F86642] hover:bg-orange-500 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800 uppercase font-bold"
              >
                Get started
              </Link>
            </div>
            <div className="lg:hidden">
              <button
                onClick={toggleMobileMenu}
                className="block px-2 text-gray-500 focus:outline-none focus:text-gray-700 dark:focus:text-white font-bold"
              >
                {isMobileMenuOpen ? <MdClose /> : <MdMenu />}
              </button>
            </div>
            <div
              className={`${
                isMobileMenuOpen ? "block" : "hidden"
              } lg:flex justify-between items-center w-full lg:w-auto lg:order-1 font-bold`}
            >
              <ul className="flex flex-col mt-4 lg:flex-row lg:space-x-8 lg:mt-0 font-bold">
                <li>
                  <Link
                    to="#"
                    className="block py-2 pr-4 pl-3 text-black rounded bg-primary-700 lg:bg-transparent lg:text-primary-700 lg:p-0 dark:text-white hover:text-orange-500 uppercase font-bold"
                    aria-current="page"
                  >
                    How it works
                  </Link>
                </li>
                <li>
                  <Link
                    to="#"
                    className="block py-2 pr-4 pl-3 text-black border-b border-gray-100 lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white hover:text-orange-500 uppercase font-bold"
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    to="#"
                    className="block py-2 pr-4 pl-3 text-black border-b border-gray-100 lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white hover:text-orange-500 uppercase font-bold"
                  >
                    Work
                  </Link>
                </li>
                <li>
                  <Link
                    to="#"
                    className="block py-2 pr-4 pl-3 text-black border-b border-gray-100 lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white hover:text-orange-500 uppercase font-bold"
                  >
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link
                    to="#"
                    className="block py-2 pr-4 pl-3 text-black border-b border-gray-100 lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white hover:text-orange-500 uppercase font-bold"
                  >
                    Blog
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Topbar;
