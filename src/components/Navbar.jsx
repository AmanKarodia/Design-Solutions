import { Printer } from 'lucide-react';
import { useState } from 'react';
import logo from "../assets/logo.png";
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="relative z-20 py-10 backdrop-blur-lg shadow-2xl">
      <div className="container px-4 mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center flex-shrink-0">
          <img className="h-7 w-12 mr-2" src={logo} alt="Logo" />
        </div>

        {/* Desktop Nav Items */}
        <div className="hidden md:flex flex-grow justify-center space-x-5">
          <Link to="/" className=" transition">Home</Link>
          <Link to="/story" className=" transition">About Us</Link>
          <Link to="/Contact" className=" transition">Contact Us</Link>
        </div>

        {/* Right Side Items */}
        <div className="hidden md:flex items-end">
          <button className=" transition">
            <Printer />
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 rounded-md hover:bg-gray-200"
          >
            {/* Hamburger icon */}
            {isOpen ? "✕" : "☰"}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden shadow-md py-2 px-4 flex flex-col space-y-2">
          <Link to="/" className=" transition">Home</Link>
          <Link to="/About" className=" transition">About Us</Link>
          <Link to="/Contact" className=" transition">Contact Us</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;