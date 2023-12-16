/* eslint-disable @next/next/no-img-element */
/* eslint-disable @next/next/no-img-element */
import { ToggleContext } from "@/pages/_app";
// import Link from "next/link";
import { useContext } from "react";
import { Link } from "react-scroll";
// import { FaMoon } from "react-icons/fa";
// import { GoSun } from "react-icons/go";
const Navbar = () => {
  const { toggleColor, setToggleColor } = useContext(ToggleContext);
  // console.log(toggleColor);
  const handletoggleColor = () => {
    setToggleColor(!toggleColor);
  };
  // useEffect(() => {
  //   spy?.update();
  // }, []);

  // const handleSetActive = (to) => {
  //   // Add any additional logic if needed
  //   console.log(to);
  // };

  return (
    <div className=" px-9 py-6 relative ">
      <nav className=" font-sans   bg-success rounded-xl font-semibold   grid grid-cols-3  z-50  p-6  ">
        <h1 className="text-2xl font-bold text-white uppercase">
          Mob<span className="text-info hover:text-secondary">arak</span>
        </h1>
        <div className="lg:flex text-info justify-around uppercase space-x-5 items-center hidden font-serif">
          <Link to="/" smooth={true} duration={500}>
            <p className="hover:text-secondary ">Home</p>
          </Link>
          <Link
            to="about"
            smooth={true}
            duration={500}
            // spy={true}
            // offset={-50}
            // onSetActive={handleSetActive}
          >
            <p className="hover:text-secondary cursor-pointer">About</p>
          </Link>
          <Link to="services" smooth={true} duration={500}>
            <p className="hover:text-secondary cursor-pointer">Services</p>
          </Link>

          <Link to="portfolio" smooth={true} duration={500}>
            <p className="hover:text-secondary cursor-pointer">Portfolio</p>
          </Link>
          <Link href="/blog">
            <p className="hover:text-secondary">Blog</p>
          </Link>
          <Link href="/contact">
            <p className="hover:text-secondary">Contact</p>
          </Link>
        </div>
        <div className="flex justify-end ">
          <button className="btn btn-info hover:btn-secondary btn-sm ">
            Hire me
          </button>

          {/* <button
            onClick={handletoggleColor}
            className={`toggle-button ${toggleColor ? "dark" : "light"}`}
          >
            {toggleColor ? <FiMoon /> : <FiSun />}
          </button> */}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
