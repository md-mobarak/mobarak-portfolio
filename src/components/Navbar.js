/* eslint-disable @next/next/no-img-element */
import { ToggleContext } from "@/pages/_app";
import { useContext, useState } from "react";
import { FaBars, FaMoon, FaTimes } from "react-icons/fa";
import { IoMdSunny } from "react-icons/io";
import { Link } from "react-scroll";

const Navbar = () => {
  const { toggleColor, setToggleColor } = useContext(ToggleContext);
  const [isOpen, setIsOpen] = useState(false);

  const handletoggleColor = () => {
    setToggleColor(!toggleColor);
  };

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };



  return (
    <div className="px-9 py-6  font-serif relative">
      <nav
        className={`rounded-xl    ${
          toggleColor ? "bg-success rounded-xl " : "bg-white  shadow-lg "
        }font-sans font-semibold grid grid-cols-3 z-50 p-6`}
      >
        <h1 className="lg:text-2xl lg:font-bold text-white uppercase font-serif cursor-pointer">
          <span className={`${!toggleColor && "text-warning"}`}>Mob</span>
          <span
            className={`${
              !toggleColor ? "text-success hover:text-warning" : "text-info"
            } `}
          >
            arak
          </span>
        </h1>
        <div className="lg:hidden relative">
          <button
            onClick={handletoggleColor}
            className={`${
              toggleColor ? "btn btn-xs  btn-info " : "btn-accent btn-xs"
            } ml-4 border border-info rounded-xl lg:hidden absolute top-0 left-6`}
          >
            {!toggleColor ? (
              <IoMdSunny className="text-accent  lg:h-5 lg:w-5 w-4 h-4 " />
            ) : (
              <FaMoon className="text-white  lg:h-5 lg:w-5 w-4 h-4 " />
            )}
          </button>
        </div>
        <div className="lg:hidden flex items-center absolute right-12 top-13">
          <button
            className={`${
              toggleColor ? "text-white" : "text-accent"
            } focus:outline-none`}
            onClick={handleToggle}
          >
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
        <div
          className={`lg:flex ${
            !toggleColor ? " text-accent " : "text-info"
          } lg:uppercase font-serif space-x-5 items-center ${
            isOpen ? "block" : "hidden"
          } lg:flex lg:space-x-8`}
        >
          <Link to="/" smooth={true} duration={500} onClick={handleToggle}>
            <p className=" mt-10 lg:mt-0 cursor-pointer">Home</p>
          </Link>
          <Link to="about" smooth={true} duration={500} onClick={handleToggle}>
            <p className=" cursor-pointer">About</p>
          </Link>
          <Link
            to="services"
            smooth={true}
            duration={500}
            onClick={handleToggle}
          >
            <p className=" cursor-pointer">Services</p>
          </Link>
          <Link
            to="portfolio"
            smooth={true}
            duration={500}
            onClick={handleToggle}
          >
            <p className=" cursor-pointer">Portfolio</p>
          </Link>
          <Link
            to="contact"
            smooth={true}
            duration={500}
            onClick={handleToggle}
          >
            <p className=" cursor-pointer">Contact</p>
          </Link>
          <Link href="/blog" onClick={handleToggle}>
            <p className="">Blog</p>
          </Link>
        </div>
        <div className="lg:flex hidden items-center justify-end">
          <button
            onClick={handletoggleColor}
            className={`${
              toggleColor ? "btn btn-xs  btn-info " : "btn-accent btn-xs"
            } mx-4 border border-info rounded-xl `}
          >
            {!toggleColor ? (
              <IoMdSunny className="text-accent  h-5 w-5 " />
            ) : (
              <FaMoon className="text-white h-5 w-5 " />
            )}
          </button>
          <button
            className={`btn ${
              toggleColor ? "btn-info" : "btn-accent"
            } text-white btn-sm`}
            onClick={handletoggleColor}
          >
            Hire me
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
