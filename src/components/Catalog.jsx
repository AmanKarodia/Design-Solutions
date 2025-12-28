import { catalog } from "../constants";
import { Link } from "react-router-dom";

function Catalog() {
  return (
    <div className="relative">
      {/* Heading */}
      <h2 className="mt-10 text-3xl sm:text-4xl lg:text-5xl font-bold tracking-wide text-black">
        Catalog
      </h2>

      {/* Grid */}
      <div className="mt-10 border-t py-16 border-neutral-700 bg-gray-50">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {catalog.map((item, index) => (
            <div key={index} className="flex  flex-col">
              {/* Card */}
              <div className="flex flex-col bg-white rounded-2xl p-6 shadow-2xl hover:shadow-2xl transition-shadow duration-300">
                <img
                  src={item.image}
                  alt={item.text}
                  className="rounded-2xl object-contain mb-6"
                />

                {/* Heading */}
                <h3 className="text-sm text-emerald-500 font-semibold mb-2">
                  {item.text}
                </h3>

                {/* Description */}
                <p>{item.description}</p>

                {/* CTA inside card */}
                <Link
                  to="/store"
                  className="mt-5 text-center text-white bg-blue-600 rounded-3xl py-2 text-lg hover:bg-emerald-500 transition-all duration-300"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Back button */}
        <div className="mt-16 flex justify-center">
          <Link
            to="/"
            className="text-white bg-blue-600 rounded-3xl py-3 px-6 text-lg hover:bg-emerald-500 transition-all duration-300"
          >
            Go back home
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Catalog;