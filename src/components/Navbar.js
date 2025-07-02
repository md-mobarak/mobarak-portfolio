/* eslint-disable @next/next/no-img-element */
'use client';
import { ToggleContext } from "@/pages/_app";
import { useContext, useState, useEffect, useRef } from "react";
import { FaBars, FaMoon, FaTimes } from "react-icons/fa";
import { IoMdSunny } from "react-icons/io";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const { toggleColor, setToggleColor } = useContext(ToggleContext);
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [visible, setVisible] = useState(true);
  const navRef = useRef(null);
  const pathname = usePathname();

  const handletoggleColor = () => {
    setToggleColor(!toggleColor);
  };

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Add shadow when scrolled down
      setScrolled(currentScrollY > 50);

      // Hide navbar when scrolling down, show when scrolling up
      if (currentScrollY > 100) {
        setVisible(currentScrollY < lastScrollY);
      } else {
        setVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "#about" },
    { name: "Services", path: "#services" },
    { name: "Portfolio", path: "#portfolio" },
    { name: "Contact", path: "#contact" },
    { name: "Blog", path: "#blog" },
  ];

  return (
    <div className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      <nav
        ref={navRef}
        className={`px-10 py-6 font-serif transition-all duration-300 ${visible ? "translate-y-0" : "-translate-y-full"
          } ${scrolled
            ? toggleColor
              ? "bg-success shadow-lg"
              : "bg-white shadow-lg"
            : "bg-transparent"
          }`}
      >
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          {/* Brand Logo */}
          <Link href="/" className="z-50">
            <h1 className="text-2xl font-bold uppercase font-serif cursor-pointer">
              <span className={`${!toggleColor ? "text-orange-500" : "text-white"}`}>Mob</span>
              <span
                className={`${!toggleColor ? "text-green-600 hover:text-orange-500" : "text-blue-200"
                  }`}
              >
                arak
              </span>
            </h1>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <div
              className={`${!toggleColor ? " text-gray-700 " : "text-white"
                } uppercase font-serif space-x-8 flex items-center`}
            >
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.path}
                  className={`font-medium transition-colors duration-300 hover:text-orange-500 ${pathname === item.path
                    ? toggleColor
                      ? "text-blue-300"
                      : "text-orange-500"
                    : ""
                    }`}
                >
                  {item.name}
                </Link>
              ))}
            </div>

            <div className="flex items-center space-x-4 ml-4">
              <button
                onClick={handletoggleColor}
                className={`p-2 rounded-full ${toggleColor
                  ? "bg-blue-400 text-white"
                  : "bg-gray-200 text-gray-700"
                  }`}
              >
                {!toggleColor ? (
                  <IoMdSunny className="h-5 w-5" />
                ) : (
                  <FaMoon className="h-5 w-5" />
                )}
              </button>
              <button
                className={`px-4 py-2 rounded-full font-medium ${toggleColor
                  ? "bg-success hover:bg-blue-500 text-white"
                  : "bg-orange-500 hover:bg-orange-600 text-white"
                  } transition-colors`}
                onClick={handletoggleColor}
              >
                Hire me
              </button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center space-x-4">
            <button
              onClick={handletoggleColor}
              className={`p-2 rounded-full ${toggleColor
                ? "bg-success text-white"
                : "bg-gray-200 text-gray-700"
                }`}
            >
              {!toggleColor ? (
                <IoMdSunny className="h-5 w-5" />
              ) : (
                <FaMoon className="h-5 w-5" />
              )}
            </button>
            <button
              className={`p-2 rounded-lg ${toggleColor ? "text-white" : "text-gray-700"
                }`}
              onClick={handleToggle}
            >
              {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden fixed inset-0 bg-black/50 z-40 transition-opacity duration-300 ${isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
        onClick={() => setIsOpen(false)}
      />

      <div
        className={`lg:hidden fixed top-0 left-0 h-full w-80 bg-white z-40 transform transition-transform duration-300 ${toggleColor ? "dark:bg-gray-900" : ""
          } ${isOpen ? "translate-x-0" : "-translate-x-full"}`}
      >
        <div className="p-6 h-full flex flex-col">
          <div className="flex justify-between items-center mb-10">
            <Link href="/" onClick={() => setIsOpen(false)}>
              <h1 className="text-2xl font-bold uppercase font-serif">
                <span className={`${!toggleColor && "text-orange-500"}`}>Mob</span>
                <span
                  className={`${!toggleColor ? "text-green-600" : "text-blue-300"
                    }`}
                >
                  arak
                </span>
              </h1>
            </Link>
            <button
              className={`p-2 rounded-full ${toggleColor ? "text-white" : "text-gray-700"
                }`}
              onClick={() => setIsOpen(false)}
            >
              <FaTimes size={24} />
            </button>
          </div>

          <div className="flex-1">
            <div className={`space-y-4 ${toggleColor ? "text-white" : "text-gray-700"}`}>
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.path}
                  className={`block py-3 px-4 rounded-lg text-lg font-medium transition-colors ${pathname === item.path
                    ? toggleColor
                      ? "bg-blue-800 text-white"
                      : "bg-orange-100 text-orange-600"
                    : "hover:bg-gray-100 dark:hover:bg-gray-800"
                    }`}
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          <div className="pt-6 border-t border-gray-200 dark:border-gray-700">
            <button
              className={`w-full py-3 rounded-lg font-medium text-center ${toggleColor
                ? "bg-blue-500 hover:bg-blue-600 text-white"
                : "bg-orange-500 hover:bg-orange-600 text-white"
                } transition-colors`}
              onClick={() => {
                handletoggleColor();
                setIsOpen(false);
              }}
            >
              Hire Me
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;