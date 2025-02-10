import React from "react";
import logo from "../assets/logoph.png";

const LandingPage = ({ onEnter }) => {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-gradient-to-r from-gray-900 via-gray-700 to-gray-900"
      style={{
        backgroundSize: "cover",
        backgroundBlendMode: "multiply",
      }}
    >
      
      <div className="absolute inset-0 bg-black bg-opacity-70 z-0"></div>

      
      <div className="z-10 flex flex-col items-center gap-6">
        <button
          onClick={onEnter}
          className="mt-4 p-0 border-none bg-transparent transform transition-all duration-300 hover:scale-105"
>
          <img
            src={logo}
            alt="Logo"
            className="h-40 w-40 md:h-96 md:w-96 lg:h-60 lg:w-60"
          />
        </button>
      </div>
    </div>
  );
};

export default LandingPage;