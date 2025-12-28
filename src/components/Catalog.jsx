import { catalog } from "../constants";
import { Link } from "react-router-dom";

function Catalog() {
  return (
    <div className="relative px-4 sm:px-6 lg:px-12">
      {/* Heading */}
      <h2 className="mt-10 text-3xl sm:text-4xl lg:text-5xl font-bold tracking-wide text-black text-center">
        Catalog
      </h2>

      {/* Grid section */}
      <div className="mt-10 border-t py-12 sm:py-16 border-neutral-300 bg-gray-50 rounded-3xl">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-10">
          {catalog.map((item, index) => (
            <div key={index} className="flex">
              {/* Card */}
              <div className="flex flex-col bg-white rounded-2xl p-5 sm:p-6 shadow-xl w-full">
                {/* Image */}
                <div className="w-full h-48 sm:h-56 flex items-center justify-center mb-6">
                  <img
                    src={item.image}
                    alt={item.text}
                    className="max-h-full max-w-full object-contain rounded-xl"
                  />
                </div>

                {/* Content */}
                <h3 className="text-sm text-emerald-500 font-semibold mb-2">
                  {item.text}
                </h3>

                <p className="text-sm sm:text-base text-gray-700 flex-grow">
                  {item.description}
                </p>

                {/* CTA */}
                <Link
                  to="/store"
                  className="mt-6 text-center text-white bg-blue-600 rounded-full py-2.5 text-base sm:text-lg hover:bg-emerald-500 transition-all duration-300"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Back button */}
        <div className="mt-12 sm:mt-16 flex justify-center">
          <Link
            to="/"
            className="text-white bg-blue-600 rounded-full py-3 px-8 text-base sm:text-lg hover:bg-emerald-500 transition-all duration-300"
          >
            Go back home
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Catalog;
