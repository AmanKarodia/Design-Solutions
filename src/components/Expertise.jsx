import React from "react";
import { expertise } from "../constants";

function Expertise() {
  return (
    <div className="mt-10 border-t py-16 border-neutral-700 bg-gray-50">
      <div className="relative ">
        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-wide text-black mb-12">
          <span className="text-blue-500">Our</span> Expertise
        </h2>

        {/* Grid of expertise items */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {expertise.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center bg-emerald-600 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-shadow duration-300"
            >
              {/* Image */}
              <img
                src={item.image}
                alt={item.text}
                className="w-40 h-40 md:w-48 md:h-48 object-contain mb-6"
              />

              {/* Title */}
              <h3 className="text-xl text-white font-semibold mb-2">{item.text}</h3>

              {/* Description */}
              <p className="text-white">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Expertise;
