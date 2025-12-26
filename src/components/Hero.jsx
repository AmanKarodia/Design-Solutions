import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

// Import all JPGs from src/assets/Cat
const imageModules = import.meta.glob("../assets/Cat/*.jpg", {
  eager: true,
  as: "url",
});

const images = Object.values(imageModules);

function Hero() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!images.length) return;

    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Background Slideshow */}
      <div className="absolute inset-0">
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`Hero slide ${index + 1}`}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
              index === current ? "opacity-70" : "opacity-0"
            }`}
          />
        ))}
      </div>

      {/* Overlay (optional but makes text pop) */}
      <div className="absolute inset-0 bg-black/30 z-10" />

      {/* Content */}
      <div className="relative z-20 flex flex-col justify-center items-center h-full px-6 sm:px-12 md:px-20 lg:px-32 xl:px-48 text-center">
        <h1 className="text-blue-600 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight">
          Design Solutions
        </h1>

        <p className="mt-6 sm:mt-8 text-lg sm:text-xl md:text-2xl max-w-3xl">
          Crafting visually stunning and user-centric designs that elevate your
          brand and captivate your audience.
        </p>

        <div className="mt-8 flex justify-center">
          <Link
            to="/Store"
            className="text-white bg-blue-600 rounded-3xl py-3 px-6 text-lg hover:bg-emerald-500 transition-all duration-300"
          >
            Go to store
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Hero;
