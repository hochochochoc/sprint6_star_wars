import React from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/header/header";

const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <Header />
      <div className="relative">
        <div className="relative z-10 flex h-screen flex-col justify-center">
          <div className="flex flex-col items-center text-center">
            <p className="text-4xl">Welcome 2 star war!</p>
            <p className="text-md mt-1">Lorem oopsum</p>
          </div>
          <div className="mt-6 flex justify-center">
            <button
              className="rounded border bg-gray-900 px-12 py-3 text-xl font-semibold text-white hover:border-green-500 hover:border-transparent hover:bg-white hover:text-green-700"
              onClick={() => navigate("/main")}
            >
              List of Ships
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default LandingPage;
