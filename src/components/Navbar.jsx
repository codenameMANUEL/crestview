import { useState } from "react";
import { AlignLeft, X } from "lucide-react";
import Logo from "../../src/assets/logo.png";
import { Link } from "react-router-dom";

export default function NavBar() {
  const [isTabOpen, setIsTabOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleTab = () => setIsTabOpen(!isTabOpen);
  const links = ["HOME", "ABOUT", "SERVICE", "PROJECT", "CAREER", "CONTACT"];

  return (
    <nav className="relative bg-white shadow-sm w-full font-space-grotesk">
      <div className="flex justify-between items-center h-16 px-4 sm:px-6 lg:px-8 md:hidden">
        <div className="flex justify-center">
          <Link to="/">
            <img alt="Logo" src={Logo} className="h-10 w-auto cursor-pointer" />
          </Link>
        </div>
        <div className="flex justify-start">
          <AlignLeft
            className="h-6 w-6 text-stone-800 cursor-pointer"
            onClick={toggleMenu}
          />
        </div>
      </div>

      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-40"
          onClick={toggleMenu}
        />
      )}

      <div
        className={`fixed inset-y-0 right-0 bg-white shadow-lg transform z-50 ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-700 ease-in-out w-3/4`}
      >
        <div className="flex items-center justify-between p-4">
          <span className="text-lg font-semibold"></span>
          <button onClick={toggleMenu} className="text-stone-800">
            <X className="h-6 w-6" />
          </button>
        </div>
        <div className="p-4">
          <ul className="space-y-7">
            {links.map((link, index) => (
              <li key={index} className="text-gray-800 hover:text-gray-600">
                <Link to={link === "HOME" ? "/" : `/${link.toLowerCase()}`}>
                  {link}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="hidden md:flex lg:hidden items-center justify-between h-20 px-4 sm:px-6 lg:px-8">
        <div className="flex  justify-center">
          <Link to="/">
            <img alt="Logo" src={Logo} className="h-12 w-auto cursor-pointer" />
          </Link>
        </div>
        <div className="flex justify-start">
          <AlignLeft
            className="h-6 w-6 text-stone-800 cursor-pointer"
            onClick={toggleTab}
          />
        </div>
      </div>

      {isTabOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-40"
          onClick={toggleTab}
        />
      )}

      <div
        className={`fixed inset-y-0 right-0 bg-white shadow-lg transform z-50 ${
          isTabOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out w-7/12`}
      >
        <div className="flex items-center justify-between p-4">
          <span className="text-lg font-semibold"></span>
          <button onClick={toggleTab} className="text-stone-800">
            <X className="h-6 w-6" />
          </button>
        </div>
        <div className="p-4 px-14">
          <ul className="space-y-4">
            {links.map((link, index) => (
              <li
                key={index}
                className="text-gray-800 hover:text-gray-600 pt-5"
              >
                <Link to={link === "HOME" ? "/" : `/${link.toLowerCase()}`}>
                  {link}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="hidden lg:flex items-center justify-between h-24 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-1 justify-start">
          <Link to="/">
          <img alt="Logo" src={Logo} className="h-12 w-auto cursor-pointer" />
          </Link>
        </div>
        <div className="flex flex-1 justify-center space-x-10">
          <Link to="/" className="text-stone-800">
            HOME
          </Link>
          <Link to="/about" className="text-stone-800">
            ABOUT
          </Link>
          <Link to="/service" className="text-stone-800">
            SERVICES
          </Link>
          <Link to="/project" className="text-stone-800">
            PROJECT
          </Link>
          <Link to="/career" className="text-stone-800">
            CAREER
          </Link>
          <Link to="/contact" className="text-stone-800">
            CONTACT
          </Link>
        </div>
      </div>
    </nav>
  );
}
