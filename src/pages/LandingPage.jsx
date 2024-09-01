import React from "react";
import { exampleData } from "../data/exampleData";

const LandingPage = () => {
  return (
    <>
      <header>
        <nav className="border-gray-200 px-4 py-2.5 dark:bg-gray-800">
          <div className="flex justify-between items-center mx-auto max-w-screen-xl">
            <div className="flex items-center w-auto">
              <div className="w-20"></div>
            </div>
            <div className="flex items-center w-auto">
              <div className="w-20"></div>
            </div>
            <div className="flex items-center w-auto">
              <div className="w-10"></div>
            </div>

            <div className="flex-grow flex items-center justify-center">
              <div className="h-12 w-auto lg:h-24 lg:w-auto">
                <img
                  src="/logo.png"
                  alt="headline_img"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>

            <div className="flex items-center">
              <a
                href="#"
                className="text-white font-medium rounded-lg text-md px-4 lg:px-5 py-2 lg:py-2.5 mr-2"
              >
                LOG IN
              </a>
              <a
                href="#"
                className="text-white font-medium rounded-lg text-md px-4 lg:px-5 py-2 lg:py-2.5 mr-2"
              >
                SIGN UP
              </a>
            </div>
          </div>
        </nav>
      </header>
      <div>
        {exampleData.map(({ title, model }) => (
          <div className="border-gray-100 border rounded-lg my-8 mx-10 px-4 py-4 bg-gray-900">
            <p>{title}</p>
            <p>{model}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default LandingPage;
