import { aboutus } from "../constants";
import { Link } from "react-router-dom";

function AboutUs() {
  return (
    <div className="relative">
      {/* Heading */}
      <h2 className="mt-10 text-3xl sm:text-4xl lg:text-5xl font-bold tracking-wide text-black">
        About Us
      </h2>

      {/* Grid */}
        <div className="mt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {aboutus.map((item, index) => (
            <div key={index} className="flex  flex-col">
              {/* Card */}
              <div className="flex flex-col bg-white rounded-2xl p-6 shadow-2xl hover:shadow-2xl transition-shadow duration-300">
                {/* Heading */}
                <h3 className="text-2xl text-emerald-500 font-semibold mb-2">
                  {item.text}
                </h3>

                {/* Description */}
                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
  );
}

export default AboutUs;