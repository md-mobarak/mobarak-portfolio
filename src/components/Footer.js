/* eslint-disable react/jsx-no-duplicate-props */
import { ToggleContext } from "@/pages/_app";
import { useContext } from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { IoMail } from "react-icons/io5";

const Footer = () => {
  const { toggleColor, setToggleColor } = useContext(ToggleContext);
  return (
    <div className="lg:px-20 px-10">
      <div
        className={`cursor-pointer  ${
          toggleColor
            ? "bg-gradient-to-t from-info via-success to-success border-info"
            : "  "
        } mt-20 border-t-2 py-10 px-5 lg:px-20   lg:grid grid-cols-4 lg:space-x-6`}
      >
        <div className="lg:w-1/2">
          <h1
            className={` ${
              toggleColor ? "text-info" : " text-success"
            }  text-3xl my-3`}
          >
            MOBARAK
          </h1>
          <p
            // className="text-white"
            className={`lg:text-justify ${
              toggleColor
                ? "hover:text-info text-white"
                : " text-accent hover:text-success"
            }`}
          >
            When I am working on a problem I never think about beauty but when I
            have finished, if the solution is not beautiful, I know it is wrong
          </p>
        </div>
        <div className="lg:w-1/2 ">
          <h1
            className={` ${
              toggleColor ? "text-info" : " text-success"
            }  text-3xl my-3`}
          >
            Links
          </h1>
          <p
            className={`mb-2${
              toggleColor
                ? "hover:text-info text-white"
                : " text-accent hover:text-success"
            }`}
          >
            {" "}
            Home
          </p>
          <p
            className={`mb-2${
              toggleColor
                ? "hover:text-info text-white"
                : " text-accent hover:text-success"
            }`}
          >
            {" "}
            Portfolio
          </p>
          <p
            className={`mb-2${
              toggleColor
                ? "hover:text-info text-white"
                : " text-accent hover:text-success"
            }`}
          >
            {" "}
            About
          </p>
          <p
            className={`mb-2${
              toggleColor
                ? "hover:text-info text-white"
                : " text-accent hover:text-success"
            }`}
          >
            {" "}
            Skills
          </p>
          <p
            className={`mb-2${
              toggleColor
                ? "hover:text-info text-white"
                : " text-accent hover:text-success"
            }`}
          >
            {" "}
            Services
          </p>
          <p
            className={`mb-2${
              toggleColor
                ? "hover:text-info text-white"
                : " text-accent hover:text-success"
            }`}
          >
            {" "}
            Contact
          </p>
        </div>
        <div className="lg:w-1/2">
          <h1
            className={` ${
              toggleColor ? "text-info" : " text-success"
            }  text-3xl my-3`}
          >
            Services
          </h1>
          <p
            className={`mb-2${
              toggleColor
                ? "hover:text-info text-white"
                : " text-accent hover:text-success"
            }`}
          >
            Web Development
          </p>
          <p
            className={`mb-2${
              toggleColor
                ? "hover:text-info text-white"
                : " text-accent hover:text-success"
            }`}
          >
            {" "}
            Web Design
          </p>
          <p
            className={`mb-2${
              toggleColor
                ? "hover:text-info text-white"
                : " text-accent hover:text-success"
            }`}
          >
            {" "}
            Business Strategy
          </p>
        </div>
        <div className="lg:w-1/2 hover:text-info">
          <h1
            className={` ${
              toggleColor ? "text-info" : " text-success"
            }  text-3xl my-3`}
          >
            Address
          </h1>
          <div
            className={`flex space-x-4 items-center mb-2${
              toggleColor
                ? "hover:text-info text-white"
                : " text-accent hover:text-success"
            }`}
          >
            <FaLocationDot className="h-5 w-5"></FaLocationDot>
            <span>Bangladesh</span>
          </div>
          <div
            className={`flex space-x-4 items-center mb-2${
              toggleColor
                ? "hover:text-info text-white"
                : " text-accent hover:text-success"
            }`}
          >
            <p>
              <FaPhoneAlt className="h-5 w-5"></FaPhoneAlt>
            </p>
            <p> +8801825639631</p>
          </div>
          <div
            className={`flex space-x-4 items-center mb-2${
              toggleColor
                ? "hover:text-info text-white"
                : " text-accent hover:text-success"
            }`}
          >
            <p>
              <IoMail className="h-5 w-5"></IoMail>
            </p>
            <p>Riponbhai782@gmail.com</p>
          </div>
        </div>
      </div>
      <p
        className={`text-center text-white border-t border-white ${
          toggleColor ? " bg-info" : "bg-accent"
        } pb-5 pt-3 text-xl `}
      >
        Copyright © 2023. All Rights Reserved.
        <span className="text-red-500">❤</span>
      </p>
    </div>
  );
};

export default Footer;
