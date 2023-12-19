/* eslint-disable @next/next/no-img-element */
import { ToggleContext } from "@/pages/_app";
import { useContext, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
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
    <div className="px-9 py-6 relative">
      <nav className="font-sans bg-success rounded-xl font-semibold grid grid-cols-3 z-50 p-6 relative">
        <h1 className="text-2xl font-bold text-white uppercase">
          <span className="">Mob</span>
          <span className="text-info hover:text-secondary">arak</span>
        </h1>
        <div className="lg:hidden flex items-center absolute right-4 top-4">
          <button
            className="text-white focus:outline-none"
            onClick={handleToggle}
          >
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
        <div
          className={`lg:flex text-info uppercase space-x-5 items-center ${
            isOpen ? "block" : "hidden"
          } lg:flex lg:space-x-8`}
        >
          <Link to="/" smooth={true} duration={500} onClick={handleToggle}>
            <p className="hover:text-secondary">Home</p>
          </Link>
          <Link to="about" smooth={true} duration={500} onClick={handleToggle}>
            <p className="hover:text-secondary cursor-pointer">About</p>
          </Link>
          <Link
            to="services"
            smooth={true}
            duration={500}
            onClick={handleToggle}
          >
            <p className="hover:text-secondary cursor-pointer">Services</p>
          </Link>
          <Link
            to="portfolio"
            smooth={true}
            duration={500}
            onClick={handleToggle}
          >
            <p className="hover:text-secondary cursor-pointer">Portfolio</p>
          </Link>
          <Link href="/blog" onClick={handleToggle}>
            <p className="hover:text-secondary">Blog</p>
          </Link>
          <Link href="/contact" onClick={handleToggle}>
            <p className="hover:text-secondary">Contact</p>
          </Link>
        </div>
        <div className="lg:flex hidden justify-end">
          <button
            className="btn btn-info hover:btn-secondary btn-sm"
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
