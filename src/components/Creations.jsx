import React from 'react';
import { ReasonsToPick } from "../constants";

function Creations() {

  return (
    <div className="relative mt-20">
      {/* Heading */}
      <div className="text-end">
        <h2 className="text-3xl text-black sm:text-4xl lg:text-5xl mt-10 lg:mt-20 tracking-wide font-bold">
          What Printing <span className="text-blue-500">Creations Do We Offer?</span>
        </h2>
      </div>

      {/* Features Grid */}
      <div className="mt-10 lg:mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-6 ">
        {ReasonsToPick.map((feature, index) => (
          <div
            key={index}
            className="w-full bg-emerald-600 bg-opacity-15 rounded-xl p-6 flex flex-col items-center text-center"
          >
            {/* Icon */}
            <div className="flex justify-center items-center w-20 h-20 text-white rounded-full text-5xl">
              {feature.icon}
            </div>

            {/* Text */}
            <h5 className="mt-6 text-white mb-2 text-xl font-sans">{feature.text}</h5>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Creations;